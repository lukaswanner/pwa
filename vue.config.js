const fs = require('fs')

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('./certs/example.com+5-key.pem'),
      cert: fs.readFileSync('./certs/example.com+5.pem'),
    },
    public: 'https://localhost:8080/'
  },
  pwa: {
    "short_name": "Scrabble",
    "name": "Math-Scrabble LETS PLAY!",
    "description": "MOST EFFECTIVE WAY TO WASTE YOUR TIME",
    "start_url": "index.html",
    "background_color": "#3367D6",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#3367D6",
    workboxPluginMode: 'InjectManifest',
  },
  "transpileDependencies": [
    "vuetify"
  ]
}