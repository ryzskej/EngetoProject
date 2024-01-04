const cors_anywhere = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8080;

cors_anywhere.createServer({
  originWhitelist: [], // Povolí všechny domény
}).listen(port, host, () => {
  console.log(`Proxy server běží na http://${host}:${port}`);
});