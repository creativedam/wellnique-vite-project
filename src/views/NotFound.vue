<template>
  <div class="flex min-h-screen flex-col items-center justify-center text-gray-700">
    <div class="container w-full py-16">
      <Logo />
      <Strip />

      <p class="mx-auto max-w-2xl py-16 text-center font-sans text-lg leading-relaxed text-gray-600">The page you are
        looking for is currently unavailable or still being prepared. It may have been moved, updated, or does not exist
        at this time. Please return to the previous page or navigate back to the homepage to continue browsing.</p>

      <router-link to="/"
        class="border-org-200 mx-auto mb-16 block w-1/2 border-4 px-6 py-4 text-center text-6xl hover:bg-amber-50">Home</router-link>
    </div>

    <Footer />
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Footer from "../components/Shared/Footer.vue";
import Strip from "../components/shared/Strip.vue";

export default {
  name: "NotFound",
  components: {
    Logo,
    Strip,
    Footer,
  },
};
</script>
