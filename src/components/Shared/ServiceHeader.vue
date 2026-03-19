<template>
    <div id="relative" :class="' ' + background + ' relative w-full text-white'">
        <!-- <div class="absolute bg-white/75 left-0 top-0 right-0 mx-auto w-1/2 lg:w-1/3 h-full  z-20 "></div> -->
        <div :class="' ' + image + ' bg-size-50 relative h-94 bg-center bg-repeat'">
            <div class="grid h-94 grid-cols-1 items-center justify-items-center">
                <div :class="'h-24 ' + icon + ' grid bg-auto bg-left bg-no-repeat'">
                    <h1 data-animation="fadeInUp"
                        class="0 z-40 place-self-center px-10 py-10 text-5xl font-bold drop-shadow-md">
                        {{ title }}
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>
,
<script>
export default {
    name: "ServiceHeader",
    props: {
        title: String,
        link: String,
        icon: String,
        background: String,
        image: String,
    },
};
</script>
