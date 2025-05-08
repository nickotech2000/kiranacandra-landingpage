<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-indigo-600 bg-[url('../../assets/images/bg2.png')] bg-center bg-no-repeat bg-cover">
        <div class="container relative">
            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div class="lg:col-span-7">
                    <div class="md:me-6 md:mb-20">
                        <h5 class="text-lg text-white/60">We are creative</h5>
                        <h4 class="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Best IT Solution <br> Company</h4>
                        <p class="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                        <div class="mt-6">
                            <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-md me-2 mt-2"><i class="uil uil-envelope"></i> Get Started</router-link>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5">
                    <img :src="heroImg" alt="">
                </div>
            </div>
        </div>
    </section>
    <div class="relative">
        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <section class="py-6 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <Companylogos />
        </div>
    </section>
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we do ?</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
            </div>
            <WhatWeDo />
        </div>
    </section>

    <WhoWeAre />
    <Powerfull :powerfull=true />
    <Iframe />
    <Users :users=true />
    <section class="relative md:my-24 my-16">
        <Blogs />
    </section>
    <Footer :email=true />
    <Cookies />
    <Switcher />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Companylogos from '@/components/company-logos.vue';
import WhatWeDo from '@/components/what-we-do/what-we-do-it-solution.vue';
import WhoWeAre from '@/components/it-solution-experience.vue';
import Powerfull from '@/components/powerful-digitalization.vue';
import Iframe from '@/components/it-solution-iframe.vue';
import Users from '@/components/users.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Cookies from '@/components/start-cookies.vue';
import Switcher from '@/components/switcher.vue';

import heroImg from '@/assets/images/hero1.png'
</script>