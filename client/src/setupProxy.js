const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/', 
    createProxyMiddleware({
      target: 'http://localhost:3000', // change this to your Express server address
      changeOrigin: true,
    })
  );
};
