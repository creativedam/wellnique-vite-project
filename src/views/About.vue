<template>
  <div class="about w-full">
    <SimpleHeader />
    <Nav />
    <sub-carousel title="About Us" image="bg-sub5-image" icon=""></sub-carousel>
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 h-full relative block pb-10">
      <!-- Side -->
      <Side />
      <!-- Main -->
      <div class="lg:pl-[19.5rem]">
        <div class="max-w-3xl mx-auto xl:max-w-none xl:ml-0">

          <section class="w-full py-12 text-slate-600 md:py-16">
            <div class="container mx-auto px-5">
              <div class="grid grid-cols-1 gap-12">
                <!-- Top cards -->
                <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div
                    class="border border-org-200 bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div class="mx-auto mb-5 h-14 w-14 bg-saturn-icon bg-contain bg-center bg-no-repeat"></div>
                    <h3 class="mb-4 text-xl font-semibold text-slate-800">Mission</h3>
                    <p class="text-base leading-7">
                      To help employers develop, promote, and sustain positive health and
                      safety cultures for the wellbeing of employees and other interested
                      parties.
                    </p>
                  </div>

                  <div
                    class="border border-org-200 bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div class="mx-auto mb-5 h-14 w-14 bg-binoculars-icon bg-contain bg-center bg-no-repeat"></div>
                    <h3 class="mb-4 text-xl font-semibold text-slate-800">Vision</h3>
                    <p class="text-base leading-7">
                      To create productive, safe, and healthy workplaces around the world.
                    </p>
                  </div>

                  <div
                    class=" border border-org-200 bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div class="mx-auto mb-5 h-14 w-14 bg-stone-icon bg-contain bg-center bg-no-repeat"></div>
                    <h3 class="mb-4 text-xl font-semibold text-slate-800">Values</h3>
                    <p class="text-base leading-7">
                      Professionalism, innovation, trustworthy service, environmental
                      responsibility, and corporate social responsibility.
                    </p>
                  </div>
                </div>

                <!-- About section -->
                <div class=" bg-white p-6 md:p-8">
                  <p class="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-org-500">
                    About Wellnique
                  </p>
                  <h2 class="mb-6 text-2xl font-bold text-purp-400 md:text-3xl">
                    Who Are We?
                  </h2>

                  <div class="space-y-5 text-base leading-8">
                    <p>
                      Wellnique offers diverse solutions in workplace wellness, health,
                      and safety. Our solutions are tailored to corporate requirements and
                      continually evolve to address crucial factors that affect employee
                      health, wellness, and safety in the workplace.
                    </p>

                    <p>
                      Wellnique has a network of highly qualified and experienced
                      personnel, ensuring that each client is attended to with all
                      relevant aspects taken into consideration. This helps deliver the
                      most effective and efficient outcomes through assessment, support,
                      education, and monitoring.
                    </p>

                    <p>
                      Wellnique solutions are driven by innovative, modern-day technology.
                      From occupational health and safety management portfolios, a wide
                      range of solutions is available, including:
                    </p>
                  </div>

                  <ul class="mt-6 grid gap-3 text-base sm:grid-cols-2">
                    <li class="rounded-lg bg-slate-50 px-4 py-3">Medical assessments</li>
                    <li class="rounded-lg bg-slate-50 px-4 py-3">
                      Workstation ergonomic assessments
                    </li>
                    <li class="rounded-lg bg-slate-50 px-4 py-3">Counselling</li>
                    <li class="rounded-lg bg-slate-50 px-4 py-3">
                      Safety management systems audits
                    </li>
                    <li class="rounded-lg bg-slate-50 px-4 py-3">
                      Workplace medical surveillance
                    </li>
                    <li class="rounded-lg bg-slate-50 px-4 py-3">Wellness programmes</li>
                    <li class="rounded-lg bg-slate-50 px-4 py-3">Disability management</li>
                  </ul>

                  <div class="mt-10 border-t border-slate-200 pt-8">
                    <h3 class="mb-4 text-xl font-semibold text-slate-800">
                      Quality Policy Statement
                    </h3>
                    <p class="text-base leading-8">
                      Wellnique promises to deliver quality-driven solutions to its
                      clients, their employees, and other interested parties. We strive
                      to provide sustainable solutions that promote positive and healthy
                      workplaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </div>
    <Footer />

  </div>

</template>

<script>
import Top from "@/components/Shared/Top.vue";
import Nav from "../components/Nav/Nav.vue";
import Footer from "../components/Shared/Footer.vue";
import Side from "../components/Shared/Side.vue";
import SubCarousel from "../components/Shared/SubCarouselComponent.vue";
import SimpleHeader from "../components/Shared/SimpleHeader.vue";



export default {
  name: "About",
  components: {
    SimpleHeader,
    Nav,
    Side,
    SubCarousel,
    Footer,
  },
};
</script>
