<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative md:flex md:h-screen items-center md:py-0 pt-36 pb-56 bg-[url('../../assets/images/travel/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/40"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 mt-10">
                <h4 class="lg:leading-normal leading-normal text-white text-4xl lg:text-5xl mb-5 font-bold">Find Your<br> Favorite Place Here!</h4>
                <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                    <div class="lg:col-span-10 mt-8">
                        <div class="bg-white dark:bg-slate-900 border-0 shadow-sm rounded p-3">
                            <form>
                                <div class="registration-form relative text-dark text-start">
                                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                        <div class="filter-search-form relative">
                                            <i class="uil uil-search absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <input name="name" type="text" id="location" class="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Location">
                                        </div>

                                        <div class="filter-search-form relative">
                                            <i class="uil uil-dollar-sign absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <input name="name" type="number" id="job-keyword" class="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Budget">
                                        </div>

                                        <div class="filter-search-form relative h-full">
                                            <VueDatePicker v-model="date" class="dp__theme_dark h-15" :enable-time-picker="false" placeholder="Select date :" text-input />
                                        </div>

                                        <input type="submit" id="search" name="search" style="height: 60px;" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn lg:rounded-t-none lg:rounded-e-sm lg:rounded-b-sm lg:rounded-s-none rounded-lg w-full" value="Search">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container absolute bottom-0 start-0 end-0">
            <div class="grid grid-cols-1">
                <div class="p-6 border-t border-dashed border-white/30">
                    <div class="grid md:grid-cols-4 grid-cols-2 gap-[30px]">
                        <div class="counter-box flex items-center justify-center">
                            <h1 class="text-4xl font-bold text-white flex justify-center"><count-up class="counter-value" :start-val="1" :end-val="100" data-target="100"></count-up>k+ </h1>
                            <h5 class="counter-head text-xs font-semibold text-white/40 ms-2">Happy <br> Customer</h5>
                        </div>

                        <div class="counter-box flex items-center justify-center">
                            <h1 class="text-4xl font-bold text-white flex justify-center"><count-up class="counter-value" :start-val="1" :end-val="15" data-target="15"></count-up></h1>
                            <h5 class="counter-head text-xs font-semibold text-white/40 ms-2">Years of <br> experiences</h5>
                        </div>

                        <div class="counter-box flex items-center justify-center">
                            <h1 class="text-4xl font-bold text-white flex justify-center"><count-up class="counter-value" :start-val="1" :end-val="4" data-target="4"></count-up>k+</h1>
                            <h5 class="counter-head text-xs font-semibold text-white/40 ms-2">Best <br> Destinations</h5>
                        </div>

                        <div class="counter-box flex items-center justify-center">
                            <h1 class="text-4xl font-bold text-white flex justify-center"><count-up class="counter-value" :start-val="1" :end-val="4.9" data-target="4.9"></count-up></h1>
                            <h5 class="counter-head text-xs font-semibold text-white/40 ms-2">Reviews or <br> Ratings </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative md:py-24 py-16">
        <Benefit />
        <Destination />
        <div class="relative md:mt-24 mt-16">
            <Users :users=true />
        </div>
        <AskedQuestion />
    </section>
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import CountUp from 'vue-countup-v3';
import Benefit from '@/components/benefit-for-traveller.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Destination from '@/components/populer-destination.vue';
import Users from '@/components/users.vue';
import AskedQuestion from '@/components/asked-questions/travel-questions.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

const date = ref(null);
</script>

<style>
.dp__input_icon_pad{
    height: 60px !important;
}
</style>