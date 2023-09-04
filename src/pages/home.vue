<template>
  <section class="w-full flex flex-col relative overflow-scroll">
    <div class="flex flex-col justify-center m-7 h-96">
      <p class="mb-3 text-4xl md:text-5xl lg:text-8xl dark:text-white">
        Hello 🖖
      </p>
      <h1 class="mb-3 text-4xl md:text-5xl lg:text-8xl dark:text-white">
        This is Adam
      </h1>
      <h2 class="mb-3 text-4xl md:text-5xl lg:text-8xl">
        <span> I'm {{ displayedText }}</span>
        <span v-if="showCursor" class="cursor">|</span>
      </h2>
    </div>
    <About />
    <!-- <Work /> -->
    <Contact />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import About from "../components/Home/about.vue";
// import Work from "../components/Home/work.vue";
import Contact from "../components/Home/contact.vue";

const sentences = ["Frontend Developer!"];
const displayedText = ref("");
const showCursor = ref(true);

const typeAndDeleteText = async () => {
  // Infinite loop to keep repeating
  for (const sentence of sentences) {
    // Type
    for (let i = 0; i <= sentence.length; i++) {
      displayedText.value = sentence.slice(0, i);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause after typing

    // Delete
    // for (let i = sentence.length; i >= 0; i--) {
    //   displayedText.value = sentence.slice(0, i);
    //   await new Promise((resolve) => setTimeout(resolve, 100));
    // }
  }
};

// Toggle cursor visibility
const toggleCursor = () => {
  setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
};

onMounted(() => {
  typeAndDeleteText();
  toggleCursor();
});
</script>

<style>
.cursor {
  animation: blink 0.5s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>

<style lang="scss" scoped></style>
