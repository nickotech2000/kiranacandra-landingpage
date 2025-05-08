<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-12">
                    <h3 class="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Job Opening</h3>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/">Techwind</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/index-job">Job</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Job Opening</li>
                </ul>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <Jobsite />
        <div class="container relative md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Job Openings</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
            </div>

            <div class="lg:flex justify-center mt-8">
                <div class="lg:w-3/4">
                    <div v-for="item in openings" :key="item"
                        class="group md:flex items-center justify-between p-6 rounded-lg shadow-sm hover:shadow-lg dark:shadow-gray-700 duration-500 mt-6">
                        <div>
                            <router-link to="/page-job-detail" class="text-lg font-semibold hover:text-indigo-600">{{ item.name }}</router-link>
                            <p class="text-slate-400 mt-1">{{ item.open}}</p>
                        </div>

                        <router-link to="/page-job-detail" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full md:mt-0 mt-4">Apply now</router-link>
                    </div>
                </div>
            </div>
        </div>
        <MobileApp />
        <Footers />
        <Switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Jobsite from '@/components/job/job-site.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footers from '@/components/footer/footer-job.vue';
import Switcher from '@/components/switcher.vue'
const openings = [
    {
        name: 'Frontend Developer',
        open: 'Total Openings: 1'
    },
    {
        name: 'Business Development Manager',
        open: 'Total Openings: 2'
    },
    {
        name: 'Backend Developer',
        open: 'Total Openings: 3'
    },
]
</script>
