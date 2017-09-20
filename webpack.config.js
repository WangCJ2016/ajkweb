var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    context: path.join(__dirname),
    devtool: "inline-sourcemap" ,
    entry: ["babel-polyfill", "./src/app.js"],
    module: {
        loaders: [{
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            //下面是使用 ant-design 的配置文件
            {
                test: /\.css$/,
                include:[
                  path.resolve(__dirname,'src')
                ],
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.scss$/,
                include:[
                  path.resolve(__dirname,'src')
                ],
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test: /\.less$/,
                include:[
                  path.resolve(__dirname,'src')
                ],
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
             {
                test: /\.(png|jpg|gif)$/i,
                loader: 'url-loader',
                include:[
                  path.resolve(__dirname,'src')
                ],
                query: {
                    limit: 2000,
                    name: 'assets/[name]-[hash:5].[ext]'
                }
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 5 versions'] }) ],
    output: {
        path: __dirname,
        filename: "./build/app.bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};
