<template>
  <section class="relative overflow-hidden">
    <div id="hero-carousel" class="slider">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <div :class="[
          'bg-center bg-cover bg-no-repeat',
          slide.bgClass
        ]">
          <div class="bg-white/5">
            <div class="mx-auto flex min-h-[480px] max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[560px] lg:px-8">
              <div class="w-full max-w-3xl">
                <div class="text-left">
                  <h1
                    class="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl animate__animated animate__fadeInDown">
                    {{ slide.title }}
                  </h1>

                  <p
                    class="mb-8 max-w-2xl text-base leading-7 text-white/95 drop-shadow-md sm:text-lg md:text-xl animate__animated animate__fadeInUp">
                    {{ slide.description }}
                  </p>

                  <div class="flex flex-wrap items-center gap-4">
                    <a :href="slide.primaryLink || slide.link"
                      class="inline-flex items-center bg-purp-400 border border-gray-500 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:bg-org-500">
                      {{ slide.primaryText || "Our Mandate" }}
                    </a>

                    <a :href="slide.secondaryLink || slide.link"
                      class="inline-flex items-center bg-white px-6 border border-purp-e00 py-3 text-base font-semibold text-slate-700 transition duration-300 hover:bg-slate-100">
                      {{ slide.secondaryText || "Learn More" }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";

export default {
  name: "HeroCarousel",

  data() {
    return {
      slides: [
        {
          title: "Healthy & Productive Employees",
          description: "We provide sustainable solutions for healthier workplaces.",
          link: "/about",
          bgClass: "bg-saver-image-4",
          primaryText: "Our Mandate",
          secondaryText: "Learn More",
        },
        {
          title: "Healthy and Safe Workplaces",
          description: "We promote positive health and safety cultures.",
          link: "/about",
          bgClass: "bg-saver-image-1",
          primaryText: "Our Mandate",
          secondaryText: "Learn More",
        },
      ],
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.initCarousel();
    });
  },

  beforeUnmount() {
    const $carousel = $("#hero-carousel");
    if ($carousel.hasClass("slick-initialized")) {
      $carousel.slick("unslick");
    }
  },

  methods: {
    initCarousel() {
      const $carousel = $("#hero-carousel");

      if ($carousel.hasClass("slick-initialized")) {
        $carousel.slick("unslick");
      }

      $carousel.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        appendDots: $(".custom-dots"),
        arrows: false,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: "ease-in-out",
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        adaptiveHeight: false,
      });
    },
  },
};
</script>

<style scoped>
.slick-dotted.slick-slider {
  margin-bottom: 0;
}

.carousel-slide {
  width: 100%;
}

:deep(.slick-dots) {
  bottom: 0;
  position: static;
  display: flex !important;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0;
}

:deep(.slick-dots li) {
  width: auto;
  height: auto;
  margin: 0;
}

:deep(.slick-dots li button:before) {
  font-size: 10px;
  opacity: 0.35;
}

:deep(.slick-dots li.slick-active button:before) {
  opacity: 1;
}
</style>