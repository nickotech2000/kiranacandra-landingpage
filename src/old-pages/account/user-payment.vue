<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative lg:pb-24 pb-16">
        <div class="container-fluid relative">
            <div class="profile-banner relative text-transparent">
                <input id="pro-banner" name="profile-banner" type="file" class="hidden"/>
                <div class="relative shrink-0">
                    <img :src="bg" class="h-80 w-full object-cover" id="profile-banner" alt="">
                    <div class="absolute inset-0 bg-slate-900/70"></div>
                    <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                </div>
            </div>
        </div>
        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex">
                <AccouTab />
                <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                    <div class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <div class="p-6 md:flex justify-between items-center border-b border-gray-100 dark:border-gray-700">
                            <div class="mb-4 md:mb-0">
                                <h5 class="text-xl font-semibold">Current Plan</h5>
                            </div>
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Switch to Annual Plan</router-link>
                        </div>

                        <div class="p-6">
                            <h5 class="text-2xl font-bold">$18/Monthly</h5>
                            <p class="text-slate-400 mt-2">Your next monthly charge of $18 will be applied to your primary payment method on July 20, 2022.</p>
                        </div>
                    </div>

                    <div class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                        <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                            <h5 class="text-xl font-semibold">Payment Methods</h5>
                            <p class="text-slate-400 mt-2">Primary payment method is used by default</p>
                        </div>

                        <div class="px-6">
                            <ul>
                                <li v-for="item in datas" :key="item" class="flex justify-between items-center py-6">
                                    <div class="flex items-center">
                                        <img :src="item.image"  class="rounded shadow-sm dark:shadow-gray-800 w-12" alt=""/>

                                        <div class="ms-3">
                                            <p class="font-semibold">{{item.name}}</p>
                                            <p class="text-slate-400 text-sm">{{item.expires}}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <router-link to="#" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white rounded-full"><i data-feather="trash-2" class="size-4"></i></router-link>
                                    </div>
                                </li>

                                <li class="py-6 border-t border-gray-100 dark:border-gray-700">
                                    <router-link to="#" @click="show = !show" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Add Payment Method</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footers :email=true />
    <Switcher />
    <div class="fixed inset-0 w-full h-screen flex items-center justify-center bg-slate-900/75 z-999" :class="show ? '' : 'hidden'">
        <div id="paymentMethod" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            <div class="relative h-auto md:w-[480px] w-300px">
                <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 class="font-bold text-lg">Add Payment Method</h3>
                    <form>
                        <button @click="show = !show" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                    </form>
                </div>
                <div class="p-6 text-center">
                    <form>
                        <div class="grid grid-cols-1">
                            <div class="lg:col-span-6 mb-5">
                                <div class="text-start">
                                    <label for="name" class="font-semibold">Your Name :</label>
                                    <input name="name" id="name" type="text" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="Name :">
                                </div>
                            </div>
                        </div>
    
                        <div class="grid lg:grid-cols-12 lg:gap-6">
                            <div class="lg:col-span-6 mb-5">
                                <div class="text-start">
                                    <label for="ex_month" class="form-label font-medium">Month :</label>
                                    <select id="ex_month" class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                    </select>
                                </div>
                            </div>
    
                            <div class="lg:col-span-6 mb-5">
                                <div class="text-start">
                                    <label for="ex_year" class="form-label font-medium">Year :</label>
                                    <select id="ex_year" class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="lg:col-span-6 mb-5">
                                <div class="text-start">
                                    <label for="name" class="font-semibold">Card no. :</label>
                                    <input name="number" id="card_number" type="number" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="number :">
                                </div>
                            </div>
    
                            <div class="lg:col-span-6 mb-5">
                                <div class="text-start">
                                    <label for="name" class="font-semibold">CVV :</label>
                                    <input name="number" id="cvv_number" type="number" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="number :">
                                </div>
                            </div>
                        </div>
    
                        <div class="grid grid-cols-1">
                            <div class="mb-5">
                                <div class="text-start">
                                    <label for="card_names" class="form-label font-medium">Cards :</label>
                                    <select id="card_names" class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                        <option>Visa</option>
                                        <option>Ame. Express</option>
                                        <option>Master</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit" id="submit" name="send" class="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Add Card</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import AccouTab from '@/components/users-tab.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'
import bg from '@/assets/images/blog/bg.jpg'

import payament1 from '@/assets/images/payments/visa.png'
import payament2 from '@/assets/images/payments/american-ex.png'
import payament3 from '@/assets/images/payments/discover.png'
import payament4 from '@/assets/images/payments/master-card.png'

const show = ref(false)

const datas = [
    {
        image: payament1,
        name: 'Visa ending in 4578',
        expires: 'Expires in 12/2022'
    },
    {
        image: payament2,
        name: 'American Express ending in 4578',
        expires: 'Expires in 12/2022'
    },
    {
        image: payament3,
        name: 'Discover ending in 4578',
        expires: 'Expires in 12/2022'
    },
    {
        image: payament4,
        name: 'Master Card ending in 4578',
        expires: 'Expires in 12/2022'
    },
]
</script>
