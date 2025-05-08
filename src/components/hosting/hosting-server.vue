<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="lg:col-span-6 md:order-2 order-1">
                    <div class="lg:ms-8">
                        <img :src="hosting2" alt="">
                    </div>
                </div>
                <div class="lg:col-span-6 md:order-1 order-2">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Quick Responce <br> and Secure Server</h3>
                    <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                    <ul class="list-none text-slate-400 mt-4">
                        <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ item }}</li>
                    </ul>

                    <div class="mt-4">
                        <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="lg:col-span-6">
                    <div class="lg:me-8">
                        <img :src="hosting1" alt="">
                    </div>
                </div>
                <div class="lg:col-span-6">
                    <div class="grid grid-cols-1 gap-[30px]">
                        <div v-for="item in analytics" :key="item" class="group flex items-center relative overflow-hidden p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500">
                            <span class="text-indigo-600 group-hover:text-white text-5xl font-semibold duration-500">
                                <i :class="item.icon"></i>
                            </span>
                            <div class="flex-1 ms-3">
                                <h5 class="group-hover:text-white text-xl font-semibold duration-500">{{ item.title }}</h5>
                                <p class="text-slate-400 group-hover:text-white/50 duration-500 mt-2">{{ item.desc }}</p>
                            </div>
                            <div class="absolute start-1 top-5 text-slate-900/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] duration-500">
                                <i :class="item.icon2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import hosting1 from '@/assets/images/hosting/1.png'
import hosting2 from '@/assets/images/hosting/2.png'

// Reactive data using ref
const datas = ref([
  'Digital Marketing Solutions for Tomorrow',
  'Our Talented & Experienced Marketing Agency',
  'Create your own skin to match your brand'
]);

const analytics = ref([
  {
    icon: 'uil uil-swatchbook',
    icon2: 'uil uil-swatchbook',
    title: 'Enhance Security',
    desc: 'There are many variations of passages of Lorem Ipsum available'
  },
  {
    icon: 'uil uil-tachometer-fast-alt',
    icon2: 'uil uil-tachometer-fast-alt',
    title: 'High Performance',
    desc: 'There are many variations of passages of Lorem Ipsum available'
  },
  {
    icon: 'uil uil-user-check',
    icon2: 'uil uil-user-check',
    title: 'Unbeatable Support',
    desc: 'There are many variations of passages of Lorem Ipsum available'
  },
]);
</script>