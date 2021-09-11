const path = require('path')

module.exports = {
	publicPath: '/',
	filenameHashing: false,
	outputDir: path.resolve(__dirname, '../server/public'),
	devServer: {
		proxy: 'http://localhost:3003'
	},
	pluginOptions: {
		layouts: {
			preloader: false
		},
    }
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devServer.proxy = 'https://al-xorazmiy.uz';
	module.exports.pluginOptions.layouts.preloader = true;
}
