//入口页面
let Pages = require("./pages.js");

let Path = require("path");

let projectPath = Path.join(__dirname, "../");

let projectName = projectPath.split("\\").filter(item => item).pop()

module.exports = {
	pageConfig: Pages,
	preloadComponents: [],
	outputPath: Path.join(__dirname, `../../${projectName}-dist/`),
	projectPath,
	cleanDist: true,
	projectVersion: "1.0.0.0",
	projectAuthor: "测试人员",
	projectName
}