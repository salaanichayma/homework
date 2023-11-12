
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/MS_EFA',
    createProxyMiddleware({
      target: 'https://shop-test.vrr-db-ticketshop.de',
      changeOrigin: true,
      pathRewrite: {
        '^/MS_EFA': '/MS_EFA',
      },
    })
  );
};
