//网站入口配置
let Path = require("path");

function root(name) {
	return Path.join(__dirname, `../${name}`)
}

module.exports = [{
	//生成的html页面名称
	name: "index",
	//tab标题名称
	title: "react bootstrap demo",
	//meta关键词
	keywords: "关键词",
	//meta 网站描述
	description: "网站描述",
	//入口的文件
	entry: {
		"ejs": root("demo/entry.ejs"),
		"js": root("demo/entry.jsx"),
	},
	//是否需要编译
	release: true
}]