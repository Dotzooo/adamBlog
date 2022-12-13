<template>
  <main
    class="flex first-letter:bg-white dark:bg-black font-mono relative overflow-hidden h-screen"
  >
    <Navbar @dark-switch="onDarkSwitch" />
    <router-view />
  </main>
</template>
<script>
import Navbar from "./components/navbar.vue";

export default {
  components: { Navbar },
  setup() {
    function onDarkSwitch() {
      document.documentElement.classList.toggle("dark");
    }

    return {
      onDarkSwitch,
    };
  },
};
</script>

<style>
body {
  background-color: #fff;
  background-image: linear-gradient(#000 1px, transparent 0),
    linear-gradient(90deg, #000 1px, transparent 0);
  background-size: 100px 450px, 400px 400px;
}
</style>
