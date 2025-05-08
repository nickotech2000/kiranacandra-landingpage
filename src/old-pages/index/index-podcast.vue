<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />
        <section class="relative table w-full py-36 lg:py-44 bg-gradient-to-br from-indigo-600/20 to-yellow-500/20 dark:from-indigo-600/20 dark:to-yellow-500/20">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="lg:col-span-7">
                        <div class="me-6">
                            <i class="uil uil-microphone text-indigo-600 text-4xl"></i>
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-[54px] my-5 text-black dark:text-white">Find and Listen on <br> your <span class="text-indigo-600">favorite podcast</span></h4>
                            <p class="text-slate-500 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                            <div class="mt-8">
                                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox py-1.5 ps-5 pe-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full cursor-pointer">Listen Now <span class="size-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-indigo-600 ms-3"><i class="mdi mdi-play"></i></span></router-link>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-5 relative">
                        <div class="grid grid-cols-2 items-center md:gap-4 gap-3">
                            <div class="md:space-y-4 space-y-3">
                                <img :src="podcast2" class="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt="">
                                <img :src="podcast1" class="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt="">
                            </div>

                            <div class="md:space-y-4 space-y-3">
                                <img :src="podcast3" class="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt="">
                                <img :src="podcast4" class="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt="">
                            </div>
                        </div>

                        <span
                            class="size-24 bg-yellow-500 border-[3px] border-gray-100 dark:border-gray-800 rounded-full absolute bottom-0 -end-4 flex items-center justify-center">
                            <span class="text-white text-xl text-center font-semibold">
                                <count-up class="counter-value block" :start-val="100" :end-val="551"></count-up>
                                <span class="text-white font-semibold text-sm block">Podcasts</span>
                            </span>
                        </span>

                        <div
                            class="absolute top-1/2 -translate-y-1/2 -start-4 py-2 px-3 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-fit my-3">
                            <i class="uil uil-microphone text-indigo-600 text-xl align-middle"></i> <span
                                class="font-semibold ms-1">Amazing Conversation</span>
                        </div>

                        <div class="absolute -top-4 start-1/2 -translate-x-1/2 text-center">
                            <router-link to="#!" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600">
                                <i class="uil uil-microphone inline-flex items-center justify-center text-2xl"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
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
        <Listen />
        <section class="relative md:py-24 py-16">
            <Categories />
            <Videos />
            <Pricing />
        </section>
        <Users :users=true />
        <GetInTouch :contact=true />
        <Footer :email=true />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import CountUp from 'vue-countup-v3';
import Listen from '@/components/podcart/podcart-listen.vue';
import Categories from '@/components/podcart/podcart-categories.vue';
import Videos from '@/components/podcart/podcart-video.vue';
import Pricing from '@/components/podcart/podcart-pricing.vue';
import Users from '@/components/users.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

import podcast1 from '@/assets/images/podcast/h1.jpg'
import podcast2 from '@/assets/images/podcast/h2.jpg'
import podcast3 from '@/assets/images/podcast/h3.jpg'
import podcast4 from '@/assets/images/podcast/h4.jpg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>