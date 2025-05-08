<template>
    <div class="container relative md:py-24 py-16">
        <div class="grid grid-cols-1 pb-8 text-center " :class="wowAnimate" data-wow-delay=".1s">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
            <div v-for="item in datas" :key="item" class="lg:col-span-4 md:col-span-6 " :class="wowAnimate" data-wow-delay=".1s">
                <div class="flex duration-500 hover:scale-105 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                        <i :data-feather="item.icon" class="size-5 rotate-45"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="mb-0 text-lg font-medium">{{ item.title }}</h4>
                    </div>
                </div>
            </div>                  
        </div>

        <div v-if="seemore" class="grid grid-cols-1 justify-center">
            <div class="mt-6 text-center " :class="wowAnimate" data-wow-delay=".1s">
                <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right"></i></router-link>
            </div>
        </div>

        <div v-else class="grid grid-cols-1 justify-center">
            <div class="mt-6 text-center">
                <router-link to="/page-services" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">See More <i class="uil uil-arrow-right"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  seemore: {
    type: Boolean,
    required: true,
  },
  wowAnimate: {
    type: String,
    required: true,
  },
});

const datas = ref([
  { title: 'Fully Responsive', icon: 'monitor' },
  { title: 'Browser Compatibility', icon: 'heart' },
  { title: 'Retina Ready', icon: 'eye' },
  { title: 'Based On Tailwindcss 3', icon: 'layout' },
  { title: 'Feather Icons', icon: 'feather' },
  { title: 'Built With SASS', icon: 'code' },
  { title: 'W3c Valid Code', icon: 'user-check' },
  { title: 'Browsers Compatible', icon: 'globe' },
  { title: 'Easy to customize', icon: 'settings' },
]);
</script>