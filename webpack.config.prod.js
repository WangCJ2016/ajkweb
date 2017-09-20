var path = require('path')
var fs = require('fs');
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnano = require('cssnano');

module.exports = {
  devtool:'source-map',
  entry: ["babel-polyfill", "./src/app.js"],
  output: {
      path: __dirname,
      filename: "./build/app.bundle.js"
  },
  module:{
    loaders:[{
      test:/\.jsx?$/,
      include:[
        path.resolve(__dirname,'src')
      ],
      loaders:['babel-loader']
    },
    {
        test: /\.css$/,
        include:[
          path.resolve(__dirname,'src')
        ],
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
    },
    {
        test: /\.scss$/,
        include:[
          path.resolve(__dirname,'src')
        ],
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
    },
    {
        test: /\.less$/,

        loader: 'style-loader!css-loader!postcss-loader!less-loader'
    },
   {
      test: /\.(png|jpg|gif)$/i,
      loader: 'url-loader',
      query: {
          limit: 2000,
          name: 'assets/[name]-[hash:5].[ext]'
      }
  }
  ]
},
postcss:[
  cssnano({
    sourcemap:true,
    autoprefixer:{
      add:true,
      remove:true,
      browsers:['last 5 version'],
      discardComments:{
        removeAll:true
      }
    }
  })
],
resolve:{
  extensions:['','.js','.jsx','.scss','.css']
},
plugins:[
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
    _DEV_:false
  }),
  new ExtractTextPlugin("styles.css"),
  new webpack.optimize.UglifyJsPlugin({
    compress:{
      unused:true,
      dead_code:true
    }
  })
]
}
