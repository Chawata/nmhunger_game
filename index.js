"use strict";

const Discord = require('discord.js');
const giphy = require('giphy-api')();
const cron = require('cron')
const axios = require('axios')
var fs = require('fs');
var cron_schedule = require('node-cron');

const bot = new Discord.Client();
const client = new Discord.Client();

const fileName = './Storage/contest_infos.json';
const contest_file = require(fileName);
const rankingFile = './Storage/ranking_infos.json'
const ranking_file = require(rankingFile)
const killsFile = './Storage/kills_ranking.json'
const kills_file = require(killsFile)

const {get_action_weighted, update_resume, update_resume2, is_death_action, update_players_list, update_played_players, update_death_reason, update_death_reason2} = require('./utils.js');
const {NMHE_PLAYERS} = require('./constants.js');
const {create_hg, get_ranking, get_kills_ranking, get_recap_death} = require('./game.js')

// var commandList = fs.readFileSync('Storage/commands.txt', 'utf8');
var players = []
var players_status = {}
var day_hg = 1
var cycle = "Jour"
var recap_death = []


bot.login(TOKEN HERE);

bot.on('ready', () => {
  bot.user.setPresence({game: {name:'Let\'s the hunt begin', type: 0}});
  console.log('Baymax is ready !');
});

bot.on('message', message => {
	if(message.author.username != "Baymax") {
		// Action to create HG
		if(message.content.startsWith('!create_hg')) {
			message.delete()
			var args = message.content.split(' ')
			var hg_number = contest_file.hg_number
			var terminaison = (hg_number==1) ? ('er ') : ('ème ')
			players.length = 0
			day_hg = 1
			players, players_status = create_hg(args[1], players, players_status)
			message.channel.send('https://i.makeagif.com/media/3-09-2017/bPSsed.gif')
			message.channel.send('Notre ' + hg_number + terminaison + 'NMHunger Games va bientôt commencer. Nous invitons les participants: ' +  players + ' à se préparer.')
		}
		// Action to proceed Day or Night cycle
		if(message.content.startsWith('!proceed')) {
			message.delete()
			if(cycle=="Jour") {
				if(day_hg==1) {
					var actions = get_actions("DAY1")		
				}
				else {
					var actions = get_actions("DAY")					
				}
			}
			else {
				var actions = get_actions("NIGHT")
			}
			message.channel.send('**'+ cycle + ' ' + day_hg + '**')
			// Splice the actions array in two, to send it via two messages instead of one message per action cause of the Discord's antispam
			var half = Math.ceil(actions.length / 2);
			const firstHalf = actions.splice(0, half)
			const secondHalf = actions.splice(-half)
			var firstMessageActions = ''
			var secondMessageActions = ''
			for(var action in firstHalf) {
				firstMessageActions += '**' + firstHalf[action][0] + ' ** ' + firstHalf[action][1] + '\n'
			}
			for(var action in secondHalf) {
				secondMessageActions += '**' + secondHalf[action][0] + ' ** ' + secondHalf[action][1] + '\n'
			}
			message.channel.send(firstMessageActions)
			message.channel.send(secondMessageActions)
			// Send a message to tell the user to proceed if there is no more player to play
			if(players.length != 1) {
				message.channel.send('Le **' + cycle + ' ' + day_hg + '** est terminé, !proceed pour continuer la partie.')
			}
			// Send death recap if it's the night
			if(cycle=="Nuit") {
				day_hg += 1
				var death_message = '**RECAP DES MORTS:** \n'
				for(var death in recap_death) {
					death_message += '**' + recap_death[death][0] + '** - ' + recap_death[death][1] + '\n'
				}
				recap_death = []
				message.channel.send(death_message)
			}
			cycle = (cycle=="Jour") ? (cycle="Nuit") : (cycle="Jour")
		}
		// Action to send global ranking
		if(message.content.startsWith("!ranking")) {
			var sorted_ranking = get_ranking("global")
			var ranking_message = ''
			for(var ranking in sorted_ranking) {
				ranking_message += '**' + sorted_ranking[ranking][0] +'** : ' + sorted_ranking[ranking][1] + '\n'
			}
			message.channel.send(ranking_message)
		}
		// Action to send global kills ranking
		if(message.content.startsWith("!kill_ranking")) {
			var sorted_ranking = get_ranking("kill")
			var ranking_message = ''
			for(var ranking in sorted_ranking) {
				ranking_message += '**' + sorted_ranking[ranking][0] +'** : ' + sorted_ranking[ranking][1] + '\n'
			}
			message.channel.send(ranking_message)
		}
	}
});

function get_actions(cycle) {
	var actions = []
	var action_weighted = get_action_weighted(cycle)
	if(cycle=="Jour") {
		recap_death = []
	}

	var played_players = []
	for(let player in players_status) {
		if(!(played_players.includes(player))){
			if(players_status[player][1] == "alive"){
				if(played_players.length == players.length - 1 && day_hg != 1 && cycle == "Jour") {
					action_weighted = get_action_weighted("ALONE")

					selected_actions = action_weighted[Math.floor(Math.random() * action_weighted.length)]
				}
				else {
					var selected_actions = action_weighted[Math.floor(Math.random() * action_weighted.length)]
				}
				// Get a random target player that is not the actual player, that is alive and that is not already played.
				var target_player = ''
				while(target_player == '' || target_player == players_status[player][0] || players_status[target_player][1] == "dead" || String(target_player) in played_players) {
					var random_player = Math.floor(Math.random() * players.length)
					target_player = players[random_player]
				}
				selected_actions = update_resume(selected_actions, players_status[player][0], target_player)
				actions.push([players_status[player][0], selected_actions.resume])
				selected_actions = update_resume2(selected_actions, players_status[player][0], target_player)
				played_players = update_played_players(selected_actions, played_players, player, target_player)
				if(is_death_action(selected_actions)) {
					players, players_status = update_players_list(selected_actions, player, target_player, players, players_status)
					recap_death = get_recap_death(selected_actions, player, target_player, recap_death)
				}
			}
		}
	}
	//If there is only one player left, end the HG
	if(players.length == 1) {
		actions.push([players[0], 'remporte ce NMHunger Games ! :trophy:'])
		ranking_file[players[0]] = parseInt(ranking_file[players[0]]) + 1;
		fs.writeFile(rankingFile, JSON.stringify(ranking_file), function writeJSON(err) {
			  if (err) return console.log(err);
			  console.log(JSON.stringify(ranking_file));
			  console.log('writing to ' + rankingFile);
		});
	}
	return actions
}