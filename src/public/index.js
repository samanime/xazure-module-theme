/* global Vue, VueRouter, modules */
import App from './components/App';

let router;
const routes = [];

const routeManager = (() => {
  return {
    add: route => { [].concat(route).forEach(r => routes.push(r)); },
    get: () => router
  };
})();

Object.assign(global, { routeManager });

Promise.all([
  ((async () =>
    Promise.all((await (await fetch(`${modules['theme-default'].apiPath}/scripts`.replace(/\/+/, '/'))).json())
      .map(src => new Promise(resolve => document.body.appendChild(
        Object.assign(document.createElement('script'), { src, type: 'module', onload: resolve })
      )))
    )
  )()),
  new Promise(resolve => document.addEventListener("DOMContentLoaded", resolve))
]).then(() => {
  router = new VueRouter({
    base: '/',
    mode: 'history',
    routes
  });

  new Vue({
    router,
    render(h) { return h(App); }
  }).$mount('#app');
  console.log(routeManager.get().current);
});