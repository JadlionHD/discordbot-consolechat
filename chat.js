// module
const request = require("request");
// config
const config = require("./config.json");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var loopingreadline = function () {
	rl.question("Message: ", function (msgdiscord) {
		
		request({ // typing function
			url: config.typetrigger, // typing api
			method: "POST",
			headers: {
				Authorization: config.token
			}
		}, function(err, res, body) {
			console.log(body)
		})
		
		request({ // sending message
			url: config.channellink, // channel id that using api
			method: "POST",
			json: {
				content: msgdiscord,
				tts: config.tts
			},
			headers: {
				Authorization: config.token
			}
		}, function(err, res, body) {
			// ok u can do anything here
			// bot <token> at config
		})
		loopingreadline();
	}) 
}
loopingreadline();