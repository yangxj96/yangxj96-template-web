import { type RouteRecordRaw } from "vue-router";
import layout from "@/components/Layout/index.vue";

/**
 * 通用的路由,所有人都有的
 */
export default [
  {
    // 登录页
    name: "login",
    path: "/login",
    component: () => import("@/views/Login/index.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "",
    component: layout,
    redirect: "",
    meta: {
      title: "首页"
    },
    children: [
      {
        // 首页
        name: "home",
        path: "",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        // 错误页
        name: "error",
        path: "/error/:code",
        component: () => import("@/views/Error/index.vue"),
        meta: {
          title: "路由错误"
        }
      }
    ]
  }
] as Array<RouteRecordRaw>;
