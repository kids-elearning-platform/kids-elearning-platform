import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Challenge",
    name: "Challenge",
    component: () =>
    import(/* webpackChunkName: "Challenge" */ "../views/Challenge.vue"),
  },
  {
    path: "/Feedback",
    name: "Feedback" ,
    component: () =>
    import(/* webpackChunkName: "Feedback" */ "../views/Feedback.vue"),
  },
  {
    path: "/Contact",
    name: "Contact" ,
    component: () =>
    import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path:"/login",
    name:"login",
    component : ()=>
    import(/*webpackChunkName: "login" */ "../components/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
