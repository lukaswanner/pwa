import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import connect from './javascripts/websocket.js'
import vuetify from './plugins/vuetify';

global.jQuery = require('jquery');

let $ = global.jQuery;
window.$ = $;

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

const url = "ws://localhost:9000/websocket"
connect(url)