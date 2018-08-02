let Entry = require("../../dk_front_end_sdk/build/webpack/entry.js");
let ProjectConfig = require("./project.config.js");
let WebpackConfig = require("./webpack.config.js");

module.exports = Entry({
	projectConfig: Object.assign({
		NODE_ENV: "develop",
		useUglifyJs: false,
		cssSourceMap: true,
		cssMinimize: false,
		htmlRemoveComments: false,
		htmlCollapseWhitespace: false,
		htmlMinifyJS: false,
		htmlKeepClosingSlash: false,
	}, ProjectConfig),
	wbpackConfig: Object.assign({

	}, WebpackConfig)
})