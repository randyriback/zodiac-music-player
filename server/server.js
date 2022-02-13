require('dotenv').config()
const port = process.env.PORT || 3001
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())


app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refresh_token;
    const spotifyApi = new spotifyWebApi({
       redirectUri: process.env.REDIRECT_URI || "http://localhost:3000",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    })

spotifyApi
    .refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn
        })
    })
    .catch(()=>(
        res.sendStatus(400) 
    ))    
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new spotifyWebApi({
        redirectUri: process.env.REDIRECT_URI || "http://localhost:3000",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,

    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch(()=>{
        res.sendStatus(400)

    })
})

app.listen(port)