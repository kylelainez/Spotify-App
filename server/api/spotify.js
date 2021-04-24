const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/login', (req, res) => {
    const code = req.body.code;
    const URL = 'https://accounts.spotify.com/api/token';

    axios.post(url, {
        params: {
            grant_type = 'authorization_code',
            code,
            redirect_uri = 'http://localhost:3000',
            client_id: 'fb453ef5b2ef4b788dfcb3a4839673b4',
            client_secret: '954cc62f7bf84e20a8e5df0d7149b590'
        }
    }).then(data => {
        console.log(data);
    })
});

module.exports = router;