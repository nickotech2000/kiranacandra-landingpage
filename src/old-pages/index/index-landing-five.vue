<template>
<div>
    <Navbar />
    <section class="relative overflow-hidden py-40 lg:h-screen flex justify-center items-center bg-indigo-600/10" id="home">
        <div class="container relative">
            <div class="grid lg:grid-cols-12 md:grid-cols-2 gap-[30px] mt-10 items-center">
                <div class="lg:col-span-7">
                    <div class="md:text-start text-center">
                        <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Resources for
                            <span class="text-indigo-600">makers &</span> <br> <span class="text-indigo-600">Creative</span> to learn & grow
                        </h1>
                        <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise  on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                        <div class="subcribe-form mt-6 mb-3">
                            <form class="relative max-w-lg">
                                <input type="email" id="subcribe" name="email" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Your Email Address :">
                                <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free <i class="uil uil-arrow-right"></i></button>
                            </form>
                        </div>

                        <span class="text-slate-400 font-medium">Looking for help? <a href="" class="text-indigo-600">Get in touch with us</a></span>
                    </div>
                </div>

                <div class="lg:col-span-5">
                    <div class="relative">
                        <div class="relative">
                            <img :src="avtar" class="lg:w-[400px] w-[280px] rounded-lg shadow-sm dark:shadow-gray-800" alt="">
                            <div class="absolute top-0 translate-y-2/4 end-0 text-center">
                                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </router-link>
                            </div>
                        </div>
                        <div class="absolute -end-5 -bottom-16">
                            <img :src="about" class="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-lg shadow-sm dark:shadow-gray-800" alt="">
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

    <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700"  id="home">
        <div class="container relative">
            <Companylogo />
        </div>
    </section>
    <section class="relative md:mt-24 mt-16" id="features">
        <Feature />
        <Expert />
        <Keyfeatures />
        <Cta />
    </section>
    <section class="relative md:py-24 py-16 active" id="pricing">
        <Rates />
    </section>
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="team">
        <Teams />
    </section>
    <section class="relative md:my-24 my-16" id="review">
        <Users :users=true />
    </section>
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="blog">
        <Blogs />
    </section>
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar-onepage.vue';
import Companylogo from '@/components/company-logos.vue';
import Feature from '@/components/landing-four/landing-four-feature.vue';
import Expert from '@/components/corporate/corporate-expert.vue';
import Keyfeatures from '@/components/features/key-features.vue';
import Cta from '@/components/corporate/corporate-cta.vue';
import Rates from '@/components/comfortable-rates.vue';
import Teams from '@/components/law/law-teams.vue';
import Users from '@/components/users.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

import avtar from '@/assets/images/avatar.jpg'
import about from '@/assets/images/law/ab2.jpg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};

const screenTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  screenTop();
});
</script>