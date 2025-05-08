<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 lg:py-56 bg-indigo-600 bg-[url('../../assets/images/bg.png')] bg-center bg-no-repeat bg-cover">
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h4 class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-6 position-relative">Powerfull analytics <br> tools for your business</h4>
                    <p class="text-white opacity-50 mb-0 max-w-xl text-lg mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                    <div class="relative mt-8">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-md">Get Started</router-link>
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
        <section class="relative md:py-24 py-16">
        <Feature />
        <WhoweAre :who=true />
        <Services />
        <Powerfull />
        <Analytics />
        </section>
        <Users :users=true :Testimonial=true />
        <section class="relative md:py-24 py-16">
        <GetFree />
        <Rates />
        </section>
        <Blogs />
        <section class="relative md:mt-24 mt-16">
            <Footer :email=true />
        </section>
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Feature from '@/components/landing-three/landing-feature.vue';
import WhoweAre from '@/components/startup/startup-experience.vue';
import Services from '@/components/landing-three/landing-services.vue';
import Powerfull from '@/components/powerful-digitalization.vue';
import Analytics from '@/components/analytics/marketing-analytics.vue';
import Users from '@/components/users.vue';
import GetFree from '@/components/get-free-trail.vue';
import Rates from '@/components/comfortable-rates.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue'
</script>