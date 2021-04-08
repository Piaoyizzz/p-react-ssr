// 将 SSR 当作中间件插入
import React from 'react';
import { renderToString } from 'react-dom/server';
import Index from '../../client/pages/index';

export default (ctx, next) => {
  const index = renderToString(<Index />);

  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>my react ssr</title>
    </head>
    <body>
        <div id="root">${index}</div>
        <script type="text/javascript" src="index.js"></script>
    </body>
    </html>
  `;

  return next();
}