<template>
  <main
    class="flex dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen"
  >
    <Navbar @dark-switch="onDarkSwitch" />
    <div class="w-full flex relative z-20 items-center">
      <div
        class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4"
      >
        <router-view />
      </div>
    </div>
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
