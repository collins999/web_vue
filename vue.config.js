module.exports = {
    lintOnSave: true,
    devServer: {
        open: true,
        host: "127.0.0.1",
        port: 8080,
        https: false,
        hotOnly: true,
        disableHostCheck: true,
        proxy: null,
        inline: true,
        before: app => {}
    }
};