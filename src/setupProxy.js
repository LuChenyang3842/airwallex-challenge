/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// import { createProxyMiddleware } from 'http-proxy-middleware';

// export default function (app) {
//   app.use(
//     '/prod',
//     createProxyMiddleware({
//       target: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com',
//       changeOrigin: true,
//     }),
//   );
// }

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/prod',
    createProxyMiddleware({
      target: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com',
      changeOrigin: true,
    }),
  );
};
