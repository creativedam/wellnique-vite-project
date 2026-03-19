<template>
    <aside
        class="side mt-12 hidden w-[19.5rem] shrink-0 self-start overflow-hidden lg:sticky lg:top-[3.8125rem] lg:block">
        <div class="bg-amber-50 px-5 py-16">
            <div class="mb-10 px-5 py-5">
                <div class="mb-4 text-center">
                    <div class="text-grape-400 py-2 text-2xl font-semibold">Our Location</div>
                    <icon name="office"
                        class="mx-auto h-10 w-10 fill-gray-500 transition-colors duration-300 hover:fill-orange-500" />
                    <br />
                    Unit 8, Carbo Center
                    <br />
                    Riverwalk
                    <br />
                    Gaborone, Botswana
                </div>

                <div class="mb-4 text-center">
                    <div class="text-grape-400 py-2 text-2xl font-semibold">Call us Now - 24/7</div>
                    <icon name="phonebook"
                        class="mx-auto h-10 w-10 fill-gray-500 transition-colors duration-300 hover:fill-orange-500" />
                    <br />
                    (+267) 71 450 292
                    <br />
                    Customer Support
                </div>
            </div>

            <div class="mb-4 pt-2 text-center">
                <router-link to="/get"
                    class="bg-grape-400 hover:bg-grape-100 hover:border-grape-400 hover:text-grape-400 inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white shadow-sm transition duration-300 hover:border">
                    <span class="mr-2 text-2xl">+</span>
                    Get a Quote
                </router-link>
            </div>
        </div>
    </aside>
</template>

<script>
import Icon from "./Icon.vue";
export default {
    name: "Side",
    components: {
        Icon,
    },
};
</script>