<template>
  <div class="home w-full">
    <!-- <Top /> -->
    <Header />
    <Nav />
    <CovidList />
    <SlideShow />
    <Intro />
    <AboutComponent />
    <Poster />
    <Scope />
    <MailingList />
    <Footer />
  </div>
</template>

<script>
import Top from "@/components/Shared/Top.vue";
import Nav from "../components/Nav/Nav.vue";
import Header from "../components/Shared/Header.vue";
import SlideShow from "../components/Shared/SlideShow.vue";
import Footer from "../components/Shared/Footer.vue";
import CovidList from "../components/Shared/CovidList.vue";
import Intro from "../components/Shared/Intro.vue";
import AboutComponent from "../components/Shared/AboutComponent.vue";
import Poster from "../components/Shared/Poster.vue";
import Scope from "../components/Shared/Scope.vue";
import MailingList from "../components/Shared/MailingList.vue";



export default {
  name: "Home",
  components: {
    Top,
    Nav,
    Header,
    CovidList,
    SlideShow,
    AboutComponent,

    MailingList,
    Poster,
    Scope,
    Footer,
  },
};
</script>
