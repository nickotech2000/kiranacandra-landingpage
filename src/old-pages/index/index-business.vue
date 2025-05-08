<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="swiper-slider-hero relative block h-screen" id="home">
        <div class="swiper-container absolute end-0 top-0 w-full h-full">
            <swiper class="swiper-wrapper" :modules="modules" :autoplay="true" :pagination="{ type: 'fraction', }">
                <swiper-slide class="swiper-slide flex items-center overflow-hidden h-screen">
                    <div class="image-wrap absolute inset-0 -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto z-1 bg-[url('../../assets/images/business/bg01.jpg')] bg-top bg-no-repeat bg-cover"></div>
                    <div class="absolute inset-0 ltr:md:bg-gradient-to-r rtl:md:bg-gradient-to-l md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                    <div class="container relative z-3 h-full flex items-center">
                        <div class="grid grid-cols-1 mt-10">
                            <div class="md:text-start text-center">
                                <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Take Care of Your Future</h1>
                                <p class="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                                <div class="mt-8">
                                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide class="swiper-slide flex items-center overflow-hidden h-screen">
                    <div class="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/business/bg02.jpg')] bg-top bg-no-repeat bg-cover"></div>
                    <div class="absolute inset-0 md:bg-gradient-to-b md:from-transparent md:to-black md:bg-black/20 bg-black/70 z-2"></div>
                    <div class="container relative z-3 h-full flex items-center justify-center">
                        <div class="grid grid-cols-1 mt-10">
                            <div class="text-center">
                                <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Let's Start With Techwind</h1>
                                <p class="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                                <div class="mt-8">
                                    <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">See Services</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div class="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/business/bg03.jpg')] bg-top bg-no-repeat bg-cover"></div>
                    <div class="absolute inset-0 ltr:md:bg-gradient-to-l rtl:md:bg-gradient-to-r md:from-black md:via-black/80 md:bg-black/20 bg-black/70 z-2"></div>
                    <div class="container relative z-3 h-full flex items-center justify-end">
                        <div class="grid grid-cols-1 mt-10">
                            <div class="md:text-end text-center">
                                <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Build and Grow Your Business</h1>
                                <p class="text-white/70 text-lg max-w-xl md:ms-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                                <div class="mt-8">
                                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Pricing Plans</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
    <section class="relative py-8 bg-indigo-600">
        <div class="container relative">
            <Companylogo />
        </div>
    </section>
    <section class="relative md:py-24 py-16">
        <Business />
        <WhoWeAre />
        <Solutions />
        <Pricing />
    </section>
    <Users :users=true />
    <section class="relative md:py-24 py-16">
     <Blogs />
     </section>
     <Footer :email=true />
     <Switcher />
     <Cookies />
</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Navbar from '@/components/navbar/navbar.vue';
import Companylogo from '@/components/company-logos.vue';
import Business from '@/components/business/business-export.vue';
import WhoWeAre from '@/components/business/who-we-are.vue';
import Solutions from '@/components/it-solution-iframe.vue';
import Pricing from '@/components/business/business-pricing.vue';
import Users from '@/components/users.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

const modules = [Navigation, Autoplay, Pagination];
</script>