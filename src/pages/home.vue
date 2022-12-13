<template>
  <section
    class="container mx-auto w-full overflow-scroll flex flex-col justify-center relative"
  >
    <div class="md:mb-7 lg:md-0">
      <p class="text-5xl md:text-8xl dark:text-white">Hello ,</p>
      <h1 class="text-6xl md:text-9xl dark:text-white">I'm Adam</h1>
    </div>
    <div class="flex justify-between pt-12 sm:pt-0 md:pt-0">
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
        <p class="dark:text-white">
          Here is my blog, Recorded my technical study notes, pitfalls I met,
          and notes on software development experience
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
