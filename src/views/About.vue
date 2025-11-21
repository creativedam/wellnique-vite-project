<template>
  <div class="about w-full h-lvh">
    <Top />
    <Nav />
    <h1 class="text-sky-800 text-4xl py-5 text-center font-bold">About</h1>
    <h2 class="w-full font-bold bg-white text-center p-4 text-red-500">
      Our website is under maintanace
    </h2>
    <p class="w-full text-center p-4 text-black">
      Defining Primary Healthcare in Botswana; moving towards Universal Health
      Coverage
    </p>
    <p class="w-full text-center p-4 text-sky-950">
      Reach us on info@mpgbotswana.org.bw
    </p>
    <Footer />
  </div>
</template>

<script>
import Top from "@/components/Shared/Top.vue";
import Nav from "../components/Nav/Nav.vue";
import Footer from "../components/Shared/Footer.vue";

export default {
  name: "About",
  components: {
    Top,
    Nav,
    Footer,
  },
};
</script>
