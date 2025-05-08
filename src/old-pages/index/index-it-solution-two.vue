<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />
    <section
        class="relative table w-full py-36 lg:py-64 ltr:bg-[url('../../assets/images/it/bg.jpg')] rtl:bg-[url('../../assets/images/it/bg-rtl.jpg')] bg-no-repeat sm:bg-left bg-right overflow-hidden bg-cover">
        <div class="container relative z-1">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="md:col-span-7">
                    <div class="md:me-6">
                        <span class="text-xl font-semibold">IT Company</span>
                        <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-black dark:text-white">
                            <span class="after:absolute after:end-0 after:start-0 after:bottom-2 after:h-1.5 after:w-auto after:bg-gradient-to-l after:to-indigo-600 after:from-green-600 relative">Consultant</span> & <br> Find Bright <span class="after:absolute after:end-0 after:start-0 after:bottom-2 after:h-1.5 after:w-auto after:bg-gradient-to-l after:to-indigo-600 after:from-green-600 relative">Solutions</span>
                        </h4>
                        <p class="text-slate-400 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div class="mt-6">
                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</router-link>
                            <router-link to="" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white m-1 lightbox cursor-pointer"><i data-feather="video" class="size-4"></i></router-link><span class="font-semibold ms-1 align-middle"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute md:w-3/4 w-full top-1/2 -translate-y-1/2">
            <div class="absolute w-full h-[5000px] bg-slate-50 dark:bg-slate-800 md:opacity-100 opacity-90 top-1/2 -translate-y-1/2 md:-start-[10%] -start-[25%] ltr:rotate-12 rtl:-rotate-12"></div>
            <div class="absolute md:w-48 w-20 h-[5000px] bg-indigo-600 top-1/2 -translate-y-1/2 md:end-[10%] -end-[1%] ltr:rotate-12 rtl:-rotate-12"></div>
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

    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-2 grid-cols-1 pb-8 items-center">
                <div>
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                    <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mb-4 md:mb-0">It was a very common<br> question that What IT Service<br> We Provide now!</h3>
                </div>
                <p class="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
            </div>
            <WhatWeDo />
        </div>
        <FastEffect />
    </section>

    <Iframe :iframe=true />

    <Management />

    <Users :users=true />

    <section class="relative md:my-24 my-16">
        <Blogs />
    </section>

    <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div class="container relative">
          <Comapnylogo />
        </div>
    </section>

    <Footer :email=true />

    <Switcher />

    <Cookies />
</div>  
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import WhatWeDo from '@/components/what-we-do/what-we-do-it-solution.vue';
import FastEffect from '@/components/fast-effective.vue';
import Iframe from '@/components/it-solution-iframe.vue';
import Management from '@/components/management-it-solution.vue';
import Users from '@/components/users.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import Comapnylogo from '@/components/company-logos.vue';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>