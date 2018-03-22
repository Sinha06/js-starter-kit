import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // Genarate an external CSS file with a hash in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),


        // Hash the files using MD% so othat their name changes when the content changes.
        new WebpackMd5Hash(),
        // Use CommonsChunkPlugin to create a separate bundle of
        // vendor libraries so that they are catched separately.


        // note that name corresponds to the key in entry point
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: 'vendor'
            }
        ),

        //Create HTML file that includes reference to bundled JS
        new HtmlWebpackPlugin({
           template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
           inject: true,
            // Properties you define here are available in index.html
            // using htmlWebpackPlugin.options.varName
            trackJSToken: '0e7f3f9742624a43be4f32b0b14cd3de'
        }),
        //Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),
        //Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /(\.css)$/, loaders: ExtractTextPlugin.extract('css?sourcemap')}
        ]
    }
}
