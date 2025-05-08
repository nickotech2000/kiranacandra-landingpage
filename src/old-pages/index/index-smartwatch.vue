<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />
        <section class="relative flex items-center py-36 h-screen bg-gray-50  dark:bg-slate-800 jarallax" data-jarallax data-speed="0.5" :style="{ backgroundImage: `url(${backgroundImagePath})`, backgroundPosition: 'center'}">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 mt-10">
                    <div class="grid grid-cols-1 mt-10">
                        <h5 class="text-indigo-600 text-lg font-medium">Here to turn make hand turn</h5>
                        <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">The Future of <br>Tech is Here</h1>
                        <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                        <div class="mt-8">
                            <router-link to="/page-pricing" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i data-feather="shopping-cart" class="size-4 inline-block me-1 align-middle"></i> Buy Now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section class="relative overflow-hidden" >
            <Watch />
            <WatchMonitoring />
            <WhatWeDo />
            <Users :Testimonial=true :users=true />
        </section>
        <section class="md:mt-24 mt-16">
            <Footer :email=true />
        </section>
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import backgroundImagePath from '@/assets/images/smartwatch/hero.png';
import Watch from '@/components/watch/black-great-watch.vue';
import WatchMonitoring from '@/components/watch/watch-monitoring.vue';
import WhatWeDo from '@/components/watch/what-we-do-watch.vue';
import Users from '@/components/users.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.min.css';

onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
});
</script>