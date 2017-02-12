require('./bootstrap');
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//router
import PageOne from './components/PageOne.vue'
import PageTwo from './components/PageTwo.vue'

const routes = [
    { path:'/', component:PageOne},
    { path:'/two', component:PageTwo}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    render:h=>h(App),
    router
});