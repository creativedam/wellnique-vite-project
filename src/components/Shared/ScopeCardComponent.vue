<template>
    <article
        class="group relative overflow-hidden rounded-tl-xl rounded-tr-xl shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <!-- Image -->
        <div class="relative overflow-hidden">
            <div
                :class="[image, 'h-60 w-full bg-cover bg-center bg-no-repeat transition duration-700 group-hover:scale-105']">
            </div>

            <!-- Overlay -->
            <div
                class="from-grape-400/80 via-grape-400/35 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
            </div>

            <!-- Hover content -->
            <div class="absolute inset-0 flex items-end p-6">
                <p
                    class="l7 translate-y-6 text-sm text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {{ body }}
                </p>
            </div>
        </div>

        <!-- Bottom content -->
        <div class="border-grape-400 border-t-2 bg-white/75 p-5">
            <div class="flex items-start gap-4">
                <div class="min-w-0">
                    <h3 class="text-grape-400 text-xl font-semibold">
                        {{ title }}
                    </h3>

                    <a :href="link"
                        class="border-grape-400 mt-2 inline-flex items-center border px-4 py-1 text-xs font-medium text-gray-500 transition duration-300 hover:text-amber-500">Read
                        More</a>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: "ServiceCard",
    props: {
        title: String,
        body: String,
        link: String,
        icon: String,
        image: String,
    },
};
</script>
