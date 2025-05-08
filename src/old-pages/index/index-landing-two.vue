<template>
    <div>
    <Navbar :navLight="'nav-light'" />
        <section class="py-36 md:py-64 w-full table relative bg-[url('../../assets/images/bg-video.png')] bg-center bg-no-repeat bg-cover">
            <div class="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <iframe src="https://player.vimeo.com/video/33955001?background=1&autoplay=1&loop=1&byline=0&title=0" class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
            </div>
            <div class="absolute inset-0 bg-slate-900/80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <img src="assets/images/logo-icon-64.png" class="mx-auto" alt="">
                    <h4 class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium my-6 position-relative">We Collaboration Easy & Fast</h4>
                
                    <p class="text-white opacity-50 mb-0 max-w-xl text-lg mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                
                    <div class="relative mt-8">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</router-link>
                    </div>
                </div>
            </div>
        </section>
        <div class="relative">
            <div class="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <router-link to="#"><i class="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800"></i></router-link>
            </div>

            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section class="relative md:py-24 py-16">
            <Business />
            <Services :services=true />
            <Cta />
            <Portfolio />
        </section>          
            <Users :users=true />
            <section class="relative md:mt-24 mt-16">
        <Blogs :blog=true />
        </section>
        <GetInTouch />
        <Footer :email=true />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Business from '@/components/business/business-export.vue';
import Services from '@/components/personal/personal-services.vue';
import Cta from '@/components/it-solution-iframe.vue';
import Portfolio from '@/components/personal/personal-portfolio.vue';
import Users from '@/components/users.vue';
import Blogs from '@/components/blogs/blogs.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue'
</script>