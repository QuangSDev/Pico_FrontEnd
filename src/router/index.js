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
  // {
  //   path: "/employee",
  //   name: "employee",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/EmployeeView.vue"),
  // },
  // {
  //   path: "/employee/employee-detail-action",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ "../views/employee_action_view/EmployeeCreateView.vue"
  //     ),
  // },
  // {
  //   path: "/employee/employee-detail-action/:id",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ "../views/employee_action_view/EmployeeCreateView.vue"
  //     ),
  // },
  // {
  //   path: "/employee/employee-detail-view/:id",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ "../views/employee_detail_view/EmployeeInfoView.vue"
  //     ),
  // },
  // {
  //   path: "/manage-license",
  //   name: "manage-license",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ManagementView.vue"),
  // },
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
