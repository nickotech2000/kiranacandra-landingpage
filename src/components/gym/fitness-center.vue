<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="md:col-span-5">
                    <div class="relative">
                        <div class="pe-12">
                            <img :src="about1" class="rounded-md" alt="">
                        </div>

                        <div class="absolute bottom-16 end-0">
                            <img :src="about2" class="rounded-md shadow-md size-48" alt="">
                            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-7">
                    <div class="lg:ms-4">
                        <h5 class="font-semibold text-base text-indigo-600 mb-2">Gym & Fitness</h5>
                        <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Introducing Techwind, <br> A Fitness Center</h4>
                        <p class="text-slate-400 max-w-xl">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                        <p class="text-slate-400 max-w-xl mt-3">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        <div class="mt-6">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Read More <i class="uil uil-angle-right-b align-middle"></i></router-link>
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
    </div>
</template>

<script setup>
import { ref } from 'vue';
import about1 from '@/assets/images/gym/about01.jpg'
import about2 from '@/assets/images/gym/about02.jpg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
