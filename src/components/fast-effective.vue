<template>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="md:col-span-6">
                    <div class="lg:me-8">
                        <div class="relative">
                            <img :src="aboutImg" class="rounded-full shadow-lg dark:shadow-gray-800" alt="">

                            <div class="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto lg:size-72 size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800">
                                <div class="text-center">
                                    <span class="text-indigo-600 text-2xl font-bold mb-0 flex"><count-up class="counter-value text-6xl font-bold" :start-va="1" :end-val="15"></count-up><span class="text-indigo-600 text-2xl font-bold mt-6">+</span></span>
                                    <span class="font-semibold block mt-2">Years <br> Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-6">
                    <div class="lg:ms-8">
                        <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We're a global stakeholder <br> relations and partnership <br> building consultancy.</h3>
                        <p class="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>
                        <router-link to="/page-services" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i class="uil uil-notes"></i> Get Started</router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import aboutImg from '@/assets/images/it/about.jpg'
</script>

