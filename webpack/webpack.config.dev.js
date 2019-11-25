// Webpack modules
const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	mode: 'development',

	// Dev server configuration for development
	devServer: {
		port: 3000,
		publicPath: '/dist/',
		// hot: true,
		liveReload: true,
		open: true,
		contentBase: './public'
	}

	// plugins: [new HtmlWebpackPlugin()]
});
