<template>
<div>
    <span class="fixed blur-[200px] size-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-indigo-600/20"></span>
    <Navbar :lightlogo=true :loginButton=true />
    <section class="relative overflow-hidden md:pt-44 pt-36 md:pb-24 pb-16">
        <div class="container relative">
            <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px] relative">
                <div class="md:me-6">
                    <ul class="list-none mb-0 text-amber-400 text-xl">
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                    </ul>
                    <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Making <span class="absolute end-0 start-0 bottom-3 -rotate-6 h-2 w-auto rounded-md bg-indigo-600/20 relative text-indigo-600">everybody</span>
                        <br> feel valued at work
                    </h4>
                    <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                    <div class="mt-6">
                        <router-link to="#"><img :src="app" class="inline-block m-1" alt=""/></router-link>
                        <router-link to=""><img :src="playstore" class="inline-block m-1" alt=""></router-link>
                    </div>
                </div>

                <div class="relative">
                    <img :src="aboutImg" class="mx-auto" alt="">
                    <div class="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                    <div class="overflow-hidden"></div>
                    <span class="absolute h-10 w-10 bg-indigo-600/20 top-0 start-0 -z-1 rounded-lg animate-[spin_10s_linear_infinite]"></span>

                    <div class="absolute flex justify-between items-center top-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                        <div class="flex items-center">
                            <div class="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                <i data-feather="monitor" class="size-6"></i>
                            </div>
                            <div class="flex-1">
                                <h6 class="text-slate-400">Visitor</h6>
                                <p class="text-xl font-bold"><count-up class="counter-value" :start-val="2100" :end-val="4589"></count-up></p>
                            </div>
                        </div>

                        <span class="text-red-600"><i class="uil uil-chart-down"></i> 0.5%</span>
                    </div>

                    <div class="absolute bottom-1/2 translate-y-1/2 lg:-end-7 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
                        <h5 class="text-lg font-semibold mb-3">Manage Software</h5>
                        <div class="flex justify-between mt-3 mb-2">
                            <span class="text-slate-400">Progress</span>
                            <span class="text-slate-400">84%</span>
                        </div>
                        <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                            <div class="bg-indigo-600 h-[6px] rounded-full" style="width: 84%"></div>
                        </div>
                    </div>

                    <div class="absolute flex justify-between items-center bottom-16 md:start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-44 m-3">
                        <div class="flex items-center">
                            <img :src="user" class="size-14 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="">
                            <div class="flex-1">
                                <h6 class="text-lg font-semibold">Cristina</h6>
                                <p class="text-slate-400">Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative animate-[spin_30s_linear_infinite] -z-1">
                    <span class="absolute start-0 bottom-1/2 translate-y-1/2 h-2 w-8 rounded-md bg-indigo-600/20  z-10"></span>
                    <span class="absolute start-0 bottom-1/2 translate-y-1/2 rotate-90 h-2 w-8 rounded-md bg-indigo-600/20  z-10"></span>
                </div>
            </div>
        </div>
    </section>
    <div class="container relative">
        <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div v-for="image in images" :key="image" class="mx-auto py-4">
                <img :src="image" class="h-20" alt="">
            </div>
        </div>
    </div>
    <section class="relative overflow-hidden" >
        <StartUp />
        <NeedHelp />
        <PlanInFront />
        <Keyfeature />
    </section>
    <section class="relative md:mt-24 mt-16">
        <Users :Testimonial=true :users=true />
    </section>
    <MobileApp />
    <Footer />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import CountUp from 'vue-countup-v3';
import Navbar from '@/components/navbar/navbar.vue';
import Switcher from '@/components/switcher.vue';
import StartUp from '@/components/startup-journey.vue';
import NeedHelp from '@/components/need-help.vue';
import PlanInFront from '@/components/plan-in-front';
import Keyfeature from '@/components/features/app-key-features.vue';
import Users from '@/components/users.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer-transparent.vue';
import Cookies from '@/components/start-cookies.vue';

import image from '@/assets/images/client/9.png';
import image2 from '@/assets/images/client/10.png';
import image3 from '@/assets/images/client/11.png';
import image4 from '@/assets/images/client/12.png';
import image5 from '@/assets/images/client/13.png';
import image6 from '@/assets/images/client/14.png';

import app from '@/assets/images/app/app.png'
import playstore from '@/assets/images/app/playstore.png'
import aboutImg from '@/assets/images/app/classic02.png'
import user from '@/assets/images/client/05.jpg'

const images = [
  image,
  image2,
  image3,
  image4,
  image5,
  image6
];
</script>
