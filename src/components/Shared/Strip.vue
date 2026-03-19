<template>
  <div id="get" class="w-full bg-amber-50 bg-repeat py-10 font-sans">
    <div class="container mx-auto px-4">
      <div class="relative w-full py-4">
        <!-- Title -->
        <div>
          <span class="block pb-4 text-center font-sans text-6xl font-bold text-slate-700">
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
    default: "Page",
  },
});
</script>
