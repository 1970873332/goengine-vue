import { RouteConfig as BaseRouteConfig, RouteObject } from "@web/router/Config";
import { RouteRecordRaw } from "vue-router";

/**
 * Vue路由配置
 */
export default abstract class RouteConfig extends BaseRouteConfig {
    /**
     * 路由
     */
    public static get routes(): TRouteObject[] {
        return [];
    }
}

type TRouteObject = RouteRecordRaw &
    RouteObject & {
        /**
         * 子项
         */
        children?: TRouteObject[];
    };

export {
    TRouteObject as RouteObject
};

