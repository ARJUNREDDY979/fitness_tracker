
module.exports = {
  devServer: {
    port: 5544,
    proxy: {
      '/api': {
        target: 'https://regal-kulfi-ced23e.netlify.app/db.json', // Your Node.js server
        changeOrigin: true,
      },
    },
  },
};
