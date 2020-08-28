const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool:'source-map',
    entry:"./src/index.js",
    output: {
        path:path.join(__dirname,"dist"),
        filename:"index_bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-react"]
                    }
                }
            },{
                test : /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader']
                })
            },{
                test: /\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
                hash:true,
                filename:"index.html",
                template:"./src/index.html"
        }),
        new ExtractTextWebpackPlugin({
            filename:'css/style.css'
        })
    ]
}