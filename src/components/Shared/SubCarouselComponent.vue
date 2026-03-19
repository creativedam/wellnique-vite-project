<template>
    <div id="relative" class="relative w-full text-white">
        <div class="absolute top-0 right-0 left-0 z-20 mx-auto h-full w-1/2 bg-white/25 lg:w-1/3"></div>
        <div :class="' ' + image + ' bg-centerrelative h-94 bg-cover bg-repeat'">
            <div class="grid h-94 grid-cols-1 items-center justify-items-center">
                <div :class="'h-24 ' + icon + ' grid bg-auto bg-left bg-no-repeat'">
                    <h1 data-animation="fadeInUp" class="z-40 place-self-center text-5xl font-bold drop-shadow-md">{{
                        title }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>
,
<script>
export default {
    name: "SubCaousel",
    props: {
        title: String,
        link: String,
        icon: String,
        image: String,
    },
};
</script>
