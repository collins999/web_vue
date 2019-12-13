import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('beforeEach 全局前置守卫');
    next();
});
// 全局解析守卫
router.beforeResolve((to, from, next) => {
    console.log('beforeResolve 全局解析守卫');
    next();
});
// 全局后置守卫
router.afterEach((to, from) => {
    console.log('afterEach 全局后置守卫');
});

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
