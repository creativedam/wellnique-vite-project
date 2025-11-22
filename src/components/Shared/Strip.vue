<template>
  <div id="get" class="font-sans bg-repeat bg-org-200 py-10 w-full">
    <div class="container mx-auto px-4">
      <div class="w-full relative py-4">
        <!-- Title -->
        <div>
          <span class="font-medium text-xl text-white block text-center">
            {{ title }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Wellnique",
  },
});
</script>
