var Path = require("path");
//当前项目的根目录
function root(filename) {
	return Path.join(__dirname, `../${filename}`)
}

module.exports = {
	resolve: {
		alias: {
			"bootstrap@4": root("node_modules/bootstrap/scss/bootstrap.scss")
		}
	}
}