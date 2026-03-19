<template>
    <div class="about w-full">
        <SimpleHeader />
        <Nav />
        <service-header title="Safety management Systems" background="bg-grape-400/50" image="bg-wallpaper-black"
            icon=""></service-header>
        <div class="max-w-8xl mx-auto px-4 pb-10 sm:px-6 md:px-8">
            <div class="relative lg:flex lg:gap-8">
                <!-- Side -->
                <Side />
                <!-- Main -->
                <div class="min-w-0 flex-1">
                    <div class="mx-auto max-w-3xl xl:ml-0 xl:max-w-none">
                        <section class="w-full pt-12 pb-16 text-slate-600">
                            <div class="container mx-auto px-5">
                                <div class="relative mb-16 space-y-10">
                                    <!-- Title & Intro -->
                                    <div>
                                        <h2 class="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">ISO
                                            45001: Occupational Health & Safety Management System</h2>
                                        <p class="mt-4 text-base leading-7 text-gray-600">We assist organizations in
                                            complying with SHEQ and other legal requirements by ensuring that health,
                                            safety, and environmental risks are effectively managed and minimized. Our
                                            approach focuses on driving continuous improvement in workplace health,
                                            safety, and environmental performance.</p>
                                        <p class="mt-3 text-base leading-7 text-gray-600">This is achieved by supporting
                                            the development and implementation of a comprehensive Occupational Health
                                            and Safety Management System aligned with the ISO 45001:2018 standard. The
                                            framework enables organizations to prevent accidents and ill health through
                                            the systematic identification of hazards, risks, opportunities, and legal
                                            obligations.</p>
                                    </div>

                                    <!-- Management System Development -->
                                    <div>
                                        <h3 class="mb-4 text-lg font-semibold text-gray-700">Management System
                                            Development & Implementation</h3>

                                        <div class="space-y-4 text-base leading-7 text-gray-600">
                                            <p>Establishing a structured safety and health program is one of the most
                                                effective ways to protect your organization’s most valuable asset—your
                                                employees.</p>

                                            <p>Although ISO 45001 certification is not mandatory, organizations can
                                                adopt the standard as a best-practice framework to prevent workplace
                                                injuries and ill health while promoting a proactive safety culture.</p>

                                            <p>We support organizations in developing and implementing Occupational
                                                Health and Safety Management Systems through the following key steps:
                                            </p>
                                        </div>
                                    </div>

                                    <!-- Process List -->
                                    <div class="overflow-hidden border border-gray-200">
                                        <ul class="divide-y divide-gray-200 text-sm sm:text-base">
                                            <li class="bg-white px-4 py-4 text-gray-700">Establishing strong management
                                                leadership and employee participation</li>
                                            <li class="bg-gray-50 px-4 py-4 text-gray-700">Planning and designing the
                                                safety management system</li>
                                            <li class="bg-white px-4 py-4 text-gray-700">Implementing and operating the
                                                safety management system</li>
                                            <li class="bg-gray-50 px-4 py-4 text-gray-700">Monitoring, evaluating, and
                                                continuously improving system performance</li>
                                            <li class="bg-white px-4 py-4 text-gray-700">Conducting management reviews
                                                to ensure effectiveness and compliance</li>
                                        </ul>
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
    name: "About",
    components: {
        SimpleHeader,
        Nav,
        Side,
        ServiceHeader,
        Footer,
    },
};
</script>
