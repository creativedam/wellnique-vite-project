<template>
    <div id="relative" class="w-full relative text-white ">
        <div :class="' ' + image + ' h-94 bg-cover bg-repeat bg-center  z-20 relative'">
            <div class="h-94 grid grid-cols-1 items-center justify-items-center">
                <div :class="'h-24 ' + icon + ' bg-left bg-auto bg-no-repeat grid'">
                    <h1 data-animation="fadeInUp" class="text-5xl drop-shadow-md font-bold place-self-center"> {{ title
                    }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>,
<script>
export default {
    name: 'SubCaousel',
    props: {
        title: String,
        link: String,
        icon: String,
        image: String
    },
};
</script>
