import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import catalogRouting from "./catalog";

const routes = [
    {
        path: "/",
        name: "Homepage",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/About.vue")
    },
    {
        path: "/catalog",
        name: "Catalog",
        children: catalogRouting
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active'
})

export default router
