var path=require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pathModule=path.resolve(__dirname,'node_modules');
var pathRe=path.resolve(pathModule,'react/dist/react.min.js');
module.exports={
    entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/main.jsx')],
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
          test:/\.jsx?$/,
          loader:'babel'
      },{
          test:/\.css$/,
          loader:'style!css'
      },{
          test:/\.less$/,
          loader:'style!css!less'
      },{
          test:/\.(png|jpg|svg|woff)$/,
          loader:'url?limit=50000'
      }],
      noParse:[pathRe]
    }
}