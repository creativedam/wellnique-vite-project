<template>
    <div class="about w-full">
        <SimpleHeader />
        <Nav />
        <service-header title="Pandemic Response" background="bg-grape-400/50" image="bg-wallpaper-black"
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
                                        <h2 class="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">Pandemic
                                            Response</h2>
                                        <p class="mt-4 text-base leading-7 text-gray-600">Our Pandemic Response services
                                            help organizations prepare for, respond to, and recover from infectious
                                            disease outbreaks that may affect business operations and employee
                                            well-being. We support employers in putting practical measures in place to
                                            reduce health risks, protect employees, and maintain continuity of essential
                                            services.</p>
                                        <p class="mt-3 text-base leading-7 text-gray-600">Through a proactive and
                                            structured approach, we assist organizations in strengthening workplace
                                            readiness, managing health-related disruptions, and aligning response
                                            measures with occupational health and safety best practice.</p>
                                    </div>

                                    <!-- Response Approach -->
                                    <div class="border border-amber-200 bg-amber-50 p-5 sm:p-6">
                                        <p class="text-sm font-semibold tracking-wide text-amber-600 uppercase">Our
                                            Approach</p>

                                        <h3 class="mt-2 text-lg font-semibold text-gray-700">Preparedness, Prevention &
                                            Business Continuity</h3>

                                        <div class="mt-4 space-y-4 text-sm leading-7 text-gray-700 sm:text-base">
                                            <p>We work with organizations to develop practical pandemic response
                                                strategies that reduce workplace transmission risks and support safe
                                                operations during public health emergencies. Our services are designed
                                                to help management make informed decisions while protecting both
                                                employees and stakeholders.</p>

                                            <p>This includes planning, employee awareness, workplace risk control
                                                measures, and response protocols that can be adapted to the specific
                                                needs of different industries and working environments.</p>
                                        </div>
                                    </div>

                                    <!-- Services -->
                                    <div>
                                        <h3 class="mb-4 text-lg font-semibold text-gray-700">Pandemic Response Services
                                        </h3>

                                        <div class="overflow-hidden border border-gray-200">
                                            <ul class="divide-y divide-gray-200 text-sm sm:text-base">
                                                <li class="bg-white px-4 py-4 text-gray-700">Pandemic preparedness
                                                    planning and policy development</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Workplace infectious
                                                    disease risk assessments</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Development of prevention
                                                    and control measures for the workplace</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Employee education and
                                                    awareness on infection prevention practices</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Guidance on screening,
                                                    isolation, referral, and return-to-work protocols</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Support for business
                                                    continuity and operational resilience planning</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Advisory services on
                                                    workplace hygiene, sanitation, and protective measures</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Review and strengthening
                                                    of emergency response procedures</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- Benefits -->
                                    <div>
                                        <h3 class="mb-4 text-lg font-semibold text-gray-700">Benefits of Pandemic
                                            Response Planning</h3>

                                        <div class="overflow-hidden border border-gray-200">
                                            <ul class="divide-y divide-gray-200 text-sm sm:text-base">
                                                <li class="bg-white px-4 py-4 text-gray-700">Improved workplace
                                                    readiness during public health emergencies</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Reduced risk of disease
                                                    transmission in the workplace</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Better protection of
                                                    employee health and well-being</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Stronger business
                                                    continuity and reduced operational disruption</li>
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
