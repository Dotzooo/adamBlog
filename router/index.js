import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../src/pages/home.vue"; // home 首頁
import Profile from "../src/pages/profile.vue"; // profile 簡介
import Portfolio from "../src/pages/portfolio.vue"; // portfolio 作品集
import Article from "../src/pages/article.vue"; // article 文章
import Photography from "../src/pages/photography.vue"; // photography 攝影作品

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
  {
    path: "/photography",
    name: "Photography",
    component: Photography,
  },
];

const router = createRouter({
  history: createWebHashHistory("/adamBlog/"),
  routes,
});

export default router;
