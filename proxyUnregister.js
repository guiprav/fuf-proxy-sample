let unregister = require('fuf-proxy/unregister');

module.exports = () => {
  unregister('sample').catch(console.error);
};

if (require.main === module) {
  module.exports();
}
