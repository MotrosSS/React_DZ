module.exports = {
    entry:  "./src/index.js",
    output: {
        path:  "/dist/"
    },
    module: {
        loaders:[
            {
                test: /\.css$/,
                loader : 'style!css'
            }
        ]
    }
}