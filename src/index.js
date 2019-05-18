const express = require('express');
const fetch = require('node-fetch');
const FormData = require('form-data');
const app = express();

const access_token = 'BQB4UEwzWRsqY9he5ji6k0IgS1X1TElqjSGiIO2-a8EXM2ngVxg5AN2LFw-MPD0HEqpx7i5uu4QcsnCGDQNgB43nq4hVCxVyZLKWBYQnTE5j-y32yHXU8GuEJuaM40Jv5LQ_xSzs68HQHJ7Bo8qIILcG-KBosxoorD2gYg5ckgf_5QP5iTnqGaqaLuwultkjp25cTuK2PpUctfPzVbJxgzP4mGI-2OIVRg7_LQEFJBkQCE8';
const token_type = 'Bearer';
const expires_in = 3600;

app.get('/test', (req, res) => {
    fetch('https://accounts.spotify.com/api/token?client_id=' + '328ddabad7494067934a0439939e127c', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer BQB4UEwzWRsqY9he5ji6k0IgS1X1TElqjSGiIO2-a8EXM2ngVxg5AN2LFw-MPD0HEqpx7i5uu4QcsnCGDQNgB43nq4hVCxVyZLKWBYQnTE5j-y32yHXU8GuEJuaM40Jv5LQ_xSzs68HQHJ7Bo8qIILcG-KBosxoorD2gYg5ckgf_5QP5iTnqGaqaLuwultkjp25cTuK2PpUctfPzVbJxgzP4mGI-2OIVRg7_LQEFJBkQCE8',
        },
        body: new FormData({
            client_id: '328ddabad7494067934a0439939e127c',
            grant_type: 'authorization_code',
            code: 'BQB4UEwzWRsqY9he5ji6k0IgS1X1TElqjSGiIO2-a8EXM2ngVxg5AN2LFw-MPD0HEqpx7i5uu4QcsnCGDQNgB43nq4hVCxVyZLKWBYQnTE5j-y32yHXU8GuEJuaM40Jv5LQ_xSzs68HQHJ7Bo8qIILcG-KBosxoorD2gYg5ckgf_5QP5iTnqGaqaLuwultkjp25cTuK2PpUctfPzVbJxgzP4mGI-2OIVRg7_LQEFJBkQCE8',
            redirect: 'http://localhost:8000/finish'
        }),
    }).then(res => res.json()).then(data => console.log(data));
});

app.get('/login', (req, res) => {
    const scopes = [
        'user-read-private',
        'user-read-recently-played',
        'user-library-modify',
        'playlist-read-private',
        'user-read-email',
        'playlist-modify-public',
        'user-library-read',
        'playlist-read-collaborative',
        'user-read-birthdate',
        'user-read-playback-state',
        'app-remote-control',
        'user-modify-playback-state',
        'user-top-read',
        'user-read-currently-playing',
        'streaming',
    ].join(' ');
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + '328ddabad7494067934a0439939e127c' +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent('http://localhost:8000/finish'));
});

app.get('/', (req, res) => {
    res.send('Works');
});

//app.use((req, res) => console.log(req) && res.send('up and running'));

app.listen(8000, () => { console.log('Server runnin on port 8000') });