let players = Array();

const addPlayer = function(playerName) {
    if(!checkIfPlayerExists(playerName))
    players.push({
        name: playerName,
        score: 0
    })
}

const addPointToPlayer = function(playerName, amount) {
    const indexPlayer = players.findIndex(el => el.name === playerName);
    let  player = players.find(el => el.name === playerName);
    player.score += amount;
    players[indexPlayer] = player;
}

const checkIfPlayerExists = function(playerName) {
    if(players.find(element => element.name === playerName) != undefined) return true;
    else return false;
}

module.exports = {
    players,
    addPlayer,
    addPointToPlayer,
    checkIfPlayerExists
}