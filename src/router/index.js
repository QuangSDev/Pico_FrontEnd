import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  //noicom

  {
    path: "/rice-cooker",
    name: "noicom",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NoiComView.vue"),
  },

  {
    path: "/noicom/noicom-detail-action",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/noicom/action/NoiComActionView.vue"
      ),
  },
  //matgiat

  {
    path: "/washing-machine",
    name: "maygiat",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MayGiatView.vue"),
  },

  {
    path: "/maygiat/maygiat-detail-action",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/maygiat/action/MayGiatActionView.vue"
      ),
  },
  //dieuhoa

  {
    path: "/air-conditioner",
    name: "dieuhoa",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DieuHoaView.vue"),
  },

  {
    path: "/dieuhoa/dieuhoa-detail-action",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/dieuhoa/action/DieuHoaActionView.vue"
      ),
  },
  //televison
  {
    path: "/televison",
    name: "televison",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TelevisonView.vue"),
  },
  {
    path: "/televison/televison-detail-action",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/televison/action/TelevisonActionView.vue"
      ),
  },
  {
    path: "/televison/televison-detail-action/:id",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/televison/action/TelevisonActionView.vue"
      ),
  },
  {
    path: "/televison/televison-detail-view/:id",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/televison/detail/TelevisonDetailView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
