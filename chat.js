// module
const request = require("request");
// config
const config = require("./config.json");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// to make it easier to read
function HTTPreq(urls, methods, jsons) {
	request({
		url: urls,
		method: methods,
		headers: {
			Authorization: `Bot ${config.token}`
		},
		json: jsons
	}, function(err, res, body) {
		// idk u can do something here
	})
}

var loopingreadline = function () {
	rl.question("Message: ", function (msgdiscord) {
		
		let messageOption = {
			content: msgdiscord,
			tts: false
		}
		
		HTTPreq(config.typetrigger, "POST", false);
		HTTPreq(config.channellink, "POST", messageOption);
		
		loopingreadline();
	}) 
}
loopingreadline();
