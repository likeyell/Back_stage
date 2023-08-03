import { buildMenuTree } from "@/utils/buildMenuTree";
import router from "@/router";
import { RouteRecordRaw } from "vue-router";

export default (data: TroutingConfigurationInformationData) => {
  const temp = data.map((item) => {
    const path = item.component.replace(/^views\//, "");
    const component = () => import("@/views/" + path + ".vue");
    const route = {
      id: item.id,
      parent_id: item.parent_id,
      path: item.path,
      name: item.name,
      component,
      meta: { ...item },
    };

    item.redirect && ((route as RouteRecordRaw).redirect = item.redirect);
    return route;
  });

  buildMenuTree(temp).forEach((route) => {
    router.addRoute(route as RouteRecordRaw);
  });
  // console.log(router.getRoutes());
};
