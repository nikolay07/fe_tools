const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === "Production";
    const config = {
        entry: "./src/index.js",
        output: {
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    use: ['babel-loader']
                },
                {
                    test: /.s?css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: '[name].[ext]',
                                outputPath: 'images',
                            },
                        },
                    ],
                }
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new htmlWebpackPlugin({
                template: './src/index.html'
            }),
        ],
        devServer: {
            port: 9000,
            hot: true,
        }
    }
    if (isProduction) {
        config.plugins.push(new MiniCssExtractPlugin({
            filename: '[name].css',
        }))
    }
    return config;
}