


const { translate } = require('bing-translate-api');


var json = require('./lang.json')
function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}



language = pickRandomProperty(json)
music = require('musicmatch')({ apikey: {API_KEY});
music.matcherLyrics({ q_track: "hey jude", q_artist: "beatles" })
    .then(function (data) {
        var lyrics = data.message.body.lyrics.lyrics_body
        translate(lyrics.slice(0, 1000), 'en', language, true).then(res => {
            const googleTTS = require('google-tts-api');
            const url = googleTTS.getAudioUrl(res.translation.slice(0, 200), {
                lang: 'en',
                slow: false,
                host: 'https://translate.google.com',
            });
            console.log(url);
        }).catch(err => {
            console.error(err);
        });
    }).catch(function (err) {
        console.log(err);
    })
// translate(lyrics, 'en', 'ru', true).then(res => {
//     console.log(res.translation);
// }).catch(err => {
//     console.error(err);
// });
