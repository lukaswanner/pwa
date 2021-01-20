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

const url = "wss://https://ancient-savannah-40407.herokuapp.com/websocket"
connect(url)