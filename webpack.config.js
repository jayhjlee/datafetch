const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const inProduction = process.env.NODE_ENV === "production";

module.exports = {
	mode: "development",
	context: path.join(__dirname, "./src"),
	entry: ["@babel/polyfill", "./index.js"],
	output: {
		path: path.join(__dirname, "./build/static/js"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, "./src")],
				exclude: [path.resolve(__dirname, "/node_modules/")],
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js"],
	},
	plugins: [new CleanWebpackPlugin()],
	watch: true,
	optimization: {
		minimize: inProduction,
	},
};

if (inProduction) {
	module.exports.mode = "production";
	module.exports.watch = false;
	module.exports.optimization.minimize = true;
}
