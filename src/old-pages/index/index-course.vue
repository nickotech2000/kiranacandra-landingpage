<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />
    <section class="relative table w-full py-36 lg:py-44 bg-indigo-600/5 overflow-hidden">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px] relative">
                <div class="md:col-span-7">
                    <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white"> Learn with <span class="text-indigo-600">Expert</span> <br> Anytime & Anywhere</h4>
                    <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                    <div class="mt-6">
                        <router-link to="#"><img :src="app" class="inline-block m-1" alt=""/></router-link>
                        <router-link to="#"><img :src="playstore" class="inline-block m-1" alt=""/></router-link>
                    </div>
                </div>

                <div class="md:col-span-5">
                    <div class="relative">
                        <img :src="hero" alt=""/>

                        <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                            <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden ">
                    <span class="absolute h-32 w-32 bg-red-600/5 top-10 start-0 -z-1 rounded-3xl animate-[spin_10s_linear_infinite]"></span>
                </div>
                <div class="overflow-hidden">
                    <span class="absolute size-[512px] bg-indigo-600/5 top-0 -end-5 -z-1 rounded-full"></span>
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

    <section class="py-6 border-b border-gray-100 dark:border-gray-800">
        <div class="container relative">
            <Companylogo />
        </div>
    </section>
    <section class="relative md:mt-24 mt-16 overflow-hidden">
    </section>
    <Features />
    <Experience :video=true />
    <Categories />
    <Populer />
    <Cta />
    <Users :Community=true />
    <Team :Instructor=true />
    <section class="relative md:mb-24 mb-16">
        <Blogs :blog=true />
    </section>
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Companylogo from '@/components/company-logos.vue';
import Features from '@/components/course/course-features.vue';
import Experience from '@/components/startup/startup-experience.vue';
import Categories from '@/components/course/course-categories.vue';
import Populer from '@/components/course/course-populer.vue';
import Cta from '@/components/course/course-cta.vue';
import Users from '@/components/ai/ai-users.vue';
import Team from '@/components/donate/donate-teams.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

import app from '@/assets/images/app/app.png'
import playstore from '@/assets/images/app/playstore.png'
import hero from '@/assets/images/course/hero.png'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>