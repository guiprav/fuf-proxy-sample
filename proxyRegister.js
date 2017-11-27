let register = require('fuf-proxy/register');

module.exports = port => {
  register({
    subdomain: 'sample',
    cmd: 'node',
    args: [`${__dirname}/app.js`],
    pid: process.pid,
    port: port || null,
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
};

if (require.main === module) {
  module.exports();
}
