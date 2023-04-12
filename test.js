const { eggList, generateData, addFirstFinder, checkIfAlreadyFound, checkResponse, checkIfEggExists } = require('./egg');
const { players, addPlayer, addPointToPlayer, checkIfPlayerExists, saveToFile, readScoreFromFile } = require('./scoring');

generateData();

addPlayer('Fresh')
addPointToPlayer('Fresh', 1);

addPlayer('Bruh')
addPointToPlayer('Bruh', 2);

addPlayer('Raff')
addPointToPlayer('Raff', 3);

saveToFile(players);

let scoreData;

readScoreFromFile()
    .then(data => {
        scoreData = data;
        console.log('Score data: ', scoreData);
    })
    .catch(err => console.error(err));


