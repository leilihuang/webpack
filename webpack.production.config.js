/**
 * Created by lei on 2015/10/10.
 */
var path=require('path'),
    node_modules=path.resolve(__dirname,'node_modules');

module.exports={
    entry:path.resolve(__dirname,'app/main.jsx'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    },
    module:{
        loaders:[{
            test:/\.jsx?$/,
            exclude:[node_modules],
            loader:'babel'
        },{
            test:/\.less$/,
            loader:'style!css!less'
        },{
            test:/\.(png|jpg)$/,
            loader:'url?limit=8000'
        }]
    }
}