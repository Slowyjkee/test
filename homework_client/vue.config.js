module.exports = {
    indexPath: "index.html",
    outputDir: "www",
    devServer: {
        https:false,
        proxy: {
            '/api': {
                target: "http://localhost:3000/",
                pathRewrite: {'^/api': ''},
                changeOrigin: true,
                secure: false
            },

        }
    },
};
