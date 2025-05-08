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
                <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group relative p-6 rounded-md shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 duration-500 text-center">
                        <div class="mt-8">
                            <img :src="item.image" class="rounded-full shadow-md size-20 mx-auto block" alt="">

                            <div class="mt-3">
                                <router-link to="/page-job-candidate-detail" class="text-lg font-medium hover:text-indigo-600 duration-500 block">{{ item.name }}</router-link>
                                <span class="block text-sm text-slate-400">{{ item.title }}</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-around my-4">
                            <span class="text-slate-400"><i class="uil uil-map-marker text-indigo-600 me-1"></i>{{ item.location }}</span>
                            <span class="text-slate-400"><i class="uil uil-dollar-sign text-indigo-600 me-1"></i>{{item.salary }}</span>
                        </div>

                        <router-link to="#" v-for="language in item.language" :key="language" href="" class="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1">{{ language }}</router-link>
                        <div class="mt-4">
                            <router-link to="/page-job-candidate-detail" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full">View Profile</router-link>
                        </div>

                        <div class="absolute top-6 start-6">
                            <span class="bg-indigo-600/5 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full h-[28px]">{{item.status }}</span>
                        </div>
                        <div class="absolute top-6 end-6">
                            <router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border border-gray-200 hover:border-gray-100 dark:border-gray-800 dark:hover:border-gray-700 rounded-full"><i class="uil uil-bookmark"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-50 dark:bg-slate-800">
            <Mobileapp />
        </section>
        <Footers />
        <Switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Mobileapp from '@/components/mobile-app.vue';
import Footers from '@/components/footer/footer-job.vue';
import Switcher from '@/components/switcher.vue';
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'
import client7 from '@/assets/images/client/07.jpg'
import client8 from '@/assets/images/client/08.jpg'

const datas = [
    {
        image: client1,
        name: 'Calvin Carlo',
        title: 'Web Designer',
        location: 'London',
        salary: '3300/mo',
        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
        status: 'Featured'
    },
    {
        image: client2,
        name: 'Calvin Carlo',
        title: 'Web Designer',
        location: 'London',
        salary: '3300/mo',
        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
        status: 'Featured'
    },
    {
        image: client3,
        name: 'Calvin Carlo',
        title: 'Web Designer',
        location: 'London',
        salary: '3300/mo',
        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
        status: 'Featured'
    },
    {
        image: client4,
        name: 'Calvin Carlo',
        title: 'Web Designer',
        location: 'London',
        salary: '3300/mo',
        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
        status: 'Featured'
    },
    {
        image: client5,
        name: 'Calvin Carlo',
        title: 'Web Designer',
        location: 'London',
        salary: '3300/mo',
        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
        status: 'Featured'
    },
    {
        image: client6,
        name: 'Calvin Carlo',
        title: 'Web Designer',
        location: 'London',
        salary: '3300/mo',
        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
        status: 'Featured'
    },
    {
        image: client7,
        name: 'Calvin Carlo',
        title: 'Web Designer',
        location: 'London',
        salary: '3300/mo',
        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
        status: 'Featured'
    },
    {
        image: client8,
        name: 'Calvin Carlo',
        title: 'Web Designer',
        location: 'London',
        salary: '3300/mo',
        language: ['PHP', 'HTML', 'CSS', 'WordPress'],
        status: 'Featured'
    },
]
</script>
