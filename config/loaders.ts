import * as path from 'path';
import { Configuration } from 'webpack';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const loadersRules: Pick<Configuration, "module"> = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                include: path.join(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                include: path.join(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                oneOf: [
                    {
                        include: path.resolve(__dirname, "src"),
                        exclude: /node_modules/,
                        use: [
                            'style-loader',
                            // extract css into separate files
                            // {
                            //     loader: MiniCssExtractPlugin.loader,
                            //     options: {
                            //         esModule: false,
                            //     }
                            // },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    esModule: true,
                                }
                            },
                        ]
                    },
                    {
                        use: [
                            "style-loader",
                            "css-loader"
                        ]
                    }

                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                // type: process.env.MODE == 'development' ? 'asset/inline' : 'asset/resource',
                type: process.env.MODE == 'development' ? 'asset/inline' : 'asset/inline',
            },
        ]
    }
}