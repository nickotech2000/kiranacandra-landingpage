<template>
    <section class="relative md:py-24 py-16 md:pt-0 pt-0">
        <div class="container relative">
            <div class="grid grid-cols-1 justify-center">
                <div class="relative z-1">
                    <div class="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                        <div class="lg:col-start-2 lg:col-span-10">
                            <div class="relative">
                                <img :src="bg" class="rounded-md shadow-lg" alt="">
                                <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content md:mt-8">
                        <div class="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div class="lg:col-start-2 lg:col-span-10">
                                <div class="grid md:grid-cols-3 grid-cols-1 items-center">

                                    <div class="counter-box text-center">
                                        <h1 class="text-white text-4xl font-semibold mb-2 flex justify-center"><count-up class="counter-value" :start-val="10" :end-val="99">10</count-up>%</h1>
                                        <h5 class="counter-head text-white text-lg font-semibold mb-2">Positive feedback </h5>
                                        <p class="text-white/50">From Doctors</p>
                                    </div>


                                    <div class="counter-box text-center">
                                        <h1 class="text-white text-4xl font-semibold mb-2 flex justify-center"><count-up class="counter-value" :start-val="2" :end-val="25">2</count-up>+</h1>
                                        <h5 class="counter-head text-white text-lg font-semibold mb-2">Experienced Clinics</h5>
                                        <p class="text-white/50">High Qualified</p>
                                    </div>


                                    <div class="counter-box text-center">
                                        <h1 class="text-white text-4xl font-semibold mb-2 flex justify-center"><count-up class="counter-value" :start-val="95" :end-val="1251">95</count-up>+</h1>
                                        <h5 class="counter-head text-white text-lg font-semibold mb-2">Questions & Answers</h5>
                                        <p class="text-white/50">Your Questions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
    </section>

    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
        </div>
        <button class="text-slate-400 absolute top-[20px] right-[20px]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CountUp from 'vue-countup-v3';
import bg from '@/assets/images/hospital/bg.jpg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
