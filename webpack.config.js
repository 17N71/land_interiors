const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
	mode: "development",
	entry: "./src/scripts/index.ts",
	output: {
		filename: "[contenthash].bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	performance: {
		maxAssetSize: 100000,
		hints: false,
	},
	cache: {
		type: "filesystem",
		compression: "gzip",
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {},
			}),
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@public": path.resolve(__dirname, "src/public"),
		},
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: ["babel-loader", "ts-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.(c|sc)ss$/,
				use: [
					process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								config: path.resolve(__dirname, "postcss.config.js"),
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
						},
					},
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
			{
				test: /\.svg$/,
				loader: "svgo-loader",
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "src/assets", to: "assets" },
				{ from: "src/public", to: "public" },
			],
		}),
		new MiniCssExtractPlugin({
			filename: "[contenthash].css",
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "src"),
		},
		compress: true,
		open: true,
	},
}
