<template>
            <div class="container relative" id="about">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="relative">
                            <img :src="hero" class="rounded-full" alt="">
                            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </router-link>
                            </div>

                            <div class="absolute top-0 start-0 -z-1">
                                <img :src="dots" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ms-5">
                            <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">About us</h6>
                            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Better Design <br> Better Experience</h3>

                            <p class="text-slate-400 max-w-xl">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>

                            <div class="mt-4">
                                <div class="flex justify-between mb-2">
                                    <span class="text-slate-400">WordPress</span>
                                    <span class="text-slate-400">84%</span>
                                </div>
                                <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div class="bg-indigo-600 h-[6px] rounded-full" style="width: 84%"></div>
                                </div>
                            </div>

                            <div class="mt-4">
                                <div class="flex justify-between mb-2">
                                    <span class="text-slate-400">JavaScript</span>
                                    <span class="text-slate-400">79%</span>
                                </div>
                                <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div class="bg-indigo-600 h-[6px] rounded-full" style="width: 79%"></div>
                                </div>
                            </div>

                            <div class="mt-4">
                                <div class="flex justify-between mb-2">
                                    <span class="text-slate-400">HTML</span>
                                    <span class="text-slate-400">95%</span>
                                </div>
                                <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div class="bg-indigo-600 h-[6px] rounded-full" style="width: 95%"></div>
                                </div>
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
import hero from '@/assets/images/personal/hero.jpg'
import dots from '@/assets/images/illustrator/dots.svg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>