const FileManagerPlugin = require('filemanager-webpack-plugin');



export const plugins = [
    // new MiniCssExtractPlugin(),

    new FileManagerPlugin({
        events: {
            onStart: [{
                delete: ['./dist']
            }],
            onEnd: [{
                mkdir: ['./dist/public'],
            }, {
                copy: [
                    { source: './dist/*.png', destination: './dist/public' },
                    { source: './dist/*.svg', destination: './dist/public' },
                ],
            }, {
                delete: [
                    './dist/*.png',
                    './dist/*.svg',
                    './dist/webpack*',
                    './dist/config*',
                    './dist/index.js.LICENSE.txt'
                ],
                move: [
                    { source: './dist/src', destination: './dist/types' }
                ]
            }],
        },
    }),
]