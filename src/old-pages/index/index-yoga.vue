<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative lg:pt-64 py-36 bg-[url('../../assets/images/yoga/bg.jpg')] bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70 z-2"></div>
            <div class="container relative z-3">
                <div class="grid grid-cols-1 mt-24">
                    <div class="text-center">
                        <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-24 rounded-full inline-flex items-center justify-center bg-white/10 hover:bg-white/40 text-white dark:bg-slate-900/10 dark:hover:bg-slate-900/40 duration-500 cursor-pointer">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                        </router-link>

                        <h4 class="font-bold text-white text-2xl mt-6">Body & Mind</h4>
                        <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Fitness Classes for Every Goal</h1>
                        <p class="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                        <div class="mt-8">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Join Our Classes</router-link>
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

        <section class="relative overflow-hidden md:py-24 py-16">
            <Meditation />
            <Popular />
            <Work />
            <Videos />
        </section>
        <Journey />
        <section class="relative md:py-24 py-16">
            <Schedule />
            <Switcher />
            <Teacher />
        </section>
        <InstaPost />
        <Footer />
        <Cookies />
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Navbar from '@/components/navbar/navbar.vue';
import Meditation from '@/components/yoga/yoga-meditation.vue';
import Popular from '@/components/yoga/popular-meditation.vue';
import Work from '@/components/yoga/yoga-work.vue';
import Videos from '@/components/yoga/yoga-videos.vue';
import Journey from '@/components/yoga/yoga-journey.vue';
import Schedule from '@/components/yoga/yoga-schedule.vue';
import Switcher from '@/components/switcher.vue';
import Teacher from '@/components/yoga/yoga-teacher.vue';
import InstaPost from '@/components/yoga/yoga-insta-post.vue';
import Footer from '@/components/footer/footer-two.vue';
import Cookies from '@/components/start-cookies.vue';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>