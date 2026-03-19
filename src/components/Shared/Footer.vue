<template>
  <SubFooter />
  <div class="block w-full text-gray-600">
    <!-- SOCIAL ICONS SECTION -->
    <section class="w-full bg-gray-200 py-6">
      <div class="container mx-auto flex justify-center px-5 sm:justify-start">
        <div class="mx-auto grid grid-cols-1 gap-2">
          <Icon name="facebook" class="hover:fill-org-500 h-12 w-12 rounded-full fill-slate-700 p-2" />
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="w-full bg-gray-200">
      <div class="container mx-auto border-t border-t-gray-500 px-5 py-5 lg:w-full">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <!-- COPYRIGHT TEXT -->
          <div class="text-center text-sm md:text-left">
            <span class="block font-sans font-normal">All Rights Reserved. Wellnique © 2025 | Disclaimer</span>
          </div>

          <!-- DESIGNER CREDIT -->
          <a href="https://creativedam.co.bw" target="_blank"
            class="hover:text-grape-400 block font-sans text-sm md:inline">Need a site like this? Work with Creative Dam
            ></a>
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
    SubFooter,
  },
};
</script>

<style scoped lang="scss"></style>
