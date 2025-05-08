<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We provide Different types of office</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
        </div>

        <div class="container-fluid relative">
            <div class="flex justify-center relative mt-8">
                <div class="relative w-full">
                    <div class="tiny-six-item">
                        <div v-for="item in datas" :key="item" class="tiny-slide">
                            <div class="group relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden mx-2">
                                <div class="relative">
                                    <img :src="item.image" class="group-hover:rotate-3 group-hover:scale-110 duration-500 ease-in-out" alt="">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black"></div>
                                </div>

                                <div class="absolute bottom-6 start-6 end-6">
                                    <router-link to="#" class="text-white/70 hover:text-white text-lg block font-semibold duration-500 ease-in-out">{{ item.name }}</router-link>
                                    <span class="text-white/60 block">{{ item.title }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import work1 from '@/assets/images/cowork/1.jpg'
import work2 from '@/assets/images/cowork/2.jpg'
import work3 from '@/assets/images/cowork/3.jpg'
import work4 from '@/assets/images/cowork/4.jpg'
import work5 from '@/assets/images/cowork/5.jpg'
import work6 from '@/assets/images/cowork/6.jpg'

const datas = reactive([
  { image: work1, name: 'Private Office', title: 'Co-space' },
  { image: work2, name: 'Dedicated Space', title: 'Co-space' },
  { image: work3, name: 'Small Office', title: 'Co-space' },
  { image: work4, name: 'Floating Seat', title: 'Co-space' },
  { image: work5, name: 'Startups Desk', title: 'Co-space' },
  { image: work1, name: 'Private Office', title: 'Co-space' },
  { image: work6, name: 'Retail Space', title: 'Co-space' },
]);

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
    navPosition: 'bottom',
    controlsText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: { items: 6 },
      992: { items: 4 },
      767: { items: 3 },
      320: { items: 1 },
    },
  });
});
</script>
