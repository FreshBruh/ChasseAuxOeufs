const { eggList, generateData, addFirstFinder, checkIfAlreadyFound, checkResponse, checkIfEggExists } = require('./egg');
const { players, addPlayer, addPointToPlayer, checkIfPlayerExists } = require('./scoring');

generateData();

// console.log(eggList);
// console.log(checkIfAlreadyFound("azerty"));
// addFirstFinder("azerty","bruh");
// console.log(eggList);
// console.log(checkIfAlreadyFound("azerty"));


console.log("1: ");
console.log(players);
console.log("---------------------");


console.log("2: ");
addPlayer("test");
console.log(players);
console.log("---------------------");


console.log("3: ");
addPointToPlayer("test",2);
console.log(players);
console.log("---------------------");

console.log("4: ");
addPlayer("test");
console.log(players);
console.log("---------------------");

console.log("5: ");
addPointToPlayer("test",2);
console.log(players);
console.log("---------------------");