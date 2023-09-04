<template>
  <header
    class="flex items-center h-20 w-full bg-zinc-400 border-b-2 border-black"
  >
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="w-3/6 md:w-2/6 lg:w-1/6 ml-6 md:ml-8 lg:ml-0">
        <span class="font-ibm-plex-mono">ADAM's </span>
      </router-link>
      <nav class="flex items-center justify-between w-3/6 md:w-4/6 lg:w-5/6">
        <div class="font-ibm-plex-mono">BL 🙆‍♂️ G</div>
        <div
          class="flex justify-between w-20 font-ibm-plex-mono dark:text-white"
        >
          <span>{{ currentYear }}</span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
