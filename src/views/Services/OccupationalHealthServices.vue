<template>
    <div class="about w-full">
        <SimpleHeader />
        <Nav />
        <service-header title="Occupational Health Services" background="bg-grape-400/50" image="bg-wallpaper-black"
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
                                <div class="relative row-span-2 mb-16">
                                    <!-- Occupational Health Services -->
                                    <div class="bg-white p-6 sm:p-8">
                                        <div class="space-y-6">
                                            <div>
                                                <h2 class="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                                                    Occupational Health Services</h2>
                                                <p class="mt-3 text-base leading-7 text-gray-600">Occupational Health
                                                    Services are designed to promote and maintain the physical, mental,
                                                    and social well-being of employees in all occupations. Our services
                                                    focus on preventing work-related illnesses and injuries while
                                                    ensuring a safe and healthy working environment.</p>
                                            </div>

                                            <!-- Overview -->
                                            <div class="border border-amber-400 bg-amber-50 p-5 sm:p-6">
                                                <p class="text-sm font-semibold tracking-wide text-amber-500 uppercase">
                                                    Service Overview</p>

                                                <h3 class="mt-2 text-lg font-semibold text-gray-700">Workplace Health &
                                                    Safety Management</h3>

                                                <div
                                                    class="mt-4 space-y-4 text-sm leading-7 text-gray-700 sm:text-base">
                                                    <p>We support organizations in identifying, evaluating, and
                                                        controlling workplace hazards that may affect employee health.
                                                        Our approach integrates medical expertise with occupational
                                                        safety practices to reduce risks and improve productivity.</p>

                                                    <p>Through continuous monitoring, employee education, and compliance
                                                        support, we help businesses meet regulatory requirements while
                                                        fostering a culture of health and safety.</p>
                                                </div>
                                            </div>

                                            <!-- Services Intro -->
                                            <div class="space-y-3">
                                                <p class="text-base leading-7 text-gray-600">Our Occupational Health
                                                    Services include a comprehensive range of solutions tailored to meet
                                                    the needs of different industries and job roles:</p>

                                                <h3 class="text-lg font-semibold text-gray-700">Key Services Offered
                                                </h3>
                                            </div>

                                            <!-- Services List -->
                                            <div class="overflow-hidden">
                                                <ul class="divide-y divide-gray-200">
                                                    <li
                                                        class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Workplace risk assessments and hazard identification</li>
                                                    <li
                                                        class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Medical surveillance and periodic health examinations</li>
                                                    <li
                                                        class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Fitness-for-work assessments and occupational medical
                                                        evaluations</li>
                                                    <li
                                                        class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Health risk assessments and wellness screening programs</li>
                                                    <li
                                                        class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Injury and illness management, including return-to-work support
                                                    </li>
                                                    <li
                                                        class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Occupational hygiene services (noise, dust, and exposure
                                                        monitoring)</li>
                                                    <li
                                                        class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Health education, awareness, and employee wellness programs</li>
                                                    <li
                                                        class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Compliance support with national occupational health and safety
                                                        regulations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Benefits to Employers -->
                                    <div class="mb-4 bg-white p-6 sm:p-8">
                                        <div class="space-y-4">
                                            <h2 class="text-2xl font-semibold tracking-tight text-gray-700">Benefits to
                                                Employers</h2>
                                            <p class="text-base leading-7 text-gray-600">Implementing effective
                                                occupational health services helps organizations reduce workplace risks,
                                                minimize absenteeism, and improve employee productivity. It also ensures
                                                compliance with legal requirements while enhancing overall
                                                organizational performance and reputation.</p>
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
