let BuildCmd = require('../../dk_front_end_sdk/build/webpack/build-cmd.js')
let Path = require("path");
let projectPath = Path.join(__dirname, '../');

BuildCmd({
	projectPath,
	filter: ["watch-in-develop", "progress-in-develop", "progress-in-production"]
})