const pathlib = require("path");

module.exports = {
    entry: pathlib.resolve(__dirname, "src/index.js"),
    output: {
        path: pathlib.resolve(__dirname, "/dist"),
        filename: "build.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
                
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    devtool: "source-map",
    stats: "errors-only",
    devServer: {
        host: "localhost",
        contentBase: pathlib.resolve(__dirname, "src/static/"),
        historyApiFallback: true, 
        hot: true,
        port: 8088,
    }
}