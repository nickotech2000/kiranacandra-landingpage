<template>

    <div v-if="powerfull" class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div class="md:col-span-6 order-1 md:order-2">
                <div class="lg:ms-8">
                    <img :src="shape" alt="">
                </div>
            </div>

            <div class="md:col-span-6 order-2 md:order-1">
                <div class="lg:me-5">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br> With Techwind</h3>
                    <p class="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>
                    <router-link to="/page-services" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i class="uil uil-notes"></i> Get Started</router-link>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div class="md:col-span-6">
                <div class="lg:me-8">
                    <img :src="shape" alt="">
                </div>
            </div>

            <div class="md:col-span-6">
                <div class="lg:ms-5">
                    <h6 v-if="History" class="text-indigo-600 text-sm font-bold uppercase mb-2">Our History</h6>
                    <h6 v-else class="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                    <h3 v-if="Effective" class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">“Sweet as the Moment When <br> the coworking Went 'Pop”</h3>
                    <h3 v-else class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br> With Techwind</h3>

                    <p class="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import shape from '@/assets/images/shape-image.png'

defineProps({
  powerfull: {
    type: Boolean,
    required: true,
  },
  Effective: {
    type: Boolean,
    required: true,
  },
  History: {
    type: Boolean,
    required: true,
  },
});
</script>
