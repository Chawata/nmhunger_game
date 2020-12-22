var fs = require('fs');

const fileName = './Storage/contest_infos.json';
const contest_file = require(fileName);
const rankingFile = './Storage/ranking_infos.json'
const ranking_file = require(rankingFile)
const killsFile = './Storage/kills_ranking.json'
const kills_file = require(killsFile)

const {get_action_weighted, update_resume, update_resume2, is_death_action, update_players_list, update_played_players, update_death_reason, update_death_reason2} = require('./utils.js');
const {NMHE_PLAYERS} = require('./constants.js');

function create_hg(players_list, players, players_status) {
	console.log(players_list)
	if(players_list=="NMHE") {
		for(let player in NMHE_PLAYERS) {
			players.push(NMHE_PLAYERS[player])
			players_status[NMHE_PLAYERS[player]] = [NMHE_PLAYERS[player], "alive"]
		}
	}
	else {
		for(let player in players_list) {
			if(player != 0) {
				players.push(players_list[player])
				players_status[players_list[player]] = [players_list[player], "alive"]
			}
		}
	}
	return players, players_status
}

function get_ranking(ranking_type) {
	if(ranking_type=="global") {
		var rawdata = fs.readFileSync(rankingFile);
	}
	else {
		var rawdata = fs.readFileSync(killsFile);
	}
	var points = JSON.parse(rawdata);
	var sorted_ranking = []
	for (const key in points) {
		sorted_ranking.push([key, points[key]]);
	}
	sorted_ranking.sort(function(a, b) {
	    a = a[1];
	    b = b[1];

	    return b < a ? -1 : (a > b ? 1 : 0);
	});
	return sorted_ranking
}

function get_recap_death(selected_actions, player, target_player, recap_death) {
	selected_actions = update_death_reason(selected_actions, player, target_player)
	if(selected_actions.death=="TARGET_PLAYER") {
		recap_death.push([target_player, selected_actions.death_reason])

	}
	else if(selected_actions.death=="PLAYER"){
		recap_death.push([player, selected_actions.death_reason])
	}
	else{
		recap_death.push([player, selected_actions.death_reason])
		recap_death.push([target_player, selected_actions.death_reason])	
	}
	selected_actions = update_death_reason2(selected_actions, player, target_player)
	return recap_death
}

module.exports.create_hg = create_hg;
module.exports.get_ranking = get_ranking;
module.exports.get_recap_death = get_recap_death;