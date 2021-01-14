const fs = require('fs')

module.exports = {
    devServer: {
        https: {
            key: fs.readFileSync('./certs/example.com+5-key.pem'),
            cert: fs.readFileSync('./certs/example.com+5.pem'),
        },
        public: 'https://localhost:8080/'
    },
    "transpileDependencies": [
        "vuetify"
    ],
    pwa: {
        name: 'Math Scrabble PWA',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/service-worker.js',
            // ...other Workbox options...
        },
        manifestOptions: {
            name: 'Math Scrabble PWA',
            short_name: 'Scrabble',
            start_url: '/',
            display: 'fullscreen', //standalone
        }
    }
}