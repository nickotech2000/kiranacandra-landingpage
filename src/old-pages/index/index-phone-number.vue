<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />
    <section class="relative table w-full py-36 lg:py-44 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="md:col-span-7 md:order-2 order-1">
                    <div class="ms-6">
                        <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Stand Out With a Custom <span class="text-indigo-600">Phone Number</span></h4>
                        <p class="text-slate-400 text-lg max-w-xl">Techwind is the largest provider of custom phone numbers since 2020</p>
                        <div class="subcribe-form mt-6">
                            <form class="relative max-w-xl">
                                <input type="text" id="SearchForumKeyword" name="text" class="pt-4 ltr:pr-14 rtl:pl-14 pb-4 ltr:pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Search Number :">
                                <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center absolute top-[2px] ltr:right-[3px] rtl:left-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i class="uil uil-search"></i> Find Number</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-5 md:order-1 order-2">
                    <img :src="heroImg" alt="">
                </div>
            </div>
        </div>

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                    <router-link to="/">Techwind</router-link></li>
                <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Phone Number</li>
            </ul>
        </div>
    </section>
    <div class="relative">
        <div  class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <section class="relative md:py-24 py-16">
        <Custom />
        <Number />
        <Update />
    </section>
    <Footer :email=true />
    <Switcher />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Custom from '@/components/phone-number/custom-number.vue';
import Number from '@/components/phone-number/select-number.vue';
import Update from '@/components/phone-number/update-offers.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'
import heroImg from '@/assets/images/illustrator/development.svg'
</script>
