<template>
    <div class="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
        <div class="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
        <div class="relative grid grid-cols-1 pb-8 text-center z-1">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Global clients around the world</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-bold mb-2 flex justify-center"><count-up class="counter-value" :start-val="1010" :end-val="1548"></count-up>+</h1>
                <h5 class="counter-head text-lg font-medium">Customer satisfaction</h5>
            </div>
            
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-bold mb-2 flex justify-center"><count-up class="counter-value" :start-val="2" :end-val="25"></count-up>+</h1>
                <h5 class="counter-head text-lg font-medium">Daily data input</h5>
            </div>
            
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-bold mb-2 flex justify-center"><count-up class="counter-value" :start-val="0" :end-val="9"></count-up>+</h1>
                <h5 class="counter-head text-lg font-medium">Years Experience</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
    import CountUp from 'vue-countup-v3'
</script>