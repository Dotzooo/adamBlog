<template>
  <section
    class="container mx-auto w-full overflow-scroll flex flex-col justify-center relative"
  >
    <div class="">
      <p class="text-8xl dark:text-white">Hello ,</p>
      <h1 class="text-9xl dark:text-white">I'm Adam</h1>
    </div>
    <div class="flex justify-between">
      <div>
        <p class="dark:text-white">
          Hi! I'm a Frontend develop based in Taipei Taiwan.
        </p>
        <p class="dark:text-white">
          Everyday I learn, read and practice to create the best interfaces as
          possible.
        </p>
        <p class="dark:text-white">
          It's beautiful to have a passion and a work at the same time, don't
          you think?
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "body-item",
};
</script>

<style lang="scss" scoped>
.star {
  position: relative;

  &::before {
    position: absolute;
    content: "*";
    width: 5px;
    height: 5px;
    top: -25%;
    left: 40%;
  }
}
</style>
