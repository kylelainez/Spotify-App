const express = require('express');
const router = express.Router();
const axios = require('axios');
const SpotifyWebApi = require('spotify-web-api-node');

router.post('/login', (req, res) => {
    const code = req.body.code;
    
    const spotifyWebApi = new SpotifyWebApi({
        redirectUri : process.env.redirectUri,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret
    });

    spotifyWebApi
        .authorizationCodeGrant(code)
        .then( data => {
            res.json(data.body);
        })
        .catch(err => {
            res.sendStatus(400);
        });
});

router.post('refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;

    const spotifyWebApi = new SpotifyWebApi({
        redirectUri : process.env.redirectUri,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        refreshToken
    });

    spotifyWebApi
        .refreshAccessToken()
        .then(data => {
            res.json(data.body);
        })
        .catch(() => res.sendStatus(400));
})

module.exports = router;