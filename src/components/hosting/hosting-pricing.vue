<template>
    <div>
        <section class="relative md:pt-24 md:pb-36 pt-16 pb-24 bg-indigo-600">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Hosting / Server Rates</h3>
                    <p class="text-slate-400 max-w-xl mx-auto ">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0">
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            <div class="group relative rounded-md overflow-hidden hover:shadow-sm dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500 h-fit">
                                <div class="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                    <h5 class="text-lg font-semibold uppercase">Starter</h5>
                                    <p class="text-slate-400 mt-4">We offers a <b class="text-black dark:text-white">free month</b> of service for new customers.</p>
                                </div>

                                <div class="p-6 hosting-price">
                                    <ul class="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full space-x-1" id="myTabone" data-tabs-toggle="#StarterContent" role="tablist">
                                        <li role="presentation" class="inline-block">
                                            <button @click="toggle(1)" :class="isActive === 1 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-full w-full  duration-500" id="start-month-tab" data-tabs-target="#start-month" type="button" role="tab" aria-controls="start-month" aria-selected="true">Monthly</button>
                                        </li>
                                        <li role="presentation" class="inline-block">
                                            <button @click="toggle(2)" :class="isActive === 2 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-full w-full duration-500" id="start-year-tab" data-tabs-target="#start-year" type="button" role="tab" aria-controls="start-year" aria-selected="false">Yearly</button>
                                        </li>
                                    </ul>

                                    <div id="StarterContent" class="mt-6">
                                        <div :class="isActive === 1 ? '' : 'hidden'"  id="start-month" role="tabpanel" aria-labelledby="start-month-tab">
                                            <div class="flex justify-center">
                                                <span class="text-sm text-slate-400 font-semibold">$</span>
                                                <span class="text-3xl font-semibold mx-1">3.99</span>
                                                <span class="text-sm text-slate-400 font-semibold self-end">/month</span>
                                            </div>
                                        </div>
                                        <div :class="isActive === 2 ? '' : 'hidden'" id="start-year" role="tabpanel" aria-labelledby="start-year-tab">
                                            <div class="flex justify-center">
                                                <span class="text-sm text-slate-400 font-semibold">$</span>
                                                <span class="text-3xl font-semibold mx-1">15.99</span>
                                                <span class="text-sm text-slate-400 font-semibold self-end">/year</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-6">
                                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</router-link>
                                    </div>
                                </div>

                                <div class="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                    <p class="text-slate-400 mb-0">Great Start For A <b class="text-black dark:text-white">Single</b> Site.</p>
                                </div>

                                <div class="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                    <ul class="list-none">
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-emerald-600"></i><b class="text-black dark:text-white">1</b> Website</li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-amber-500"></i><b class="text-black dark:text-white">1</b> Email Account</li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-amber-500"></i><b class="text-black dark:text-white">Limited</b> Bandwidth (100 GB)</li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-amber-500"></i><b class="text-black dark:text-white">1X Processing</b> Power &amp; Memory</li>
                                    </ul>
                                </div>

                                <div class="p-4">
                                    <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                                </div>
                            </div>
                            
                            <div class="group relative rounded-md overflow-hidden hover:shadow-sm dark:shadow-gray-800 hover:shadow-indigo-600 border-[3px] border-indigo-600 bg-white dark:bg-slate-900 text-center duration-500">
                                <div class="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                    <h5 class="text-lg font-semibold uppercase">Premium</h5>
                                    <p class="text-slate-400 mt-4">We offers a <b class="text-black dark:text-white">free month</b> of service for new customers.</p>
                                </div>

                                <div class="p-6 hosting-price">
                                    <ul class="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full space-x-1" id="myTabtwo" data-tabs-toggle="#PremiumContent" role="tablist">
                                        <li role="presentation" class="inline-block">
                                            <button @click="toggle2(3)" :class="isActive2 === 3 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50' "  class="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400  duration-500" id="pre-month-tab" data-tabs-target="#pre-month" type="button" role="tab" aria-controls="pre-month" aria-selected="true">Monthly</button>
                                        </li>
                                        <li role="presentation" class="inline-block">
                                            <button @click="toggle2(4)" :class="isActive2 === 4 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400 duration-500" id="pre-year-tab" data-tabs-target="#pre-year" type="button" role="tab" aria-controls="pre-year" aria-selected="false">Yearly</button>
                                        </li>
                                    </ul>

                                    <div id="PremiumContent" class="mt-6">
                                        <div :class="isActive2 === 3 ? '' : 'hidden'" id="pre-month" role="tabpanel" aria-labelledby="pre-month-tab">
                                            <div class="flex justify-center">
                                                <span class="text-sm text-slate-400 font-semibold">$</span>
                                                <span class="text-3xl font-semibold mx-1">14.99</span>
                                                <span class="text-sm text-slate-400 font-semibold self-end">/month</span>
                                            </div>
                                        </div>
                                        <div :class="isActive2 === 4 ? '' : 'hidden'" id="pre-year" role="tabpanel" aria-labelledby="pre-year-tab">
                                            <div class="flex justify-center">
                                                <span class="text-sm text-slate-400 font-semibold">$</span>
                                                <span class="text-3xl font-semibold mx-1">149.99</span>
                                                <span class="text-sm text-slate-400 font-semibold self-end">/year</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-6">
                                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</router-link>
                                    </div>
                                </div>

                                <div class="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                    <p class="text-slate-400 mb-0">More Sites & <b class="text-black dark:text-white">2X</b> Resources.</p>
                                </div>

                                <div class="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                    <ul class="list-none">
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-emerald-600"></i><b class="text-black dark:text-white">Unlimited</b> Number of Websites</li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-emerald-600"></i><b class="text-black dark:text-white">Unlimited</b> Email Accounts</li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-emerald-600"></i><b class="text-black dark:text-white">Unlimited</b> Bandwidth</li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-amber-400"></i><b class="text-black dark:text-white">2X Processing</b> Power &amp; Memory</li>
                                    </ul>
                                </div>

                                <div class="p-4">
                                    <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">
                                        <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                    Read More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                                    
                                </div>

                                <div class="p-4 bg-indigo-600">
                                    <p class="text-white text-sm">The most frequently chosen package</p>
                                </div>
                            </div>
                            
                            <div class="group relative rounded-md overflow-hidden hover:shadow-sm dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500 h-fit">
                                <div class="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                    <h5 class="text-lg font-semibold uppercase">Business</h5>
                                    <p class="text-slate-400 mt-4">We offers a <b class="text-black dark:text-white">free month</b> of service for new customers.</p>
                                </div>

                                <div class="p-6 hosting-price">
                                    <ul class="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full space-x-1" id="myTabthree" data-tabs-toggle="#BusinessContent" role="tablist">
                                        <li role="presentation" class="inline-block">
                                            <button @click="toggle3(5)" :class="isActive3 === 5 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400  duration-500" id="busi-month-tab" data-tabs-target="#busi-month" type="button" role="tab" aria-controls="busi-month" aria-selected="true">Monthly</button>
                                        </li>
                                        <li role="presentation" class="inline-block">
                                            <button  @click="toggle3(6)" :class="isActive3 === 6 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400 duration-500" id="busi-year-tab" data-tabs-target="#busi-year" type="button" role="tab" aria-controls="busi-year" aria-selected="false">Yearly</button>
                                        </li>
                                    </ul>

                                    <div id="BusinessContent" class="mt-6">
                                        <div :class="isActive3 === 5 ? '' : 'hidden'" id="busi-month" role="tabpanel" aria-labelledby="busi-month-tab">
                                            <div class="flex justify-center">
                                                <span class="text-sm text-slate-400 font-semibold">$</span>
                                                <span class="text-3xl font-semibold mx-1">29.99</span>
                                                <span class="text-sm text-slate-400 font-semibold self-end">/month</span>
                                            </div>
                                        </div>
                                        <div :class="isActive3 === 6 ? '' : 'hidden'" id="busi-year" role="tabpanel" aria-labelledby="busi-year-tab">
                                            <div class="flex justify-center">
                                                <span class="text-sm text-slate-400 font-semibold">$</span>
                                                <span class="text-3xl font-semibold mx-1">259.99</span>
                                                <span class="text-sm text-slate-400 font-semibold self-end">/year</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-6">
                                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Add Cart</router-link>
                                    </div>
                                </div>

                                <div class="py-3 px-2 bg-gray-50 dark:bg-slate-800">
                                    <p class="text-slate-400 mb-0">Boost Servers <b class="text-black dark:text-white">+ More Power</b></p>
                                </div>

                                <div class="p-6 border-b border-gray-100 dark:border-gray-700 text-start">
                                    <ul class="list-none">
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-emerald-600"></i><b class="text-black dark:text-white">All Benefits From Premium</b></li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-emerald-600"></i><b class="text-black dark:text-white">Daily</b> Backups</li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-emerald-600"></i><b class="text-black dark:text-white">Free</b> SSL Certificate</li>
                                        <li class="text-slate-400 my-1"><i class="mdi mdi-check me-2 text-emerald-600"></i><b class="text-black dark:text-white">4X Processing</b> Power &amp; Memory</li>
                                    </ul>
                                </div>

                                <div class="p-4">
                                    <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(1);
const isActive2 = ref(3);
const isActive3 = ref(5);

const toggle = (number) => {
  isActive.value = number;
};
const toggle2 = (number) => {
  isActive2.value = number;
};
const toggle3 = (number) => {
  isActive3.value = number;
};
</script>