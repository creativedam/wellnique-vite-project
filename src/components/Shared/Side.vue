<template>
    <aside class="hidden lg:block absolute z-20 top-[3.8125rem] left-[30px] w-[19.5rem] overflow-hidden ">
        <div class="px-5 py-15 bg-org-200/20">
            <div class="px-5 py-5 mb-10 ">
                <div class="mb-4 text-center">
                    <div class="text-purp-400 font-semibold text-2xl py-2">Our Location</div>
                    <icon name="office"
                        class="w-10 h-10 fill-gray-500 hover:fill-orange-500 transition-colors duration-300 mx-auto" />
                    <br>
                    Unit 8, Carbo Center<br />
                    Riverwalk<br />
                    Gaborone, Botswana
                </div>

                <div class=" mb-4 text-center">
                    <div class="text-purp-400 font-semibold text-2xl py-2">Call us Now - 24/7</div>
                    <icon name="phonebook"
                        class="w-10 h-10 fill-gray-500 hover:fill-orange-500 mx-auto transition-colors duration-300" />
                    <br>
                    (+267) 71 450 292<br />
                    Customer Support
                </div>
            </div>

            <div class="pt-4 text-center">
                <router-link to="/get"
                    class="inline-flex items-center justify-center  bg-purp-400 px-5 py-3 text-base font-semibold text-white shadow-sm transition duration-300 hover:bg-org-300">
                    <span class="mr-2 text-2xl">+</span>
                    Get a Quote
                </router-link>
            </div>
        </div>
    </aside>
</template>

<script>
import Icon from './Icon.vue';
export default {
    name: "Side",
    components: {
        Icon,
    }
};
</script>