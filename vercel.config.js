module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/projects': { page: '/projects' },
      '/pricing': { page: '/pricing' }
    };
  }
}; 