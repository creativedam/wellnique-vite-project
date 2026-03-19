<template>
    <div class="about w-full">
        <SimpleHeader />
        <Nav />
        <service-header title="Wellness Consultancy" background="bg-grape-400/50" image="bg-wallpaper-black"
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
                                        <h2 class="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">Wellness
                                            Consultancy</h2>
                                        <p class="mt-4 text-base leading-7 text-gray-600">Our Wellness Consultancy
                                            services are designed to promote a healthy, productive, and engaged
                                            workforce. We partner with organizations to develop tailored wellness
                                            programs that address physical, mental, and emotional well-being, ultimately
                                            improving employee performance and organizational outcomes.</p>
                                        <p class="mt-3 text-base leading-7 text-gray-600">By taking a proactive and
                                            preventative approach, we help organizations reduce absenteeism, manage
                                            workplace stress, and foster a positive workplace culture that supports
                                            long-term employee health and resilience.</p>
                                    </div>

                                    <!-- Wellness Approach -->
                                    <div class="border-org-200 border bg-amber-50 p-5 sm:p-6">
                                        <p class="text-sm font-semibold tracking-wide text-amber-600 uppercase">Our
                                            Approach</p>

                                        <h3 class="mt-2 text-lg font-semibold text-gray-700">Holistic Employee
                                            Well-being</h3>

                                        <div class="mt-4 space-y-4 text-sm leading-7 text-gray-700 sm:text-base">
                                            <p>We adopt a holistic approach to workplace wellness by addressing key
                                                health risk factors and promoting sustainable lifestyle changes. Our
                                                programs are evidence-based and aligned with best practices in
                                                occupational health and wellness management.</p>

                                            <p>We work closely with management and employees to ensure that wellness
                                                initiatives are practical, measurable, and aligned with organizational
                                                goals.</p>
                                        </div>
                                    </div>

                                    <!-- Services -->
                                    <div>
                                        <h3 class="mb-4 text-lg font-semibold text-gray-700">Wellness Consultancy
                                            Services</h3>

                                        <div class="overflow-hidden border border-gray-200">
                                            <ul class="divide-y divide-gray-200 text-sm sm:text-base">
                                                <li class="bg-white px-4 py-4 text-gray-700">Workplace wellness program
                                                    design and implementation</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Employee health risk
                                                    assessments and screenings</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Stress management and
                                                    mental health awareness programs</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Lifestyle management
                                                    programs (nutrition, physical activity, and chronic disease
                                                    prevention)</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Employee wellness education
                                                    and training workshops</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Development of workplace
                                                    wellness policies and strategies</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Monitoring and evaluation
                                                    of wellness program effectiveness</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- Benefits -->
                                    <div>
                                        <h3 class="mb-4 text-lg font-semibold text-gray-700">Benefits of Wellness
                                            Consultancy</h3>

                                        <div class="overflow-hidden border border-gray-200">
                                            <ul class="divide-y divide-gray-200 text-sm sm:text-base">
                                                <li class="bg-white px-4 py-4 text-gray-700">Improved employee health,
                                                    morale, and job satisfaction</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Reduced absenteeism and
                                                    increased productivity</li>
                                                <li class="bg-white px-4 py-4 text-gray-700">Lower healthcare and
                                                    disability-related costs</li>
                                                <li class="bg-gray-50 px-4 py-4 text-gray-700">Enhanced organizational
                                                    culture and employee engagement</li>
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
