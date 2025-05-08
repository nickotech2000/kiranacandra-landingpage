<template>
    <div>
        <Navbar :lightlogo=true loginButton=true />
        <section class="md:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden">
            <span class="absolute -z-1 sm:-bottom-80 -bottom-40 start-0 end-36 mx-auto rounded-full bg-indigo-600 sm:size-[50rem] size-[30rem]"></span>
            <div class="absolute inset-0 bg-[url('../../assets/images/personal/hero-overlay.png')] " data-jarallax data-speed="0.5" ></div>

            <div class="container relative z-1">
                <div class="grid grid-cols-1 mt-5">
                    <div class="title-heading">
                        <div class="grid md:grid-cols-12 mt-12">
                            <div class="lg:col-span-4 md:col-span-6 order-2 lg:order-1 mt-6 md:mt-0 relative">
                                <div class="rounded-md lg:shadow-md lg:dark:shadow-gray-800 lg:absolute lg:top-14 lg:bg-white lg:dark:bg-slate-900 lg:p-6">
                                    <h5 class="mb-3 text-2xl font-bold lg:text-black lg:dark:text-white text-white">I'm Professional Web Developer</h5>
                                    <p class="para-desc lg:text-slate-400 text-slate-200 dark:text-slate-200 mb-0">Obviously I'm a Web Designer. Web Developer with over 3 years of experience.</p>

                                    <div class="mt-4">
                                        <a href="#portfolio" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Hire me</a>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-4 lg:block hidden lg:order-2"></div>

                            <div class="lg:col-span-4 md:col-span-6 order-1 lg:order-3">
                                <h4 class="lg:text-[64px] lg:leading-[1.1] text-[40px] font-bold lg:text-black lg:dark:text-white text-white mb-0">John <br> S<vue-typewriter-effect class="typewrite" data-period="2000" :strings='["tradford!"]' /></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute inset-0 bg-gradient-to-b lg:from-indigo-600/5 lg:to-indigo-600/20 from-indigo-600/10 to-indigo-600 lg:-z-2"></div>
            <ul class="circles absolute inset-0 h-full w-full overflow-hidden p-0 mb-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
        <div class="relative">
            <div class="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <a href="#about"><i class="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800"></i></a>
            </div>

            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section class="pt-12">
            <div class="container relative">
                <Companylogo />
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <Aboutus />
            <Services :services=true />
        </section>
        <Experience />
        <Project />
        <Portfolio />
        <section class="relavite md:mt-24 mt-16" >
            <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2 text-center">Blogs</h6>
            <Blogs :blog=true  />
        </section>
        <GetInTouch />
        <Footer :email=true />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import {onMounted} from 'vue'

import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.min.css';
import Navbar from '@/components/navbar/navbar.vue';
import Companylogo from '@/components/company-logos.vue';
import Aboutus from '@/components/personal/personal-about.vue';
import Services from '@/components/personal/personal-services.vue';
import Experience from '@/components/personal/work-experience.vue';
import Project from '@/components/personal/personal-project.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
import Portfolio from '@/components/personal/personal-portfolio.vue';
import Blogs from '@/components/blogs/blogs.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';


onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
});
</script>