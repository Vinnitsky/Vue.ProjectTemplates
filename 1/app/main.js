// var Vue = require('vue');
import Vue from 'vue'
import appHeader from './components/c1.vue'

// import c3 from './components/c3.js'
// var c3 = Vue.component('hello-world', {
//     template: '#hello-world-template'
// });

new Vue({
    el: '#app',
    data: {
        name: 'Vlad'
    },
    components: {
        'app-header': appHeader,
        'hello-world': c3
    }
});