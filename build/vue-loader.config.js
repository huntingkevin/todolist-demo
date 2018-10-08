// const docsLoader = require.resolve('./doc-loader');

module.exports = (isDev) => {
    return {
        // 保留空格，空格有可能会影响html或者css的渲染
        preserveWhiteSpace: true,
        // vue里的css单独打包
        extractCSS: !isDev,
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        },
        // 热重载
        // hotReload
        // loaders: {
        //     'docs': docsLoader
        // },
        // preLoader: {},
        // postLoader: {}
    }
}