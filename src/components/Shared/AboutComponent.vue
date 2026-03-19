<template>
    <section class="w-full py-20 text-slate-600">
        <div class="container mx-auto px-16">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                <!-- Left Column -->
                <div class="relative">
                    <div class="max-w-xl">
                        <p class="text-org-500 mb-3 text-sm font-semibold tracking-[0.2em] uppercase">About Us</p>

                        <h1 class="text-grape-400 pb-6 text-3xl font-bold md:text-4xl">Who Are We?</h1>

                        <p class="text-base leading-8 text-slate-600">Wellnique offers diverse solutions in workplace
                            wellness, health, and safety. Our solutions are tailored to corporate requirements and
                            continually evolve to address the crucial factors that affect employee health, wellness, and
                            safety in the workplace.</p>

                        <router-link to="/about"
                            class="mt-8 inline-flex items-center border border-slate-800 px-6 py-3 text-base font-semibold text-slate-800 transition duration-300 hover:bg-slate-800 hover:text-white">Read
                            More</router-link>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="relative">
                    <p class="text-org-500 mb-3 text-sm font-semibold tracking-[0.2em] uppercase">Our Identity</p>

                    <h1 class="text-grape-400 pb-8 text-3xl font-bold md:text-4xl">What We Stand For</h1>

                    <div class="space-y-6">
                        <!-- Vision -->
                        <div class="border-org-200 border bg-white p-6 transition duration-300 hover:shadow-md">
                            <div class="flex items-start gap-4">
                                <div class="bg-binoculars-icon h-12 w-12 shrink-0 bg-contain bg-center bg-no-repeat">
                                </div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold text-slate-800">Vision</h3>
                                    <p class="text-base leading-7 text-slate-600">To create productive, safe, and
                                        healthy workplaces around the world.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Mission -->
                        <div class="border-org-200 border bg-white p-6 transition duration-300 hover:shadow-md">
                            <div class="flex items-start gap-4">
                                <div class="bg-saturn-icon h-12 w-12 shrink-0 bg-contain bg-center bg-no-repeat"></div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold text-slate-800">Mission</h3>
                                    <p class="text-base leading-7 text-slate-600">To help employers develop, promote,
                                        and sustain positive health and safety cultures for the wellbeing of employees
                                        and other interested parties.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Values -->
                        <div class="border-org-200 border bg-white p-6 transition duration-300 hover:shadow-md">
                            <div class="flex items-start gap-4">
                                <div class="bg-stone-icon h-12 w-12 flex-shrink-0 bg-contain bg-center bg-no-repeat">
                                </div>
                                <div>
                                    <h3 class="mb-2 text-xl font-semibold text-slate-800">Values</h3>
                                    <p class="text-base leading-7 text-slate-600">Professionalism, innovation,
                                        trustworthy service, environmental responsibility, and corporate social
                                        responsibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>