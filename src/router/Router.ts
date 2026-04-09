import { createRouter, createWebHashHistory, Router } from "vue-router";
import RouteConfig from "./Config";

export const router = function (config: typeof RouteConfig): Router {
    config.title && (document.title = config.title);

    return createRouter({
        history: createWebHashHistory(),
        routes: config.routes,
    });
};
