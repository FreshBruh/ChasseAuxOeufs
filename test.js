const { eggList, generateData, addFirstFinder, checkIfAlreadyFound, checkResponse, checkIfEggExists, addFinder, checkIfAlreadyFoundBySameUser } = require('./egg');
const { players, addPlayer, addPointToPlayer, checkIfPlayerExists, saveToFile, readScoreFromFile } = require('./scoring');

generateData();

addPlayer('Fresh')
addPointToPlayer('Fresh', 1);
addFinder('43ef811b-9fc6-45af-b00b-3e2a99f5f0fc', 'Fresh');
console.log(checkIfAlreadyFoundBySameUser('43ef811b-9fc6-45af-b00b-3e2a99f5f0fc', 'Freszh'));