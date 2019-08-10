const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
let config = {
    entry: ["@babel/polyfill","./src/main.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./app/public/dist"),
        publicPath: "/public/dist/"
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options:{
                        "presets":["@babel/preset-env"],
                        // "plugins":["@babel/plugin-transform-runtime"]
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/public/index.html",
            filename: "index.html"
        }),
        new VueLoaderPlugin(),

    ]
}

module.exports = config