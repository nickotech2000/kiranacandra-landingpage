<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-12">
                    <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Company List</h3>
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
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Companies</li>
                </ul>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-gray-50 dark:text-slate-800">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section class="relative md:pt-24 pt-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    <router-link v-for="item in datas" :key="item" to="/page-job-company-detail"
                        class="group bg-white dark:bg-slate-900 p-6 rounded shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 border-4 border-white dark:border-slate-900 hover:border-b-indigo-600 dark:hover:border-b-indigo-600 text-center duration-500 ease-in-out">
                        <img :src="item.image" class="size-16 mx-auto p-3 rounded-full bg-gray-50 dark:bg-slate-800 shadow-md dark:shadow-gray-800" alt="">

                        <div class="content mt-3">
                            <span class="text-lg font-semibold group-hover:text-indigo-600 duration-500 block">{{ item.name }}</span>
                            <span class="text-base text-slate-400 block"><i class="uil uil-map-marker text-indigo-600 me-1"></i> {{ item.country }}</span>
                        </div>
                    </router-link>

                </div>
            </div>
            <Mobileapp />
        </section>
        <Switcher />
        <Footer />
    </div>
</template>

<script setup>

import Navbar from '@/components/navbar/navbar.vue';
import Mobileapp from '@/components/mobile-app.vue';
import Switcher from '@/components/switcher.vue';
import Footer from '@/components/footer/footer-job.vue'

import client1 from '@/assets/images/client/circle-logo.png'
import client2 from '@/assets/images/client/android.png'
import client3 from '@/assets/images/client/facebook-logo-2019.png'
import client4 from '@/assets/images/client/google-logo.png'
import client5 from '@/assets/images/client/lenovo-logo.png'
import client6 from '@/assets/images/client/linkedin.png'
import client7 from '@/assets/images/client/shree-logo.png'
import client8 from '@/assets/images/client/skype.png'
import client9 from '@/assets/images/client/snapchat.png'
import client10 from '@/assets/images/client/spotify.png'
import client11 from '@/assets/images/client/telegram.png'
import client12 from '@/assets/images/client/whatsapp.png'

const datas = [
    {
        image: client1,
        name: 'CircleCI',
        country: 'U.S.A.'
    },
    {
        image: client2,
        name: 'Android',
        country: 'U.S.A.'
    },
    {
        image: client3,
        name: 'Facebook',
        country: 'U.S.A.'
    },
    {
        image: client4,
        name: 'Google',
        country: 'U.S.A.'
    },
    {
        image: client5,
        name: 'Lenovo',
        country: 'U.S.A.'
    },
    {
        image: client6,
        name: 'Linkedin',
        country: 'U.S.A.'
    },
    {
        image: client7,
        name: 'Shreethemes',
        country: 'U.S.A.'
    },
    {
        image: client8,
        name: 'Skype',
        country: 'U.S.A.'
    },
    {
        image: client9,
        name: 'Snapchat',
        country: 'U.S.A.'
    },
    {
        image: client10,
        name: 'Spotify',
        country: 'U.S.A.'
    },
    {
        image: client11,
        name: 'Telegram',
        country: 'U.S.A.'
    },
    {
        image: client12,
        name: 'Whatsapp',
        country: 'U.S.A.'
    },
]

</script>
