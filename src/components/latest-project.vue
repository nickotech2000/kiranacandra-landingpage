<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 items-end">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Projects & Works</h3>
                <p class="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
            </div>
        </div>

        <div class="container-fluid relative mt-8">
            <div class="grid grid-cols-1 mt-8">
                <div class="tiny-six-item">
                    <div v-for="(item, index) in datas" :key="index" class="tiny-slide">
                        <div class="group relative block overflow-hidden rounded-md duration-500 mx-2">
                            <router-link to="#" @click="showLightbox(index)" class="lightbox duration-500 group-hover:scale-105" title="">
                                <img :src="item.image" class="" alt="work-image">
                            </router-link>
                            <div class="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow-sm dark:shadow-gray-800">
                                <router-link to="/portfolio-detail-two" class="hover:text-indigo-600 text-lg duration-500 font-medium">{{ item.name }}</router-link>
                                <h6 class="text-slate-400">{{ item.title }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import VueEasyLightbox from 'vue-easy-lightbox';
import image from '@/assets/images/portfolio/1.jpg'
import image2 from '@/assets/images/portfolio/2.jpg'
import image3 from '@/assets/images/portfolio/3.jpg'
import image4 from '@/assets/images/portfolio/4.jpg'
import image5 from '@/assets/images/portfolio/5.jpg'
import image6 from '@/assets/images/portfolio/6.jpg'
import image7 from '@/assets/images/portfolio/7.jpg'
import image8 from '@/assets/images/portfolio/8.jpg'
import image9 from '@/assets/images/portfolio/9.jpg'
import image10 from '@/assets/images/portfolio/20.jpg'
import image11 from '@/assets/images/portfolio/21.jpg'
import image12 from '@/assets/images/portfolio/22.jpg'
import image13 from '@/assets/images/portfolio/23.jpg'

const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const images = [
    image,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13
]

const datas = [
    {
        image: image,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image2,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image3,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image4,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image5,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image6,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image7,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image8,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image9,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image10,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image11,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image12,
        name: 'Iphone mockup',
        title: 'Branding'
    },
    {
        image: image13,
        name: 'Iphone mockup',
        title: 'Branding'
    },

]

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
      1025: { items: 6 },
      992: { items: 4 },
      767: { items: 3 },
      320: { items: 1 },
    },
  });
});

function showLightbox(index) {
  imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
}

function onHide() {
  visibleRef.value = false;
}
</script>
