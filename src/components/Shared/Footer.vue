<template>
  <SubFooter />
  <div class="w-full block">
    <!-- SOCIAL ICONS SECTION -->
    <section class="w-full bg-gray-500 text-white py-6 border border-gray-500 ">
      <div class="container mx-auto px-5 flex justify-center sm:justify-start">
        <div class=" mx-auto grid-cols-1 gap-2 grid ">
          <Icon name="facebook" class="w-12 h-12  p-2 rounded-full fill-white hover:fill-org-500" />

        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="w-full bg-gray-400 text-white  py-5">
      <div class="container lg:w-full mx-auto px-5">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <!-- COPYRIGHT TEXT -->
          <div class="text-center md:text-left text-sm">
            <span class="font-sans text-white font-normal block">
              All Rights Reserved. Wellnique © 2025 | Disclaimer
            </span>
          </div>

          <!-- DESIGNER CREDIT -->
          <div class="text-center md:text-right text-sm">
            <a href="https://creativedam.co.bw" target="_blank"
              class="font-sans font-normal text-white hover:text-fuchsia-500 block md:inline">
              Design and Development
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Icon from "@/components/Shared/Icon.vue";
import SubFooter from "./SubFooter.vue";


export default {
  components: {
    Icon,
    SubFooter

  },
};
</script>

<style scoped lang="scss"></style>
