module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://603146c6081a010017546f69.mockapi.io/:path*' // Proxy to Backend
      }
    ]
  }
}