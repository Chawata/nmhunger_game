var fs = require('fs');

const {day1_actions, otherDay_actions, night_actions, aloneActions} = require('./constants.js');

const actionsArray = {
	DAY1: day1_actions,
	DAY: otherDay_actions,
	NIGHT: night_actions,
	ALONE: aloneActions
}

const killsFile = './Storage/kills_ranking.json'
const kills_file = require(killsFile)

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function get_action_weighted(cycle) {
	var cycle_actions = actionsArray[cycle]
	var action_weighted = [];

	for (let i = 0; i < cycle_actions.length; ++i) {
	    for (let j = 0; j < cycle_actions[i].luck; ++j) {
	        action_weighted.push(cycle_actions[i]);
	    }
	}
	action_weighted = shuffle(action_weighted)

	return action_weighted
}

function update_resume(selected_action, player, target_player) {
	var resume = selected_action.resume
	var selected_action_copy = selected_action
	if(resume.includes("TARGET_PLAYER")) {
		var resume3 = selected_action_copy.resume.split('TARGET_PLAYER').join(target_player)
		selected_action_copy.resume = resume3	
	}
	return selected_action_copy
}

function update_resume2(selected_action, player, target_player) {
	var resume = selected_action.resume
	var selected_action_copy = selected_action
	if(resume.includes(target_player)) {
		var resume3 = selected_action_copy.resume.split(target_player).join("TARGET_PLAYER")
		selected_action_copy.resume = resume3	
	}
	return selected_action_copy
}

function update_death_reason(selected_action, player, target_player) {
	var death_reason = selected_action.death_reason
	var selected_action_copy = selected_action
	if(death_reason.includes("PLAYER")) {
		var death_reason2 = selected_action_copy.death_reason.split('PLAYER').join(player)
		selected_action_copy.death_reason = death_reason2	
	}
	return selected_action_copy
}

function update_death_reason2(selected_action, player, target_player) {
	var death_reason = selected_action.death_reason
	var selected_action_copy = selected_action
	if(death_reason.includes(player)) {
		var death_reason2 = selected_action_copy.death_reason.split(player).join("PLAYER")
		selected_action_copy.death_reason = death_reason2	
	}
	return selected_action_copy
}


function is_death_action(selected_action) {
	if(selected_action.death=="NO") {
		return false
	}
	return true
}

function add_kill_to_global_ranking(player) {
	kills_file[player] = parseInt(kills_file[player]) + 1;
	fs.writeFile(killsFile, JSON.stringify(kills_file), function writeJSON(err) {
		  if (err) return console.log(err);
		  console.log(JSON.stringify(kills_file));
		  console.log('writing to ' + killsFile);
	});
}

function update_players_list(selected_action, player, target_player, players_list, players_status) {
	if(selected_action.death=="TARGET_PLAYER") {
		var playersIndex = players_list.indexOf(target_player)
		players_list.splice(playersIndex, 1)
		players_status[target_player][1] = "dead"
		add_kill_to_global_ranking(player)
	}
	else if(selected_action.death=="PLAYER") {
		var playersIndex = players_list.indexOf(player)
		players_list.splice(playersIndex, 1)
		players_status[player][1] = "dead"
	}
	else {
		var playersIndex = players_list.indexOf(target_player)
		players_list.splice(playersIndex, 1)
		var playersIndex2 = players_list.indexOf(player)
		players_list.splice(playersIndex2, 1)
		players_status[target_player][1] = "dead"
		players_status[player][1] = "dead"
		add_kill_to_global_ranking(player)
	}
	return players_list, players_status
}

function update_played_players(selected_action, played_players, player, target_player) {
	if(selected_action.multiple_player=="NO") {
		played_players.push(player)
	}
	else {
		played_players.push(player, target_player)
	}
	return played_players
}

module.exports.get_action_weighted = get_action_weighted;
module.exports.update_resume = update_resume;
module.exports.update_resume2 = update_resume2;
module.exports.update_death_reason = update_death_reason;
module.exports.update_death_reason2 = update_death_reason2;
module.exports.is_death_action = is_death_action;
module.exports.update_players_list= update_players_list;
module.exports.update_played_players = update_played_players;