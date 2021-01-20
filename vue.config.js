const fs = require('fs')

module.exports = {
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
            swSrc: 'src/service-worker_old.js',
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