const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	mode: 'production',

	module: {
		rules: [
			{
				// CSS loaders
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'sass-loader'
				]
			}
		]
	},

	plugins: [
		// CSS
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css'
		}),
		// HTML
		new HtmlWebpackPlugin({
			title: 'App',
			filename: 'index.html',
			chunks: ['app', 'vendor'],
			inject: true,
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			}
		}),
		new HtmlWebpackPlugin({
			title: 'Admin',
			filename: 'admin.html',
			chunks: ['admin', 'vendor'],
			inject: true,
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			}
		})
	]
});
