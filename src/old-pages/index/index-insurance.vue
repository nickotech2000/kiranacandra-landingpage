<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />

    <section class="relative table w-full md:py-44 py-36 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="md:col-span-7">
                    <div class="md:me-6">
                        <div class="bg-white dark:bg-slate-900 text-slate-400 py-2 px-4 inline-flex items-center font-medium rounded-full shadow-sm dark:shadow-gray-800">
                            <span class="bg-indigo-600 text-white text-[12px] font-bold px-2.5 py-0 rounded-full me-2">Techwind</span> Get an insurance
                        </div>
                        <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-4">Insurance makes <br> your life your better</h4>
                        <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                        <div class="mt-6">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Request a Quote</router-link>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-5">
                    <div class="relative">
                        <img :src="hero" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                        <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                            <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </router-link>
                        </div>
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

    <Insurance />
    <Packages />
    <section class="relative md:py-24 py-16">
        <Needs />
        <Management />
    </section>
    <Switcher />
    <Users />
    <section class="md:py-24 py-16">
        <Blogs :blog=true />
        <Signup />
    </section>
    <Footer :email=true />
    <Cookies />
</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Insurance from '@/components/insurance/right-insurance.vue';
import Packages from '@/components/insurance/insurance-packages.vue';
import Needs from '@/components/insurance/insurance-needs.vue';
import Management from '@/components/insurance/insurance-management.vue';
import Users from '@/components/insurance/insurance-users.vue';
import Switcher from '@/components/switcher.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Signup from '@/components/insurance/insurance-signup.vue';
import Footer from '@/components/footer/footer.vue';
import Cookies from '@/components/start-cookies.vue';

import hero from '@/assets/images/insurance/hero.png'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>