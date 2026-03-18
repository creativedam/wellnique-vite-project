<template>
    <article
        class="group relative overflow-hidden rounded-tl-xl rounded-tr-xl bg-white shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <!-- Image -->
        <div class="relative overflow-hidden">
            <div
                :class="[image, 'h-60 w-full bg-cover bg-center bg-no-repeat transition duration-700 group-hover:scale-105']">
            </div>

            <!-- Overlay -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/35 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
            </div>

            <!-- Hover content -->
            <div class="absolute inset-0 flex items-end p-6">
                <p
                    class="translate-y-6 text-sm leading-7 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {{ body }}
                </p>
            </div>
        </div>

        <!-- Bottom content -->
        <div class="border-l-6 border-orange-500 bg-white p-5">
            <div class="flex items-start gap-4">


                <div class="min-w-0">
                    <h3 class="text-xl font-semibold text-purp-400">
                        {{ title }}
                    </h3>

                    <a :href="link"
                        class="mt-2 inline-flex items-center text-xs font-medium border  border-purp-400 px-4 py-1 text-orange-600 transition duration-300 hover:text-slate-900">
                        Read More
                        <span class="ml-2 transition duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
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
