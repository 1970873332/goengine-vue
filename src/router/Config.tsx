import { RouteConfig as BaseRouteConfig, Route, RouteEvent, RouteObject } from "@web/router/Config";
import { h, VNode } from "vue";
import { RouteRecordRaw, RouterLinkProps } from "vue-router";

/**
 * Vue路由配置
 */
export default abstract class RouteConfig extends BaseRouteConfig {
    /**
     * 规则
     */
    public static readonly rule: RouterLinkProps = { to: "/", replace: true };

    /**
     * 路由
     */
    public static get routes(): TRouteObject[] {
        return [];
    }
    /**
     * 404页面
     */
    public static get loseNode(): VNode {
        return h("div");
    }
    /**
     * 页面加载中
     */
    public static get loadingNode(): VNode {
        return h("div");
    }
}

interface IEvent extends RouteEvent<IRoute> { }

interface IRoute extends Partial<RouterLinkProps>, Route { }

type TRouteObject = RouteRecordRaw &
    RouteObject & {
        /**
         * 子项
         */
        children?: TRouteObject[];
        /**
         * 404
         */
        loseNode?: VNode;
    };

export {
    IRoute as Route,
    IEvent as RouteEvent,
    TRouteObject as RouteObject
};

