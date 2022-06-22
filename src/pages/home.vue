<template>
  <div>
    <main
      class="flex dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen"
    >
      <Navbar @dark-switch="onDarkSwitch" />
      <Body />
    </main>
  </div>
</template>
<script>
import Navbar from "../components/navbar.vue";
// import Header from "./components/header.vue";
import Body from "../components/body.vue";

export default {
  components: { Body, Navbar },
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
