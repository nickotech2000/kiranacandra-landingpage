<template>
    <div class="container relative md:mt-24 mt-16">
        <div v-if="services" class="grid grid-cols-1 pb-8 text-center">
            <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What do i offer ?</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
            <div v-for="item in datas" :key="item" :class="item.class">
                <div class="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800">
                    <i :class="item.icon"></i>
                </div>

                <div class="content mt-7">
                    <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.name}}</router-link>
                    <p class="text-slate-400 mt-3">{{item.title}}</p>
                    
                    <div class="mt-5">
                        <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

defineProps({
  services: {
    type: Boolean,
    required: true
  }
});

const datas = ref([
  {
    icon: 'uil uil-airplay',
    name: 'UX / UI Design',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
    class: 'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6'
  },
  {
    icon: 'uil uil-shutter',
    name: 'IOS App Designer',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
    class: 'p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6'
  },
  {
    icon: 'uil uil-camera-plus',
    name: 'Photography',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
    class: 'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6'
  },
  {
    icon: 'uil uil-flower',
    name: 'Graphic Designer',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
    class: 'p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6'
  },
  {
    icon: 'uil uil-cog',
    name: 'Web Security',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
    class: 'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6'
  },
  {
    icon: 'uil uil-comment',
    name: '24/7 Support',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
    class: 'p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6'
  },
]);
</script>