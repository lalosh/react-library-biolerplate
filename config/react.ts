import { Configuration } from "webpack";
import * as path from 'path';
import { loadersRules } from "./loaders";
import { plugins } from "./plugins";
import { externalLibraries } from "./externals";


export const ReactConfiguration: Configuration = {
    mode: process.env.MODE == 'development' ? 'development' : 'production',
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '../dist'),
        libraryTarget: 'umd',
        library: 'ReactLibrary',
        publicPath: path.join(__dirname, '../dist/public/'),
        umdNamedDefine: true,
        globalObject: 'this',
    },
    plugins: plugins,
    devtool: process.env.MODE == 'development' ? 'source-map' : undefined,
    ...loadersRules,
    resolve: {
        extensions: ['.ts', '.tsx', '.module.css', '.js', '.css'],
        alias: {
            'react': path.resolve(__dirname, '../node_modules/react'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
        },
    },
    externals: externalLibraries,
}