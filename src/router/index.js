import Vue from "vue";
import IndexPage from "@/views/IndexPage";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "IndexPage",
    component: IndexPage
  },
  {
    path: "/nav-buttons",
    name: "NavButtonsPage",
    component: () => import(/* webpackChunkName: "nav-button-page" */ "@/views/NavButtonsPage")
  },
  {
    path: "/form-modules",
    name: "FormModulesPage",
    component: () => import(/* webpackChunkName: "form-modules-page" */ "@/views/FormModulesPage")
  },
  {
    path: "/modal",
    name: "ModalPage",
    component: () => import(/* webpackChunkName: "modal-page" */ "@/views/ModalPage")
  },
  {
    path: "/movies",
    name: "MoviesPage",
    component: () => import(/* webpackChunkName: "movie-page" */ "@/views/MoviesPage")
  },
  {
    path: "/movie/:id/:slug",
    name: "MovieDetailPage",
    component: () => import(/* webpackChunkName: "movie-page" */ "@/views/MovieDetailPage")
  },
  {
    path: "/vuex-counter",
    name: "VuexCounterPage",
    component: () => import(/* webpackChunkName: "vuex-counter-page" */ "@/views/VuexCounterPage")
  },
  {
    path: "/buy-cards",
    name: "BuyCardsPage",
    component: () => import(/* webpackChunkName: "buy-cards-page" */ "@/views/BuyCardsPage")
  },
  {
    path: "/tabs",
    name: "TabsPage",
    component: () => import(/* webpackChunkName: "tabs-page" */ "@/views/TabsPage")
  },
  {
    path: "/custom-directives",
    name: "CustomDirectivesPage",
    component: () => import(/* webpackChunkName: "custom-directive-page" */ "@/views/CustomDirectivesPage")
  },
  {
    path: "/tv-shows",
    name: "TvShowsPage",
    component: () => import(/* webpackChunkName: "tv-shows-page" */ "@/views/TvShowsPage")
  },
  {
    path: "/vuelidate",
    name: "VuelidatePage",
    component: () => import(/* webpackChunkName: "vuelidate-page" */ "@/views/VuelidatePage")
  },
  {
    path: "/array-sorting",
    name: "ArraySortingPage",
    component: () => import(/* webpackChunkName: "array-sorting-page" */ "@/views/ArraySortingPage")
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import(/* webpackChunkName: "faq-page" */ "@/views/FaqPage")
  },
  {
    path: "/gsap",
    name: "GsapPage",
    component: () => import(/* webpackChunkName: "tween-page" */ "@/views/GsapPage")
  },
  {
    path: "/method-prop",
    name: "MethodPropPage",
    component: () => import(/* webpackChunkName: "method-prop-page" */ "@/views/MethodPropPage")
  },
  {
    path: "/users",
    name: "UsersPage",
    component: () => import(/* webpackChunkName: "method-user-page" */ "@/views/UsersPage")
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error-page" */ "@/views/Error404Page")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
