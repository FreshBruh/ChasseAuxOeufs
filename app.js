const express = require('express');
const favicon = require('serve-favicon');
const ejs = require('ejs');
const path = require('path');

const { eggList, generateData, addFirstFinder, checkIfAlreadyFound, checkResponse,checkIfEggExists, getNextEggUrl } = require('./egg');
const { players, addPlayer, addPointToPlayer, checkIfPlayerExists } = require('./scoring');


const app = express();
app.use('/assets',express.static('views/assets'));
app.set('view engine', 'ejs');

generateData();
console.log(eggList);

app.get('/', function(req,res) {
    res.status(200).send("Hello world !")
});

app.get('/jeu/:qlikApp/:qlikUser/:getCurrentSelection', function(req, res) {
    const qlikAppId = req.params.qlikApp;
    const name = req.params.qlikUser;
    const getCurrentSelection = req.params.getCurrentSelection;

    if(checkIfEggExists(qlikAppId))
    {
            if(checkResponse(qlikAppId, getCurrentSelection)){
                if(!checkIfPlayerExists(name)) addPlayer(name);
                if(checkIfAlreadyFound(qlikAppId)) {
                    addPointToPlayer(name, 1);
                    let nextUrl = getNextEggUrl(qlikAppId);
                    const data = {
                        nextUrl : nextUrl
                    }
                    res.render('goodAnswerNotFirst',data);

                }else{
                    addPointToPlayer(name, 2)
                    addFirstFinder(qlikAppId, name)
                    let nextUrl = getNextEggUrl(qlikAppId);
                    const data = {
                        nextUrl : nextUrl
                    }
                    res.render('goodAnswerFirst',data);
                }
        } else {

            res.render('wrongAnswer');
        }
    }else {
        res.render('wrongApp');
    }
});

app.get('/jeu/leaderboard', function(req,res){
    const data = {
        players: players
    };
    res.render('leaderboard',data);
})


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});