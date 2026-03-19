<template>
    <div class="about w-full">
        <SimpleHeader />
        <Nav />
        <service-header title="Employee Medical Examinations" background="bg-amber-500/50" image="bg-wallpaper-primary"
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
                                    <!-- Pre-employment Medical Examination -->
                                    <div class="bg-white p-6 sm:p-8">
                                        <div class="space-y-6">
                                            <div>
                                                <h2 class="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                                                    Pre-Employment Medical Examination</h2>
                                                <p class="mt-3 text-base leading-7 text-gray-600">It is a requirement of
                                                    employment to conduct pre-employment medical examinations for all
                                                    employees before they assume duty.</p>
                                            </div>

                                            <!-- Legal Reference -->
                                            <div class="border border-amber-200 bg-amber-50 p-5 sm:p-6">
                                                <p class="text-sm font-semibold tracking-wide text-amber-500 uppercase">
                                                    Employment Act of Botswana</p>

                                                <h3 class="mt-2 text-lg font-semibold text-gray-700">Section 46. Medical
                                                    Examination</h3>

                                                <div
                                                    class="mt-4 space-y-4 text-sm leading-7 text-gray-700 sm:text-base">
                                                    <p class="italic">(1) Subject to subsection (3), every employee who
                                                        enters into a contract of employment to which this Part applies
                                                        shall be examined by a medical officer.</p>

                                                    <p class="italic">(2) Except in exceptional circumstances, the
                                                        employee shall be medically examined and a medical certificate
                                                        issued before the attestation of the contract of employment.</p>

                                                    <p>Employees who are found to have a manageable chronic disease may
                                                        be given medical management advice by the attending doctors to
                                                        improve their general wellness during the course of employment.
                                                    </p>
                                                </div>
                                            </div>

                                            <!-- Assessment Intro -->
                                            <div class="space-y-3">
                                                <p class="text-base leading-7 text-gray-600">Based on job demands, the
                                                    following examinations may be conducted as part of the
                                                    pre-employment assessment:</p>

                                                <h3 class="text-lg font-semibold text-gray-700">Assessments Conducted
                                                </h3>
                                            </div>

                                            <!-- Assessment List -->
                                            <div class="overflow-hidden">
                                                <ul class="divide-y divide-gray-200">
                                                    <li
                                                        class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Occupational and medical history documentation</li>
                                                    <li
                                                        class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Height, weight, blood pressure, and urine analysis</li>
                                                    <li
                                                        class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Lung function test (FEV1, FVC, and FVC%)</li>
                                                    <li
                                                        class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Vision screening</li>
                                                    <li
                                                        class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Audiometric screening / baseline audiogram</li>
                                                    <li
                                                        class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Physical examination and urine test</li>
                                                    <li
                                                        class="bg-white px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Chest X-ray or back X-rays</li>
                                                    <li
                                                        class="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-700 sm:px-5 sm:text-base">
                                                        Special vision tests for drivers and heavy machinery operators,
                                                        including colour vision, depth perception, peripheral vision,
                                                        and visual acuity</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Exit Medical Examinations -->
                                    <div class="mb-4 bg-white p-6 sm:p-8">
                                        <div class="space-y-4">
                                            <h2 class="text-2xl font-semibold tracking-tight text-gray-700">Exit Medical
                                                Examinations</h2>
                                            <p class="text-base leading-7 text-gray-600">Exit medical examinations are
                                                important when an employee’s contract is terminated. Their purpose is to
                                                determine whether the individual has contracted a disease or sustained
                                                an injury for which compensation may be claimed.</p>
                                        </div>
                                    </div>

                                    <!-- Return to Work Medicals -->
                                    <div class="mb-4 bg-white p-6 sm:p-8">
                                        <div class="space-y-4">
                                            <h2 class="text-2xl font-semibold tracking-tight text-gray-700">
                                                Return-to-Work Medicals</h2>
                                            <p class="text-base leading-7 text-gray-600">Where an employee has taken
                                                leave due to ill health, a return-to-work medical examination may be
                                                conducted to confirm that he or she is fit enough to resume the demands
                                                of the job safely and effectively.</p>
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
