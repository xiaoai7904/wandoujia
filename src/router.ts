import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/download",
    name: "download",
    component: () => import("@/pages/download"),
    meta: {
      title: "下载提示",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

router.beforeEach(async (to, form, next) => {
  next();
});
export default router;
