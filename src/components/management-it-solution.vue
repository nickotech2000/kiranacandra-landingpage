<template>
      <section class="relative md:pb-24 pb-16">
            <div class="container relative lg:pt-24 pt-16">
                <div class="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                <div class="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">We've Built This Site With Content Management In Mind.</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white flex justify-center"><count-up class="counter-value" :start-val="1010" :end-val="1548">1010</count-up>+</h1>
                        <h5 class="counter-head text-lg font-medium">Properties Sell</h5>
                    </div>
                    
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white flex justify-center"><count-up class="counter-value" :start-val="2" :end-val="25">2</count-up>+</h1>
                        <h5 class="counter-head text-lg font-medium">Award Gained</h5>
                    </div>
                    
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white flex justify-center"><count-up class="counter-value" :start-val="0" :end-val="9">0</count-up>+</h1>
                        <h5 class="counter-head text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
    import CountUp from 'vue-countup-v3'
</script>
