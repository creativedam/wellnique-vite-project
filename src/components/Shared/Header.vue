<template>
  <header class="border-grape-200 border-b-2 bg-white">
    <div class="absolute inset-0"></div>

    <div class="relative z-10">
      <div class="container mx-auto px-4 py-4 md:py-12">
        <div class="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Logo -->
          <div class="flex justify-center lg:justify-start">
            <icon class="h-auto max-h-20 object-contain" name="logo" alt="Wellnique logo" />
          </div>

          <!-- Location -->
          <div class="flex justify-center lg:justify-start">
            <div class="w-full max-w-xs lg:pr-6">
              <div class="flex items-start gap-3">
                <icon name="office"
                  class="h-6 w-6 fill-gray-500 transition-colors duration-300 hover:fill-orange-500" />
                <div>
                  <h2 class="text-lg font-bold text-slate-700">Our Location</h2>
                  <p class="mt-1 text-sm leading-6 text-slate-600">
                    Unit 8, Carbo Center
                    <br />
                    Riverwalk
                    <br />
                    Gaborone, Botswana
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Call Us -->
          <div class="flex justify-center lg:justify-start">
            <div class="w-full max-w-xs lg:pr-6">
              <div class="flex items-start gap-3">
                <icon name="phonebook"
                  class="h-6 w-6 fill-gray-500 transition-colors duration-300 hover:fill-orange-500" />
                <div>
                  <h2 class="text-lg font-bold text-slate-700">Call us Now - 24/7</h2>
                  <p class="mt-1 text-sm leading-6 text-slate-600">
                    (+267) 71 450 291
                    <br />
                    (+267) 390 3660
                    <br />
                    Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Socials + Button -->
          <div class="flex flex-row items-center justify-center gap-4 lg:items-end">
            <a href="mailto:info@wellnique.co.bw?subject=Register as Counsellor&body=Please type below your names and contact details."
              target="_blank"
              class="hvr-bounce-to-right border-grape-300 bg-grape-400 hover:bg-grape-100 hover:text-grape-400 inline-flex items-center border px-6 py-2 text-sm text-white shadow-sm transition duration-300 sm:text-base">
              <span class="mr-2 text-lg">+</span>
              Register as Counsellor
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "HeaderSection",
  components: {
    Icon,
  },
};
</script>

<style scoped>
header {
  overflow: hidden;
}
</style>