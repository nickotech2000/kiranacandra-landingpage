<template>
<div>
    <div class="container relative ">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Features</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div v-for="feature in features" :key="feature" :class="feature.class">
                <div class="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                    <i :class="feature.icon"></i>
                </div>

                <div class="content mt-7">
                    <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{ feature.title }}</router-link>
                    <p class="text-slate-400 mt-3">{{ feature.desc }}</p>
                    
                    <div class="mt-5">
                        <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container relative md:my-24 my-16">
        <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div class="relative">
                <img :src="classic" class="mx-auto" alt="">
                <div class="overflow-hidden absolute lg:size-[400px] size-[320px] bg-slate-200/40 dark:bg-slate-800/40 bottom-2/4 translate-y-2/4 start-0 rotate-45 -z-1 rounded-[100px]"></div>
            </div>

            <div class="lg:ms-4">
                <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">You will always get extra security from us</h4>
                <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                <ul class="list-none text-slate-400 mt-4">
                    <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ item }}</li>
                </ul>

                <div class="mt-4">
                    <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

import classic from '@/assets/images/app/classic02.png'

// Reactive data
const features = ref([
  {
    class: 'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center',
    icon: 'uil uil-shield',
    title: 'Secured Payment',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    class: 'p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center',
    icon: 'uil uil-calendar-alt',
    title: 'Easy to use',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    class: 'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center',
    icon: 'uil uil-fast-mail',
    title: 'Support',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  }
]);

const datas = ref([
  'Digital Marketing Solutions for Tomorrow',
  'Our Talented & Experienced Marketing Agency',
  'Create your own skin to match your brand'
]);
</script>