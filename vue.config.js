// const path = require('path')
module.exports = {
        // proxy:{
        //     '/api':{
        //         target:'http://music.cpengx.cn',
        //         changeOrigin : true,
        //         // rewrite:path =>path.replace(/^\/api/,'')
        //         pathRewrite:{
        //             '/api':'/api'
        //         }
        //     }
        // }
        publicPath: './',
        devServer: {
            open: true,
            proxy: {
            '/api': {
                target: 'http://music.cpengx.cn', // 本地后端地址
                // target: 'http://localhost:3000', // 线上后端地址
                changeOrigin: true, //允许跨域
                pathRewrite: {
                '^/api': ''
                }
            }
            }
        }
}