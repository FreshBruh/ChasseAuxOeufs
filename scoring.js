const fs = require('fs');

let players = Array();

const addPlayer = function (playerName) {
    if (!checkIfPlayerExists(playerName))
        players.push({
            name: playerName,
            score: 0
        })
}

const addPointToPlayer = function (playerName, amount) {
    const indexPlayer = players.findIndex(el => el.name === playerName);
    let player = players.find(el => el.name === playerName);
    player.score += amount;
    players[indexPlayer] = player;
}

const checkIfPlayerExists = function (playerName) {
    if (players.find(element => element.name === playerName) != undefined) return true;
    else return false;
}

const saveToFile = function (players) {
    fs.writeFile('score.json', JSON.stringify(players), (err) => {
        if (err) console.log('Error writing score into file : ' + err);
    });
}

const readScoreFromFile = function () {
    return new Promise((resolve, reject) => {
        fs.readFile('score.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = {
    players,
    addPlayer,
    addPointToPlayer,
    checkIfPlayerExists,
    saveToFile,
    readScoreFromFile
}