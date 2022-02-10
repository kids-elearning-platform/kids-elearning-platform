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
    path: "/Ad1min",
    name: "Admin" ,
    component: () =>
    import(/* webpackChunkName: "Admin" */ "../views/Admin.vue"),
   },
  {
    path: "/Fruit",
    name: "Fruit" ,
    component: () =>
    import(/* webpackChunkName: "Fruit" */ "../views/Fruit.vue"),
  },
  {
    path: "/Number",
    name: "Number" ,
    component: () =>
    import(/* webpackChunkName: "Number" */ "../views/Number.vue"),
  },
  {
    path: "/Color",
    name: "Color" ,
    component: () =>
    import(/* webpackChunkName: "Color" */ "../views/Color.vue"),
  },
  {
    path: "/Animal",
    name: "Animal" ,
    component: () =>
    import(/* webpackChunkName: "Animal" */ "../views/Animal.vue"),
  },
  { path:"/login",
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
