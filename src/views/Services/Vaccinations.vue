<template>
  <div class="about w-full">
    <SimpleHeader />
    <Nav />

    <service-header title="Workplace Vaccinations" background="bg-org-400/50" image="bg-wallpaper-white" icon=""></service-header>

    <div class="max-w-8xl mx-auto px-4 pb-10 sm:px-6 md:px-8">
      <div class="relative lg:flex lg:gap-8">
        <!-- Side -->
        <Side />

        <!-- Main -->
        <div class="min-w-0 flex-1">
          <div class="mx-auto max-w-3xl xl:ml-0 xl:max-w-none">
            <section class="w-full pt-12 pb-16 text-slate-600">
              <div class="container mx-auto px-5">
                <div class="relative row-span-2 mb-16">
                  <!-- Workplace Vaccination Programme -->
                  <div class="bg-white p-6 sm:p-8">
                    <div class="space-y-6">
                      <div>
                        <h2 class="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">Workplace Vaccination Programme</h2>

                        <p class="mt-3 text-base leading-7 text-gray-600">Wellnique’s workplace vaccination programme is an onsite occupational health service designed to help employers protect their workforce, reduce preventable illness, and support workplace productivity.</p>

                        <p class="mt-3 text-base leading-7 text-gray-600">Through our mobile onsite clinic, employees can receive selected vaccinations at the workplace, reducing time away from work and making preventive healthcare more accessible and convenient.</p>
                      </div>

                      <!-- Vaccines Offered -->
                      <div class="space-y-3">
                        <h3 class="text-lg font-semibold text-gray-700">Vaccination Services Offered</h3>

                        <p class="text-base leading-7 text-gray-600">The following vaccinations and wellness injections may be offered as part of the workplace programme:</p>
                      </div>

                      <div class="overflow-hidden">
                        <ul class="divide-y divide-gray-200">
                          <li class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Flu vaccination</li>
                          <li class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Covid-19 vaccination</li>
                          <li class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Vitamin B12 injection</li>
                          <li class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">HPV vaccination</li>
                        </ul>
                      </div>

                      <!-- Programme Note -->
                      <div class="border border-amber-200 bg-amber-50 p-5 sm:p-6">
                        <p class="text-sm font-semibold tracking-wide text-amber-500 uppercase">Onsite Workplace Convenience</p>

                        <h3 class="mt-2 text-lg font-semibold text-gray-700">Preventive care delivered at your workplace</h3>

                        <p class="mt-4 text-sm leading-7 text-gray-700 sm:text-base">Our onsite vaccination service helps employers make preventive healthcare easier to access by bringing the clinic to the workplace. This supports employee wellness while reducing unnecessary time spent away from work.</p>
                      </div>
                    </div>
                  </div>

                  <!-- Benefits to Employers -->
                  <div class="mb-4 bg-white p-6 sm:p-8">
                    <div class="space-y-4">
                      <div>
                        <h2 class="text-2xl font-semibold tracking-tight text-gray-700">Potential Benefits to Employers</h2>

                        <p class="mt-3 text-base leading-7 text-gray-600">Workplace vaccination programmes can assist employers in creating a healthier, more resilient workforce.</p>
                      </div>

                      <div class="overflow-hidden">
                        <ul class="divide-y divide-gray-200">
                          <li class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Helps keep the workforce healthy by reducing the risk of severe preventable illness.</li>
                          <li class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Helps protect clients, customers, visitors, and other workplace stakeholders.</li>
                          <li class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Reduces absenteeism caused by preventable illness.</li>
                          <li class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Supports improved productivity and business continuity.</li>
                          <li class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Improves morale, builds trust, and demonstrates responsiveness to employee health needs.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Benefits to Employees -->
                  <div class="mb-4 bg-white p-6 sm:p-8">
                    <div class="space-y-4">
                      <div>
                        <h2 class="text-2xl font-semibold tracking-tight text-gray-700">Potential Benefits to Employees</h2>

                        <p class="mt-3 text-base leading-7 text-gray-600">Employees benefit from convenient access to preventive healthcare services without needing to leave the workplace.</p>
                      </div>

                      <div class="overflow-hidden">
                        <ul class="divide-y divide-gray-200">
                          <li class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Helps prevent illness and long-term health complications.</li>
                          <li class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Reduces absences and doctor visits caused by preventable illness.</li>
                          <li class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Helps protect family and household members from preventable illness.</li>
                          <li class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">Improves morale by making healthcare more accessible and convenient.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Call to Action -->
                  <div class="mb-4 bg-white p-6 sm:p-8">
                    <div class="space-y-4">
                      <h2 class="text-2xl font-semibold tracking-tight text-gray-700">Book an Onsite Vaccination Programme</h2>

                      <p class="text-base leading-7 text-gray-600">Wellnique can assist organisations with planning and delivering onsite vaccination programmes based on workforce needs, availability, and occupational health requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Top from "@/components/Shared/Top.vue";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Shared/Footer.vue";
import Side from "@/components/Shared/Side.vue";
import ServiceHeader from "@/components/Shared/ServiceHeader.vue";
import SimpleHeader from "@/components/Shared/SimpleHeader.vue";

export default {
  name: "Vaccinations",
  components: {
    SimpleHeader,
    Nav,
    Side,
    ServiceHeader,
    Footer,
  },
};
</script>