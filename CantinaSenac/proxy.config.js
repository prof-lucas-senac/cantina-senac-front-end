const proxy = [
    {
      context: '/api',
      target: 'http://localhost:5056/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;