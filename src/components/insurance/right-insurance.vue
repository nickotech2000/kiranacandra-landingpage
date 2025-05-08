<template>
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 items-end">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span class="text-indigo-600">Get the right protection</span> <br> and move forward</h3>
                <p class="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
            </div>
        </div>

        <div class="container-fluid relative mt-8">
            <div class="grid grid-cols-1 mt-8">
                <div class="tiny-six-item">
                    <div v-for="item in datas" :key="item" class="tiny-slide">
                        <div class="mx-2">
                            <div class="group relative block overflow-hidden rounded-md duration-500">
                                <router-link to="#" title="">
                                    <img :src="item.image" class="duration-500 group-hover:scale-105" alt="work-image">
                                    <div class="absolute inset-0 group-hover:bg-indigo-600 opacity-0 group-hover:opacity-70 duration-500"></div>
                                </router-link>
                            </div>
                            <div class="p-4 pb-0">
                                <router-link to="#" class="relative inline-block font-semibold tracking-wide align-middle text-center border-none  hover:text-indigo-600 text-xl duration-500 ease-in-out">{{item.name }}</router-link>
                                <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';

import insurance1 from '@/assets/images/insurance/1.jpg'
import insurance2 from '@/assets/images/insurance/2.jpg'
import insurance3 from '@/assets/images/insurance/3.jpg'
import insurance4 from '@/assets/images/insurance/4.jpg'
import insurance5 from '@/assets/images/insurance/5.jpg'
import insurance6 from '@/assets/images/insurance/6.jpg'
import insurance7 from '@/assets/images/insurance/7.jpg'

const datas = reactive([
  {
    image: insurance1,
    name: 'Health Insurance'
  },
  {
    image: insurance2,
    name: 'Life Insurance'
  },
  {
    image: insurance3,
    name: 'Property Insurance'
  },
  {
    image: insurance4,
    name: 'Term Insurance'
  },
  {
    image: insurance5,
    name: 'General Insurance'
  },
  {
    image: insurance6,
    name: 'Vehicle Insurance'
  },
  {
    image: insurance7,
    name: 'Retirement Plans'
  },
]);

// Initialize slider on mount
onMounted(() => {
  tns({
    container: '.tiny-six-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: {
        items: 6
      },
      992: {
        items: 4
      },
      767: {
        items: 3
      },
      320: {
        items: 1
      },
    },
  });
});
</script>