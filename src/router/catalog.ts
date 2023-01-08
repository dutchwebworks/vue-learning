export default [
    {
        path: "checkout",
        name: "catalog-checkout",
        component: () => import("@/views/Catalog/Checkout.vue"),
    },
    {
        path: ":slug",
        name: "catalog-detail",
        component: () => import("@/views/Catalog/Detail.vue"),
    },
    {
        path: "",
        name: "catalog-overview",
        component: () => import("@/views/Catalog/Index.vue"),
    },
    {
        path: "thank-you",
        name: "catalog-thank-you",
        component: () => import("@/views/Catalog/ThankYou.vue"),
    },
];
