<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />
        <section class="relative md:pt-44 py-36 bg-slate-50 dark:bg-slate-800" id="home">
            <div class="container relative">
                <div class="grid grid-cols-1 justify-center text-center">
                    <div class="">
                        <h1 class="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize mb-5">Qualified Business Consultancy</h1>
                        <p class="text-slate-400 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                    
                        <div class="subcribe-form mt-6 mb-3">
                            <form class="relative max-w-xl mx-auto">
                                <input type="email" id="emailid" name="email" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow-sm dark:shadow-gray-800" placeholder="yourname@domain.com">
                                <button type="submit" class="absolute top-[2px] end-[3px] h-[46px] py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subscribe Now</button>
                            </form>
                        </div>

                        <span class="font-medium">Looking for help? <router-link to="#" class="text-indigo-600">Get in touch with us</router-link></span>
                    </div>

                    <div class="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 mx-auto mt-8 items-center">
                        <div class="lg:col-span-4">
                            <div class="grid grid-cols-2 gap-4 items-center">
                                <div class="">
                                    <div class="grid grid-cols-1 gap-4">
                                        <img :src="cowork1" class="shadow-sm rounded-lg" alt=""/>
                                    </div>
                                </div>
    
                                <div class="">
                                    <div class="grid grid-cols-1 gap-4">
                                        <img :src="cowork10" class="shadow-sm rounded-lg" alt=""/>
                                        <img :src="cowork2" class="shadow-sm rounded-lg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-4">
                            <img :src="bg" class="shadow-sm rounded-lg" alt=""/>
                        </div>

                        <div class="lg:col-span-4">
                            <div class="grid grid-cols-2 gap-4 items-center">
                                <div class="">
                                    <div class="grid grid-cols-1 gap-4">
                                        <img :src="cowork4" class="shadow-sm rounded-lg" alt=""/>
                                        <img :src="cowork9" class="shadow-sm rounded-lg" alt=""/>
                                    </div>
                                </div>
    
                                <div class="">
                                    <div class="grid grid-cols-1 gap-4">
                                        <img :src="cowork5" class="shadow-sm rounded-lg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section class="py-6 border-b border-gray-100 dark:border-gray-700">
            <div class="container relative">
              <Companylogo />
            </div>
            </section>
            <section class="relative md:py-24 py-16">
                <Experience />
            </section>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we do ?</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>
                <Feature />
            </div>
            <section class="relative md:py-24 py-16">
            <Cta />
            <Comfortable />
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
import Companylogo from '@/components/company-logos.vue';
import Experience from '@/components/it-solution-experience.vue';
import Feature from '@/components/what-we-do/what-we-do-it-solution.vue';
import Cta from '@/components/corporate/corporate-cta.vue';
import Comfortable from '@/components/comfortable-rates.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue'
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue'

import cowork1 from '@/assets/images/cowork/1.jpg'
import cowork2 from '@/assets/images/cowork/2.jpg'
import cowork4 from '@/assets/images/cowork/4.jpg'
import cowork5 from '@/assets/images/cowork/5.jpg'
import cowork9 from '@/assets/images/cowork/9.jpg'
import cowork10 from '@/assets/images/cowork/10.jpg'
import bg from '@/assets/images/business/bg02.jpg'
</script>