const proxy = [
    {
      context: '/api',
      target: 'http://localhost:5064/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;