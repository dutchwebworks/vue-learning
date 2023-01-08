const Checkout = () => import("@/views/Catalog/Checkout.vue");
const Detail = () => import("@/views/Catalog/Detail.vue");
const Index = () => import("@/views/Catalog/Index.vue");
const ThankYou = () => import("@/views/Catalog/ThankYou.vue");

const catalogRouting = [
    {
        path: "checkout",
        name: "CatalogCheckout",
        component: Checkout
    },
    {
        path: "detail",
        name: "CatalogDetail",
        component: Detail
    },
    {
        path: "",
        name: "CatalogIndex",
        component: Index
    },
    {
        path: "thank-you",
        name: "CatalogThankYou",
        component: ThankYou
    },
];

export default catalogRouting
