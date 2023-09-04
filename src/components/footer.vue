<template>
  <footer class="footer">
    <div class="footer-contact flex">
      <div
        v-for="item in contactItems"
        :key="item.name"
        class="footer-contact_item flex items-center justify-center w-1/3 h-64"
        :class="`${item.name}`"
        @mouseover="$emit('change-background', item.color)"
        @mouseout="$emit('change-background', '#fff')"
      >
        <a :class="item.textClass" :href="item.href" target="_blank">{{
          item.name
        }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const contactItems = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/chun-wei-hsu-8a3397148/",
    color: "#0e76a8",
    textClass: "text-2xl lg:text-5xl",
  },
  {
    name: "Github",
    href: "https://github.com/Dotzooo",
    color: "#6e40c9",
    textClass: "text-2xl lg:text-5xl",
  },
  {
    name: "Medium",
    href: "https://medium.com/@AdamHz",
    color: "#6b6b6b",
    textClass: "text-2xl lg:text-5xl",
  },
];
</script>

<style lang="scss" src="@/assets/styles/footer.scss"></style>
