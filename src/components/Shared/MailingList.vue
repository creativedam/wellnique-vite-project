<template>
    <section class="w-full bg-gray-200 py-12 text-slate-600">
        <div class="container mx-auto px-5 text-center">
            <div class="mx-auto max-w-2xl rounded-xl bg-white px-6 py-10 shadow-md">
                <h2 class="mb-3 text-2xl font-semibold text-slate-800">
                    Join Wellnique Mailing List
                </h2>

                <p class="mb-6 text-base text-slate-600">
                    Subscribe to receive the latest news in your inbox.
                </p>

                <!-- Input + Button -->
                <div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <input type="email" placeholder="your@email.com"
                        class="w-full  border border-slate-300 px-4 py-3 text-sm outline-none focus:border-org-400" />

                    <a href="mailto:info@wellnique.co.bw?subject=Mailing List Subscription&body=Please subscribe me to the Wellnique mailing list."
                        target="_blank"
                        class="inline-flex items-center justify-center bg-purp-400 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:text-purp-400 hover:bg-purp-200">
                        Subscribe
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
