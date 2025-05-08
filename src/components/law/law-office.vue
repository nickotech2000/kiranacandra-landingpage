<template>
    <div>
        <div class="container relative md:mt-24 mt-16 pt-16">
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
                            <div class="group relative shadow-sm dark:shadow-gray-800 overflow-hidden mx-2">
                                <div class="relative">
                                    <img :src="item.image" class="group-hover:rotate-3 group-hover:scale-110 duration-500 ease-in-out" alt="">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black"></div>
                                </div>

                                <div class="absolute bottom-6 start-6 end-6">
                                    <router-link to="#" class="text-white/70 hover:text-white text-lg block font-semibold duration-500 ease-in-out">{{ item.name }}</router-link>
                                    <span class="text-white/60 block">{{ item.company }}</span>
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
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import law1 from '@/assets/images/law/1.jpg'
import law2 from '@/assets/images/law/2.jpg'
import law3 from '@/assets/images/law/3.jpg'
import law4 from '@/assets/images/law/4.jpg'
import law5 from '@/assets/images/law/5.jpg'
import law6 from '@/assets/images/law/6.jpg'
import law7 from '@/assets/images/law/7.jpg'

// Reactive data
const datas = ref([
  {
    image: law1,
    name: 'Rules of Civil Procedure',
    company: 'Lending Law'
  },
  {
    image: law2,
    name: 'Property & Real Estate',
    company: 'Investment Consulting'
  },
  {
    image: law3,
    name: 'Civil Litigation',
    company: 'Tax & Benefits'
  },
  {
    image: law4,
    name: 'Labours Relations Boar',
    company: 'Merges & Acquisitions'
  },
  {
    image: law5,
    name: 'The Labour code',
    company: 'Construction Law'
  },
  {
    image: law6,
    name: 'Patient Checkup',
    company: 'Health Care Law'
  },
  {
    image: law7,
    name: 'Personal Injury',
    company: 'Personal'
  },
]);

// Slider Initialization
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
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
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