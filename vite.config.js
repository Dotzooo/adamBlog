import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // 配置需要使用的插件列表
  base: "/adamBlog/",
});
