<template>
  <section class="about">
    <div class="text-2xl">ABOUT ME</div>
    <div class="about-content">
      <div
        class="flex flex-col md:flex-row justify-center w-full lg:w-2/3 mx-auto py-12"
      >
        <div
          class="about-content_avatar flex justify-center items-center w-full md:w-1/2"
        >
          <img src="@/image/self.jpg" class="object-fill" alt="" />
        </div>
        <div class="flex flex-col justify-center w-full p-5 md:px-5 md:w-1/2">
          <p class="dark:text-white mb-5">
            Here is my blog, Recorded my technical study notes, pitfalls I met,
            and notes on software development experience
          </p>
          <p class="dark:text-white mb-5">Based in Taipei Taiwan.</p>

          <p class="dark:text-white mb-5">
            這裡是我的部落格，記錄了我的技術學習筆記，遇到的陷阱，以及軟體開發經驗的筆記。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="@/assets/styles/Home/about.scss"></style>
