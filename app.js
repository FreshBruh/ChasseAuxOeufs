const express = require('express');
const favicon = require('serve-favicon');
const ejs = require('ejs');
const path = require('path');

let { eggList, generateData, addFirstFinder, checkIfAlreadyFound, checkResponse, checkIfEggExists, getNextEggUrl, getNextQuestion, checkIfAlreadyFoundBySameUser, addFinder, readEggsFromFile } = require('./egg');
let { players, addPlayer, addPointToPlayer, checkIfPlayerExists, saveToFile, readScoreFromFile } = require('./scoring');


const app = express();
app.use('/assets', express.static('views/assets'));
app.set('view engine', 'ejs');

generateData();
console.log(eggList);

app.get('/', function (req, res) {
    res.status(200).send("Hello world !")
});

app.get('/jeu/:qlikApp/:qlikUser/:getCurrentSelection', function (req, res) {
    const qlikAppId = req.params.qlikApp;
    const name = req.params.qlikUser;
    const getCurrentSelection = req.params.getCurrentSelection;

    if (checkIfEggExists(qlikAppId)) {
        if (checkResponse(qlikAppId, getCurrentSelection)) {
            if (!checkIfPlayerExists(name)) { addPlayer(name); saveToFile(players); }
            if (checkIfAlreadyFound(qlikAppId)) {
                if (!checkIfAlreadyFoundBySameUser(qlikAppId, name)) {
                    addPointToPlayer(name, 1);
                    addFinder(qlikAppId, name);
                    saveToFile(players);
                    let nextUrl = getNextEggUrl(qlikAppId);
                    let nextQuestion = getNextQuestion(qlikAppId);
                    const data = {
                        nextUrl: nextUrl,
                        nextQuestion: nextQuestion
                    }
                    res.render('goodAnswerNotFirst', data);
                } else {
                    let nextUrl = getNextEggUrl(qlikAppId);
                    let nextQuestion = getNextQuestion(qlikAppId);
                    const data = {
                        nextUrl: nextUrl,
                        nextQuestion: nextQuestion
                    }
                    res.render('alreadyFoundByYou', data);
                }
            } else {
                addPointToPlayer(name, 2);
                addFinder(qlikAppId, name);
                addFirstFinder(qlikAppId, name);
                saveToFile(players);
                let nextUrl = getNextEggUrl(qlikAppId);
                let nextQuestion = getNextQuestion(qlikAppId);
                const data = {
                    nextUrl: nextUrl,
                    nextQuestion: nextQuestion
                }
                res.render('goodAnswerFirst', data);
            }
        } else {

            res.render('wrongAnswer');
        }
    } else {
        res.render('wrongApp');
    }
});

app.get('/jeu/leaderboard', function (req, res) {
    console.log(eggList);
    console.log(typeof eggList);
    readScoreFromFile()
        .then(promiseData => {
            const dataFromJson = JSON.parse(promiseData);
            console.log(dataFromJson);
            const data = {
                players: dataFromJson
            };
            res.render('leaderboard', data);
        })
        .catch(err => console.error(err));


})

app.get('/jeu/loadFromFile', function (req, res) {
    readScoreFromFile()
        .then(promiseScore => {
            const scoreFromJson = JSON.parse(promiseScore);
            players = scoreFromJson;
        })
        .catch(err => console.error(err));

    readEggsFromFile()
        .then(promiseEggList => {
            const eggListFromJson = JSON.parse(promiseEggList);
            eggList = eggListFromJson;
        })
        .catch(err => console.error(err))

})


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});