<template>
    <header class="relative border-b-2 border-b-amber-500 bg-white text-white">
        <div class="absolute inset-0"></div>

        <div class="relative z-10">
            <div class="container mx-auto px-5 py-5">
                <div class="flex items-center justify-between gap-4">
                    <!-- Logo -->
                    <div class="flex-grow">
                        <div class="bg-logo-image h-20 w-50 bg-contain bg-center bg-no-repeat"></div>
                    </div>
                    <div class="flex flex-row items-center justify-center gap-4 lg:items-end">
                        <a href="mailto:info@wellnique.co.bw?subject=Register as Counsellor&body=Please type below your names and contact details."
                            target="_blank"
                            class="hvr-bounce-to-right border-grape-400 bg-grape-400 hover:bg-grape-100 hover:text-grape-400 inline-flex items-center border-2 px-6 py-2 text-sm text-white shadow-sm transition duration-300 sm:text-base">
                            <span class="mr-2 text-lg">+</span>
                            Register as Counsellor
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "SimpleHeader",
};
</script>