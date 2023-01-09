import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import catalogRouting from "./catalog";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue")
    },
    {
        path: "/form-simple",
        name: "form-simple",
        component: () => import("@/views/FormSimple.vue")
    },
    {
        path: "/to-do",
        name: "to-do",
        component: () => import("@/views/Todo.vue")
    },
    {
        path: "/catalog",
        name: "catalog",
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
