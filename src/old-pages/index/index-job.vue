<template>
<div>
    <Navbar class="is-sticky nav-white dark:bg-slate-900" :lightlogo=true :loginButton=true />
    <section class="md:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden bg-[url('../../assets/images/job/job.jpg')] bg-cover">
        <div class="container-fluid">
            <div class="absolute inset-0 z-0 bg-[url('../../assets/images/job/curve-shape.png')] dark:bg-[url('../../assets/images/job/curve-shape-dark.png')] bg-cover"></div>
        </div>

        <div class="container relative z-1">
            <div class="grid grid-cols-1 mt-10">
                <h4 class="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Make The Best Move to
                    <br> Choose Your <span class="text-indigo-600">New Job</span>
                </h4>
                <p class="text-slate-400 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                    <div class="lg:col-span-10 mt-8">
                        <div class="bg-white dark:bg-slate-900 border-0 shadow-sm rounded p-3">
                            <form>
                                <div class="registration-form relative text-dark text-start">
                                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                        <div class="filter-search-form relative">
                                            <i class="uil uil-briefcase-alt absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <input name="name" type="text" id="job-keyword" class="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Search your keaywords">
                                        </div>

                                        <div class="relative bg-gray-50 dark:bg-slate-800">
                                            <div><i class="uil uil-map-marker absolute top-[48%]  -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i></div>
                                            <v-select :options="options" v-model="selected" class="ms-10"></v-select>
                                        </div>

                                        <div class="relative bg-gray-50 dark:bg-slate-800">
                                            <div class=""><i class="uil uil-briefcase-alt absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i></div>
                                            <v-select :options="options2" v-model="selected2" class="ms-10"></v-select>
                                        </div>

                                        <input type="submit" id="search" name="search" style="height: 60px;" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn lg:rounded-t-none lg:rounded-e-sm lg:rounded-b-sm lg:rounded-s-none rounded-lg w-full" value="Search">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <span class="text-slate-400"><span class="text-dark">Popular Searches :</span> Designer Developer Web IOS PHP Senior Engineer</span>
                </div>
            </div>
        </div>

        <div class="absolute inset-0 bg-indigo-600/5"></div>
        <ul class="circles absolute inset-0 h-full w-full overflow-hidden p-0 mb-0">
            <li class="brand-img"><img :src="company1" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company2" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company3" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company4" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company5" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company6" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company7" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company8" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company9" class="size-9" alt=""></li>
            <li class="brand-img"><img :src="company10" class="size-9" alt=""></li>
        </ul>
    </section>
    <div class="relative">
        <div class="absolute block w-full h-auto bottom-[25px] z-1 start-0">
            <router-link to="#"><i class="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800"></i></router-link>
        </div>

        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <Categories />
    <Jobsite class="bg-gray-50 dark:bg-slate-800" />

    <section class="relative md:py-24 py-16">
        <Popularjob />
    </section>

    <Users :users=true />
    <MobileApp />
    <Footers />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import { ref } from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import Navbar from '@/components/navbar/navbar.vue';
import Categories from '@/components/job/job-categories.vue';
import Jobsite from '@/components/job/job-site.vue';
import Popularjob from '@/components/job/job-popular.vue';
import Users from '@/components/users.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footers from '@/components/footer/footer-job.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import company1 from '@/assets/images/client/shree-logo.png'
import company2 from '@/assets/images/client/skype.png'
import company3 from '@/assets/images/client/snapchat.png'
import company4 from '@/assets/images/client/spotify.png'
import company5 from '@/assets/images/client/telegram.png'
import company6 from '@/assets/images/client/whatsapp.png'
import company7 from '@/assets/images/client/android.png'
import company8 from '@/assets/images/client/facebook-logo-2019.png'
import company9 from '@/assets/images/client/linkedin.png'
import company10 from '@/assets/images/client/google-logo.png'

const options = ref(['Afghanistan', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Canada', 'Cape Verde', 'Denmark', 'Djibouti', 'Eritrea', 'Estonia', 'Gambia']);
const selected = ref('Afghanistan');
const options2 = ref(['Part Time', 'Freelancer', 'Remote Work', 'Office Work']);
const selected2 = ref('Full Time');

</script>