const express = require('express');
const favicon = require('serve-favicon');
const ejs = require('ejs');
const path = require('path');

const { eggList, generateData, addFirstFinder, checkIfAlreadyFound, checkResponse, checkIfEggExists, getNextEggUrl, getNextQuestion, checkIfAlreadyFoundBySameUser } = require('./egg');
const { players, addPlayer, addPointToPlayer, checkIfPlayerExists, saveToFile, readScoreFromFile } = require('./scoring');


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
                    saveToFile(players);
                    let nextUrl = getNextEggUrl(qlikAppId);
                    let nextQuestion = getNextQuestion(qlikAppId);
                    const data = {
                        nextUrl: nextUrl,
                        nextQuestion: nextQuestion
                    }
                    res.render('goodAnswerNotFirst', data);
                } else {
                    res.render('alreadyFoundByYou');
                }
            } else {
                addPointToPlayer(name, 2);
                saveToFile(players);
                addFirstFinder(qlikAppId, name);
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

    readScoreFromFile()
        .then(promiseData => {
            const data = {
                players: players
            };
            console.log('Score data: ', promiseData);
            res.render('leaderboard', data);
        })
        .catch(err => console.error(err));


})


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});