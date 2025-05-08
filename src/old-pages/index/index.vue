<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />
        <section class="relative table w-full py-36 lg:py-44">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="md:col-span-7">
                        <div class="me-6">
                            <h4 class="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white"> Our Creativity Is Your <span class="text-indigo-600">Success</span></h4>
                            <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                            <div class="mt-6">
                                <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i class="uil uil-envelope"></i> Get Started</router-link>
                                <router-link to="/documentation" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2"><i class="uil uil-book-alt"></i> Documentation</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-5">
                        <img :src="heroImg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div class="container relative">
            <CompanyLogos />
            </div>
        </section>
        <HowItWork />
        <section class="relative md:py-24 py-16">
            <Partners />
            <ComfortableRate :rates=true />
        </section>
        <Services />
        <Footer :email=true />
        <Cookies />
        <Switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import HowItWork from '@/components/how-it-work/how-it-work.vue';
import Partners from '@/components/partners.vue';
import ComfortableRate from '@/components/comfortable-rates.vue';
import Services from '@/components/services.vue';
import Footer from '@/components/footer/footer.vue';
import Cookies from '@/components/start-cookies.vue';
import Switcher from '@/components/switcher.vue'
import CompanyLogos from '@/components/company-logos.vue';
import heroImg from '@/assets/images/illustrator/Startup_SVG.svg'
</script>
