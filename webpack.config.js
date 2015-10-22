var webpack=require('webpack');
var path=require('path');
var glob=require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pathModule=path.resolve(__dirname,'node_modules');
var pathRe=path.resolve(pathModule,'react/dist/react.min.js');

function entries(){
    var entry={
        vendor:['react','./lib/jquery']
    };
    glob.sync('./app/entries/*.*').forEach(function(file){
        var files=file.split('/');
        var k=files[files.length-1].split('.')[0];
        entry[k]=file;
    });
    return entry;
}
module.exports={
    entry: entries(),
    resolve:{
      alias:{
          'react':pathRe
      }
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    },
    module:{
      loaders:[{
          test:/\.js[x]?$/,
          loaders: [ 'babel'],
          exclude: /node_modules/,
          include: __dirname
      },{
          test:/\.css$/,
          loader:'style!css'
      },{
          test:/\.less$/,
          loader:'style!css!less'
      },{
          test:/\.(png|jpg|svg|woff)$/,
          loader:'url?limit=8000'
      }],
      noParse:[pathRe]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin(),
        new HtmlWebpackPlugin()
    ]
}