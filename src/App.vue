<template>
  <div
    class="flex flex-col transition duration-500 ease-in-out"
    :style="{ backgroundColor: backgroundColor }"
  >
    <Header @dark-switch="onDarkSwitch" />
    <main class="flex dark:bg-black font-mono relative">
      <router-view />
    </main>
    <Footer @change-background="changeBackgroundColor" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

const backgroundColor = ref("#fff");

function onDarkSwitch() {
  document.documentElement.classList.toggle("dark");
}

function changeBackgroundColor(color) {
  backgroundColor.value = color;
}
</script>
