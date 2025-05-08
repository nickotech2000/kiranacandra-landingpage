<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />
    <section class="relative items-center overflow-hidden bg-indigo-600/5 dark:bg-indigo-600/10">
        <div class="container relative z-2">
            <div class="grid grid-cols-1 md:mt-44 mt-32 text-center">
                <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Solve Problem With on Integrated <br> Marketing Agency</h4>
                <p class="text-slate-400 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise  on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                <div class="mt-6">
                    <div class="subcribe-form mt-6 mb-3">
                        <form class="relative mx-auto max-w-xl">
                            <input type="email" id="subcribe" name="email"  class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800"  placeholder="Your Email Address :">
                            <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Get Started <i class="uil uil-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="md:flex justify-center mt-10">
                <div class="lg:w-1/2 md:w-2/3">
                    <img :src="hero" class="mx-auto" alt="">
                </div>
            </div>
        </div>
    </section>
    <div class="relative">
        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 marketing-hero md:h-[250px] sm:h-[140px] h-[60px] bg-white dark:bg-slate-900 overflow-hidden z-1 text-white dark:text-slate-900"></div>
    </div>

    <section class="py-6">
        <div class="container relative">
            <CompanyLogo />
        </div>
    </section>
    <section class="relative md:py-24 py-16">
        <Services />
        <Techwind />
    </section>
    <Pricing />
    <section class="relative md:mt-24 mt-16">
    <Users :users=true />
    </section>
    <MobileApp />
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import CompanyLogo from '@/components/company-logos.vue';
import Services from '@/components/landing-one/landing-services.vue';
import Techwind from '@/components/landing-one/landing-techwind-love.vue';
import Pricing from '@/components/landing-one/landing-pricing-plan.vue';
import Users from '@/components/users.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue'

import hero from '@/assets/images/illustrator/celebration.svg'
</script>
