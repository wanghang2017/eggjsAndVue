import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/components/app.vue";
import store from "./store";



// console.log(App);
// // console.log(Vue);

// Vue.use(Vuex);

const router = new VueRouter({
    mode :"history",
    routes:[{
        path:"/home",
        component:App
    }]
})

//  new Vue({
//     el:"#root",
//     data: {
//       message: 'Hello Vue!'
//     }
//   })
// console.log("xxx");
// // console.log(VueRouter);

// new Vue({
//     el: '#root',
//     router,
//     store,
//     render: h => h(App)
// })


new Vue({
    // el: '#root', 
    router,
    store,
    render: h => h(App)
}).$mount("#root")

// app.$mount("#root");


// console.log(app.$mount);