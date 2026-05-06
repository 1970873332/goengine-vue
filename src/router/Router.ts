import { createRouter, createWebHashHistory, Router } from "vue-router";
import RouteConfig from "./Config";

export function router(config: typeof RouteConfig): Router {
    const {
        title = document.title
    } = config;

    document.title = title;

    return createRouter({
        history: createWebHashHistory(),
        routes: config.routes,
    });
};
