const context = require.context('./', false, /\.jsx$/);
const keys = context.keys().filter(item => item !== './index.js');
const Modules = keys.reduce((memo, key) => {
  memo[key.match(/([^\/]+)\.jsx$/)[1]] = context(key).default;
  return memo;
}, {});

export default Modules;