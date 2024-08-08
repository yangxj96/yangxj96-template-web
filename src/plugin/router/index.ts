import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/plugin/router/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0
    };
  }
});

// 路由前置守卫
router.beforeEach(async to => {
  console.debug("[路由守卫 - 前置] - 开始");
  if (!to.name || !router.hasRoute(to.name as string)) {
    return {
      name: "error",
      params: {
        code: 404
      }
    };
  }
  console.debug("[路由守卫 - 前置] - 解析守卫结束");
});

// 路由后置守卫
router.afterEach(to => {
  console.debug("[路由守卫 - 后置] - 开始");
  // 切换标题
  if (to.meta.title) {
    // 强制转换成了string,后续优化
    document.title = String(to.meta.title);
  }
  console.debug("[路由守卫 - 后置] - 解析守卫结束");
});

declare module "vue-router" {
  interface RouteMeta {
    /** 修改的标题 */
    title?: string;
    /** 所需权限集合 */
    authority?: string[];
    /** 路由分组 **/
    route_group?: string;
    /** 菜单项 **/
    menu?: boolean;
  }
}

export default router;
