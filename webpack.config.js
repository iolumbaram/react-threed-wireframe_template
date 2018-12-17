var path    = require('path');
const webpack = require('webpack');
var hwp     = require('html-webpack-plugin');
const pkg = require('./package.json');
const name = pkg.name;

module.exports = (env = {}) => {
    console.log("env production " + env.production);
    return {
        entry: path.join(__dirname, '/src/index.js'),
        output: {
            filename: 'build.js',
            path: path.join(__dirname, '/dist')
        },
    
        module:{
            rules:[{
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },{
                test: /\.css$/,
                use: [
                  'css-loader',
                ],
              }
            ]
        },
        plugins:[
            new hwp({template:path.join(__dirname, '/public/index.html')}),
            new webpack.ProvidePlugin({ grapesjs: "grapesjs" }),

        ]
    }
}