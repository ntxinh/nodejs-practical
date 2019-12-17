const fs = require("fs");
const login = require("facebook-chat-api");

require('dotenv').config();

// Run it for first time to get appstate.json
login({email: process.env.FB_EMAIL, password: process.env.FB_PASS}, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});

// After have appstate.json, use this
// login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
//     if(err) return console.error(err);

//     // Here you can use the api
//     api.listen((err, message) => {
//         api.sendMessage(message.body, message.threadID);
//     });
// });