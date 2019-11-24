const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path    = require("path");
const webpack = require("webpack");
const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "/src/index.jsx"),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  },
  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};