<template>
  <div class="contacts w-full">
    <Top />
    <Nav />
    <h1 class="text-org-800 text-4xl py-5 text-center font-bold">CONTACTS</h1>
    <h2 class="w-full font-bold bg-white text-4xl text-center p-4 text-red-500">
      Our website is under maintanace
    </h2>
    <p class="w-full text-center p-4 text-black">
      We promote positive health and safety cultures
    </p>

    <p class="w-full text-center p-4 text-org-950">
      (+267) 390 3660
      <br></br>
      Reach us on info@wellnique.co.bw
    </p>
    <Footer />
  </div>
</template>

<script>
import Top from "@/components/Shared/Top.vue";
import Nav from "../components/Nav/Nav.vue";
import Footer from "../components/Shared/Footer.vue";

export default {
  name: "Contacts",
  components: {
    Top,
    Nav,
    Footer,
  },
};
</script>
