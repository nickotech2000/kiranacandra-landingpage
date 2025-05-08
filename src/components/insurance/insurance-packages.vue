<template>
    <section class="py-36 w-full table relative bg-indigo-600">
        <div class="absolute inset-0 bg-[url('../../assets/images/insurance/cta.png')] bg-bottom bg-no-repeat bg-cover"></div>
        <div class="container relative">
            <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div class="order-2 lg:order-1 lg:mt-0 mt-8">
                    <div class="lg:me-6 text-center lg:text-start">
                        <h3 class="mb-4 md:text-4xl text-3xl lg:leading-normal leading-normal text-white font-semibold">Compare insurance packages <br> and obtain the best offer</h3>

                        <p class="text-white/80 max-w-xl mx-auto lg:ms-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div class="mt-6">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-100 hover:bg-slate-200 border-slate-100 hover:border-slate-200 text-indigo-600 rounded-md me-2 mt-2">Get a custom plan</router-link>
                        </div>
                    </div>
                </div>

                <div class="order-1 lg:order-2">
                    <div class="grid grid-cols-2 gap-[30px]">
                        <div class="counter-box text-center">
                            <h1 class="lg:text-5xl text-4xl font-bold mb-2 text-white flex justify-center"><count-up class="counter-value" :start-val="101" :end-val="145"></count-up>M</h1>
                            <h5 class="text-white text-xl font-medium">Insured Customers</h5>
                        </div>

                        <div class="counter-box text-center">
                            <h1 class="lg:text-5xl text-4xl font-bold mb-2 text-white flex justify-center"><count-up class="counter-value" :start-val="2" :end-val="99"></count-up>%</h1>
                            <h5 class="text-white text-xl font-medium">Clients Satisfaction</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-6 border-b border-gray-100 dark:border-gray-700">
        <div class="container relative">
            <companylogo />
        </div>
    </section>
</template>

<script setup>

import companylogo from '@/components/company-logos.vue';
import CountUp from 'vue-countup-v3'

</script>
