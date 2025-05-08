<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px] " :class="wowAnimate" data-wow-delay=".1s">
            <div class="lg:col-span-5">
                <div class="lg:text-start text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Comfortable Rates</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <div class="mt-6">
                        <router-link to="/page-pricing" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i class="uil uil-master-card"></i> Subscribe Now</router-link>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 mt-8 lg:mt-0">
                <div class="lg:ms-8">
                    <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                        <div class="group border-b-[3px] border-gray-200 dark:border-gray-700 relative shadow-sm dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900 " :class="wowAnimate" data-wow-delay=".3s">
                            <div class="p-6 py-8">
                                <h6 class="font-bold uppercase mb-5 text-indigo-600">Starter</h6>
                                <div class="flex mb-5">
                                    <span class="text-xl font-semibold">$</span>
                                    <span class="price text-4xl font-semibold mb-0">39</span>
                                    <span class="text-xl font-semibold self-end mb-1">/mo</span>
                                </div>

                                <ul class="list-none text-slate-400">
                                    <li v-for="feature in features" :key="feature" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{feature}}</li>
                                </ul>
                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</router-link>
                            </div>
                        </div>

                        <div class="group border-b-[3px] border-gray-200 dark:border-gray-700 relative shadow-sm dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800 " :class="wowAnimate" data-wow-delay=".5s">
                            <div class="p-6 py-8 md:ps-10">
                                <h6 class="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                                <div class="flex mb-5">
                                    <span class="text-xl font-semibold">$</span>
                                    <span class="price text-4xl font-semibold mb-0">59</span>
                                    <span class="text-xl font-semibold self-end mb-1">/mo</span>
                                </div>

                                <ul class="list-none text-slate-400">
                                    <li v-for="feature in features" :key="feature" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{feature}} </li>
                                </ul>
                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, defineProps } from 'vue';

defineProps({
  wowAnimate: {
    type: String,
    required: true
  }
});

const features = ref(['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security']);
</script>
