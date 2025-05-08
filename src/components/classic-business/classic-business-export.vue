<template>
    <div>
        <div class="container relative pb-16">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                <div class="lg:col-span-5 md:col-span-6">
                    <div class="relative">
                        <div class="relative flex justify-end">
                            <img :src="about1" class="lg:w-[400px] w-[280px] rounded shadow-sm dark:shadow-gray-700" alt="">
                            <div class="absolute top-0 translate-y-2/4 start-0 text-center">
                                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 cursor-pointer">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </router-link>
                            </div>
                        </div>
                        <div class="absolute md:-start-5 start-0 -bottom-16">
                            <img :src="about2" class="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded" alt="">
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-7 md:col-span-6">
                    <div class="lg:ms-5">
                        <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Creative Vision & Mission</h6>
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We develop & create <br> digital future.</h3>

                        <p class="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded">Get Started</router-link>
                    </div>
                </div>
            </div>
        </div>
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
    </div>

</template>

<script setup>
import { ref } from 'vue';
import about1 from '@/assets/images/business/about01.jpg'
import about2 from '@/assets/images/business/about02.jpg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>