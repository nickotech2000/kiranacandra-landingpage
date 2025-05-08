<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />
        <section class="relative overflow-hidden table w-full bg-slate-50 dark:bg-slate-800 py-28 lg:py-36">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="lg:col-span-5">
                        <div class="md:me-6 relative z-2">
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white"> Best way to make Online Payments</h4>
                            <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing.</p>

                            <div class="subcribe-form mt-6 mb-3">
                                <form class="relative max-w-xl">
                                    <input type="email" id="subcribe" name="email" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Enter your mail">
                                    <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Get started <i class="uil uil-arrow-right"></i></button>
                                </form>
                            </div>
                            <span class="text-slate-400 font-medium">Looking for help? <router-link to="#" class="text-indigo-600">Get in touch with us</router-link></span>
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div class="relative">
                            <img :src="classicImg" class="mx-auto relative z-1" alt="">
                            <div
                                class="overflow-hidden absolute md:size-[550px] size-[400px] bg-slate-200/40 dark:bg-slate-900/40 bottom-1/2 translate-y-1/2 start-0 end-0 mx-auto z-0 rounded-full">
                            </div>

                            <div class="md:w-72 w-64 absolute md:-top-4 top-0 lg:start-0 md:-start-14 start-0 z-2">
                                <div class="p-5 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800">
                                    <h5 class="text-lg font-semibold mb-2">Your Funds</h5>
                                    <span class="text-2xl font-bold">$ 48,756.55</span>
                                    <img :src="fund" class="rounded-md mt-5" alt="">
                                </div>
                            </div>

                            <div
                                class="md:w-[350px] w-72 absolute top-1/3 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 z-3">
                                <div class="p-5 bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800">
                                    <img :src="visa" class="h-16" alt="">

                                    <div class="pt-5">
                                        <h5 class="text-lg font-bold text-white">•••• •••• •••• 9856</h5>
                                        <div class="flex justify-between text-slate-50 mt-4">
                                            <p>Calvin Carlo</p>
                                            <span>Exp: <span>01/24</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-64 absolute md:-bottom-4 bottom-0 end-0 z-3">
                                <div class="p-5 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800">
                                    <h5 class="font-semibold text-lg">Recent Transections</h5>
                                    <ul>
                                        <li v-for="item in datas" :key="item" class="flex justify-between items-center pt-5">
                                            <div class="flex items-center">
                                                <img :src="item.image" class="w-10" alt="">
                                                <div class="ms-3">
                                                    <p class="font-semibold">{{ item.name }}</p>
                                                    <p class="text-slate-400 text-sm">{{ item.date }}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <span class="text-slate-400">{{ item.price }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section class="relative md:pt-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Trusted Partners</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Our Trusted Partners</p>
                </div>
                <Companylogos />
            </div>
        </section>
        <Features />
        <Users :users=true />
        <MobileApp />
        <Footer :email=true />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Companylogos from '@/components/company-logos.vue';
import Navbar from '@/components/navbar/navbar.vue';
import Features from '@/components/features/payment-features.vue';
import Users from '@/components/users.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import company1 from '@/assets/images/client/facebook-logo-2019.png'
import company2 from '@/assets/images/client/lenovo-logo.png'
import company3 from '@/assets/images/client/linkedin.png'
import classicImg from '@/assets/images/app/classic02.png'
import fund from '@/assets/images/payments/fund.png'
import visa from '@/assets/images/payments/payment/visaa.png'

// Reactive data
const datas = ref([
  {
    image: company1,
    name: 'Facebook Ads',
    date: 'Dt.1st Dec 22',
    price: '$ 0.99'
  },
  {
    image: company2,
    name: 'Lenovo Laptop',
    date: 'Dt.29th Nov 22',
    price: '$ 599'
  },
  {
    image: company3,
    name: 'Linkedin Pro Ac.',
    date: 'Dt.25th Nov 22',
    price: '$ 0.99'
  }
]);
</script>
