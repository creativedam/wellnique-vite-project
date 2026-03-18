<template>
    <header class="relative bg-white text-white">
        <div class="absolute inset-0"></div>

        <div class="relative z-10">
            <div class="container mx-auto px-5 py-5">
                <div class="flex items-center justify-between gap-4">
                    <!-- Logo -->
                    <div class="flex-grow">
                        <div class="bg-logo-image bg-center bg-contain bg-no-repeat h-20 w-50"></div>
                    </div>
                    <div class="flex flex-row items-center justify-center lg:items-end gap-4">
                        <a href="mailto:info@wellnique.co.bw?subject=Register as Counsellor&body=Please type below your names and contact details."
                            target="_blank"
                            class="inline-flex items-center hvr-bounce-to-right px-6 py-2   text-sm sm:text-base  border border-purp-300 bg-purp-400 text-white shadow-sm transition duration-300 hover:bg-org-300 hover:text-white">
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