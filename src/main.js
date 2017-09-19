// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import home from 'components/home/home';
import explore from 'components/explore/explore';
import user from 'components/user/user';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [{
	path: '/',
	redirect: '/home'
}, {
	path: '/home',
	component: home
}, {
	path: '/explore',
	component: explore
}, {
	path: '/user',
	component: user
}];

const router = new VueRouter({
	linkActiveClass: 'active',
	routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
