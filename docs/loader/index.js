const Vue = require('vue').default;
const App = require('./app.vue').default;

new Vue({
    render: h => h(App)
}).$mount("#app");
