<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div class="lg:col-span-5 md:col-span-6">
                <div class="relative">
                    <div class="relative">
                        <img :src="about1" class="lg:w-[400px] w-[280px]" alt="">
                        <div class="absolute top-0 translate-y-2/4 end-0 text-center">
                            <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </router-link>
                        </div>
                    </div>
                    <div class="absolute -end-5 -bottom-16">
                        <img :src="about2" class="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900" alt="">
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                <div class="lg:ms-6">
                    <h4 class="!font-alex text-3xl">Our Story</h4>
                    <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Incredible Experience</h3>
                    <p class="text-slate-400 max-w-xl mb-2">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                    <p class="text-slate-400 max-w-xl">We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back, the blubber-hook was inserted into the original hole there cut by the spades of the mates.</p>
                
                    <div class="mt-8">
                        <router-link to="#" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white font-normal">Explore Now</router-link>
                    </div>
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
</template>

<script setup>
import { ref } from 'vue';
import about1 from '@/assets/images/spa/ab1.jpg'
import about2 from '@/assets/images/spa/ab2.jpg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
