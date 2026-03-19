<template>
    <div class="about w-full">
        <SimpleHeader />
        <Nav />
        <service-header title="Disability Management Program" background="bg-grape-400/50" image="bg-wallpaper-black"
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
                                <div class="relative row-span-2 mb-16 space-y-10">
                                    <!-- Title & Intro -->
                                    <div>
                                        <h2 class="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                                            Disability Management Program</h2>
                                        <p class="mt-4 text-base leading-7 text-gray-600">Our Disability Management
                                            Program provides early intervention services to minimize the impact of
                                            disability in the workplace. We facilitate an interactive process that
                                            promotes open and cooperative dialogue between the employee, management, and
                                            other relevant stakeholders on workplace disability matters.</p>
                                        <p class="mt-3 text-base leading-7 text-gray-600">Through this program,
                                            employees with disabilities and affected departments are supported in
                                            identifying reasonable accommodations that enable successful rehabilitation
                                            and a safe, sustainable return to work.</p>
                                    </div>

                                    <!-- Goals -->
                                    <div>
                                        <h3 class="mb-4 text-lg font-semibold text-gray-700">Disability Management
                                            Program Goals</h3>

                                        <div class="overflow-hidden border border-gray-200">
                                            <ul class="divide-y divide-gray-200 text-sm sm:text-base">
                                                <li class="bg-white px-4 py-4 text-gray-700">Minimize time away from
                                                    work due to disability and reduce the impact of absence on both
                                                    employees and the organization</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Support employee recovery
                                                    by facilitating temporary, modified, or alternative work
                                                    arrangements where possible</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Reduce workers’
                                                    compensation and other disability-related costs</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Identify and effectively
                                                    manage long-term and permanent disability risks and associated costs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- Services -->
                                    <div>
                                        <h3 class="mb-4 text-lg font-semibold text-gray-700">Disability Management
                                            Program Services</h3>

                                        <div class="overflow-hidden border border-gray-200">
                                            <ul class="divide-y divide-gray-200 text-sm sm:text-base">
                                                <li class="bg-white px-4 py-4 text-gray-700">Transitional Return-to-Work
                                                    programs</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Advisory services on
                                                    reasonable accommodation or workplace reassignment following injury
                                                    or disability</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Disability management
                                                    education for both employees and management</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Ergonomic evaluations for
                                                    individuals with disabilities</li>
                                            </ul>
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
