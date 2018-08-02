let Entry = require("../../dk_front_end_sdk/build/webpack/entry.js");
let ProjectConfig = require("./project.config.js");
let WebpackConfig = require("./webpack.config.js");

module.exports = Entry({
	projectConfig: Object.assign({
		NODE_ENV: "production",
		useUglifyJs: true,
		cssSourceMap: false,
		cssMinimize: true,
		htmlRemoveComments: true,
		htmlCollapseWhitespace: true,
		htmlMinifyJS: true,
		htmlKeepClosingSlash: true,
		webpackDevtool: null
	}, ProjectConfig),
	wbpackConfig: Object.assign({

	}, WebpackConfig)
})