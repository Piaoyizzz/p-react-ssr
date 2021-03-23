const http = require('http');

const React = require('react');

const {
  renderToString
} = require('react-dom/server');

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("h1", null, "Hallo React SSR");
  }

}

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  const index = renderToString( /*#__PURE__*/React.createElement(Index, null));
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">
          ${index}
        </div>
      </body>
    </html>
  `);
}).listen(9001);
