import Vue from 'vue'
import App from './App'
import Keen from 'keen-ui'
import keenstyle from '../node_modules/keen-ui/dist/min/keen-ui.min.css'

Vue.use(Keen)

console.log(keenstyle)

// console.log(keen);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
