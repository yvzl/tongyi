import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [{
    path: "/",
    component: () => import("@/views/home.vue")
}]

export default createRouter({
    history: createWebHistory(),
    routes,
})