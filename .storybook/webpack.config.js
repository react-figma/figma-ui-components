module.exports = {
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|otf|ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    }
};
