<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 md:py-56 md:pb-0 overflow-hidden bg-[url('../../assets/images/app/bg.png')] bg-top bg-no-repeat bg-fixed bg-cover">
        <div class="absolute inset-0 bg-indigo-600 opacity-80"></div>
        <div class="container relative z-2">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="lg:col-span-8 md:col-span-7 md:mb-16">
                    <div class="md:me-6">
                        <h4 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Make  Faster, <br> More Confident <br> Decision</h4>
                        <p class="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                        <div class="mt-6">
                            <router-link to="#"><img :src="app" class="inline-block m-1" alt=""/></router-link>
                            <router-link to="#"><img :src="playstore" class="inline-block m-1" alt=""/></router-link>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 md:col-span-5 md:mt-0">
                    <div class="relative">
                        <span class="absolute h-40 w-40 bg-indigo-600 bottom-0 end-0  -z-0 rounded-3xl animate-[spin_10s_linear_infinite]"></span>
                        <img :src="about" class="relative z-1" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="relative">
        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <section class="relative md:py-24 py-16 overflow-hidden">
        <WhatWeDo />
        <PerformingApp />
        <AppFeatures />
    </section>
    <Users :Testimonial=true :users=true />
    <MobileApp />
    <div class="relative">
        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-slate-900 dark:text-slate-800">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <Footer  :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import WhatWeDo from '@/components/what-we-do/what-we-do.vue';
import PerformingApp from '@/components/performing-application.vue';
import AppFeatures from '@/components/features/app-key-features.vue';
import Users from '@/components/users.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import app from '@/assets/images/app/app.png'
import playstore from '@/assets/images/app/playstore.png'
import about from '@/assets/images/app/1.png'
</script>