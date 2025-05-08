<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Job Listings</h3>

                    <ul class="tracking-[0.5px] mb-0 inline-block">
                        <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                            <router-link to="/">Techwind</router-link>
                        </li>
                        <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                        <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                            <router-link to="/index-job">Job</router-link>
                        </li>
                        <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                        <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">All Jobs</li>
                    </ul>
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

        <section class="relative md:mb-24 mb-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                    <div class="lg:col-start-2 lg:col-span-10">
                        <div class="bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded p-3 -mt-[150px]">
                            <form>
                                <div class="registration-form relative text-dark text-start">
                                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                        <div class="filter-search-form relative">
                                            <i class="uil uil-briefcase-alt absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <input name="name" type="text" id="job-keyword" class="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Search your keaywords">
                                        </div>

                                        <div class="filter-search-form relative bg-gray-50 dark:bg-slate-800">
                                            <i class="uil uil-map-marker absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <v-select :options="options" v-model="selected" class="ms-10"></v-select>
                                        </div>

                                        <div class="filter-search-form relative bg-gray-50 dark:bg-slate-800">
                                            <i class="uil uil-briefcase-alt absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <v-select :options="options2" v-model="selected2" class="ms-10"></v-select>
                                        </div>

                                        <input type="submit" id="search" name="search" style="height: 60px;" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn lg:rounded-t-none lg:rounded-e-sm lg:rounded-b-sm lg:rounded-s-none rounded-lg w-full" value="Search">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container relative">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <div v-for="job in jobs" :key="job.id" @click="viewBlogDetail.id" class="rounded-md shadow-sm dark:shadow-gray-800">
                    <div class="p-6">
                        <router-link :to="`/page-job-detail/${job.id}`" class="title h5 text-lg font-semibold hover:text-indigo-600">{{job.name }}</router-link>
                        <p class="text-slate-400 mt-2"><i class="uil uil-clock text-indigo-600"></i> {{ job.day }}</p>

                        <div class="flex justify-between items-center mt-4">
                            <span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">{{job.time }}</span>

                            <p class="text-slate-400"><i class="uil uil-usd-circle text-indigo-600"></i> {{ job.salary }}</p>
                        </div>
                    </div>

                    <div class="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                        <img :src="job.image" class="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="">

                        <div class="ms-3">
                            <h6 class="mb-0 font-semibold text-base">{{ job.company }}</h6>
                            <span class="text-slate-400 text-sm">{{ job.location}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
        <MobileApp />
        <Footers :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import Pagination from '@/components/shop/shop-pagination.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footers from '@/components/footer/footer-job.vue';
import Switcher from '@/components/switcher.vue';
import client1 from '@/assets/images/client/facebook-logo-2019.png'
import client2 from '@/assets/images/client/google-logo.png'
import client3 from '@/assets/images/client/linkedin.png'
import client4 from '@/assets/images/client/skype.png'
import client5 from '@/assets/images/client/spotify.png'
import client6 from '@/assets/images/client/telegram.png'
import client7 from '@/assets/images/client/circle-logo.png'
import client8 from '@/assets/images/client/lenovo-logo.png'
import client9 from '@/assets/images/client/shree-logo.png'
import client10 from '@/assets/images/client/snapchat.png'
import client11 from '@/assets/images/client/android.png'
import client12 from '@/assets/images/client/shree-logo.png'

const options = ref(['Afghanistan', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Canada', 'Cape Verde', 'Denmark', 'Djibouti', 'Eritrea', 'Estonia', 'Gambia']);
const selected = ref('Afghanistan');

const options2 = ref(['Full Time', 'Part Time', 'Freelancer', 'Remote Work', 'Office Work']);
const selected2 = ref('Full Time');

const jobs = ref([
  { id: 1, name: 'Software Engineering', day: 'Posted 3 Days ago', time: 'Full Time', salary: '$950 - $1100/mo', image: client1, company: 'Facebook Ltd.', location: 'Australia' },
  { id: 2, name: 'Web Developer', day: 'Posted 3 Days ago', time: 'Remote', salary: '$2500 - $2600/mo', image: client2, company: 'Google Ltd.', location: 'America' },
  { id: 3, name: 'UX/UI Designer', day: 'Posted 3 Days ago', time: 'Freelance', salary: '$3500 - $3600/mo', image: client3, company: 'Linkedin Ltd.', location: 'Canada' },
  { id: 4, name: 'Human Resource(HR)', day: 'Posted 3 Days ago', time: 'Part Time', salary: '$2000 - $2500/mo', image: client4, company: 'Skype Ltd.', location: 'UK' },
  { id: 5, name: 'Web Designer', day: 'Posted 3 Days ago', time: 'Full Time', salary: '$1500 - $1600/mo', image: client5, company: 'Spotify Ltd.', location: 'China' },
  { id: 6, name: 'Graphic Designer', day: 'Posted 3 Days ago', time: 'Part time', salary: '$500 - $600/mo', image: client6, company: 'Telegram Ltd.', location: 'India' },
  { id: 7, name: 'Senior Web Developer', day: 'Posted 3 Days ago', time: 'Full Time', salary: '$950 - $1100/mo', image: client7, company: 'Circle CI Ltd.', location: 'Australia' },
  { id: 8, name: 'Front-End Developer', day: 'Posted 3 Days ago', time: 'Remote', salary: '$2500 - $2600/mo', image: client8, company: 'Lenovo Ltd.', location: 'America' },
  { id: 9, name: 'Back-End Developer', day: 'Posted 3 Days ago', time: 'Freelance', salary: '$3500 - $3600/mo', image: client9, company: 'Shreethemes Ltd.', location: 'Canada' },
  { id: 10, name: 'Data Entry', day: 'Posted 3 Days ago', time: 'Part Time', salary: '$2000 - $2500/mo', image: client10, company: 'Snapchat Ltd.', location: 'UK' },
  { id: 11, name: 'Android Developer', day: 'Posted 3 Days ago', time: 'Full Time', salary: '$1500 - $1600/mo', image: client11, company: 'Android Ltd.', location: 'China' },
  { id: 12, name: 'Sketch Designer', day: 'Posted 3 Days ago', time: 'Part time', salary: '$500 - $600/mo', image: client12, company: 'Shreethemes Ltd.', location: 'India' },
]);
</script>


