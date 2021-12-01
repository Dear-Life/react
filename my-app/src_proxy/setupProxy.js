const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            /*
                 changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
                 changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
                 changeOrigin默认值为false，但我们一般将changeOrigin值设为true
            */
            pathRewrite: { '^/api1': '' }
        }),
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}