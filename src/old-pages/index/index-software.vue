<template>
    <div>
        <Navbar :navLight="'nav-light !justify-end'" />
        <section class="relative md:h-screen md:py-0 py-36 items-center overflow-hidden bg-indigo-600 bg-[url('../../assets/images/bg3.png')] bg-center bg-no-repeat bg-cover">
            <div class="container relative">
                <div class="grid grid-cols-1 md:mt-36 mt-10 text-center">
                    <h4 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Integrated Techwind <span class="text-orange-500">Software <br> & Saas</span> Plateform </h4>
                    <p class="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                    <div class="subcribe-form mt-6 mb-3">
                        <form class="relative max-w-xl mx-auto">
                            <input type="email" id="subcribe" name="email" class="form-input border-0 py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Your Email Address :">
                            <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-full">Try it for free <i class="uil uil-arrow-right"></i></button>
                        </form>
                    </div>

                    <span class="text-slate-400 font-medium">Looking for help? <a href="" class="text-orange-500">Get in touch with us</a></span>

                    <div class="overflow-hidden mt-8">
                        <img :src="heroImg" alt="">
                    </div>

                    <div class="overflow-hidden"></div>
                    <span class="absolute h-14 w-14 bg-white/20 -top-[40px] start-[30%] rounded-lg animate-[spin_10s_linear_infinite]"></span>

                    <div class="overflow-hidden">
                        <span class="absolute h-10 w-10 bg-white/20 top-[30%] end-[20%] rounded-full animate-ping"></span>
                    </div>
                </div>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div class="container relative">
                <CompanyLogo />
            </div>
        </section>
        <section class="relative overflow-hidden" >
            <HowItWork />   
            <Analytics />
            <Client :width="'lg:w-1/3'" />
            <Pricing />
            <AskedQuestions />
            <MobileApp />
        </section>
        <Footer :email=true />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import CompanyLogo from '@/components/company-logos.vue';
import HowItWork from '@/components/how-it-work/how-it-work-software.vue';
import Analytics from '@/components/analytics/software-analytics.vue';
import Client from '@/components/software-client.vue';
import Pricing from '@/components/software-pricing-plans.vue';
import AskedQuestions from '@/components/asked-questions/software-questions.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import heroImg from '@/assets/images/saas/home.png'
</script>
