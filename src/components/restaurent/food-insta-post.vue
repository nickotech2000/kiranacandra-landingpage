<template>
    <div class="container-fluid relative">
        <div class="grid grid-cols-1 relative">
            <div class="tiny-twelve-item">
                <div v-for="(image, index) in images" :key="index" class="tiny-slide p-0">
                    <div class="card border-0 rounded-0">
                        <div class="card-body">
                            <router-link to="#" @click="showLightbox(index)" class="lightbox d-inline-block cursor-pointer" title="">
                                <img :src="image" class="" alt="Insta Post"/>
                                <div class="overlay bg-dark"></div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                <a href="https://www.instagram.com/shreethemes/" target="_blank" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</a>
            </div>
        </div>
    </div>
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import VueEasyLightbox from 'vue-easy-lightbox';

// Import images
import image from '@/assets/images/food/1.jpg';
import image2 from '@/assets/images/food/2.jpg';
import image3 from '@/assets/images/food/3.jpg';
import image4 from '@/assets/images/food/4.jpg';
import image5 from '@/assets/images/food/5.jpg';
import image6 from '@/assets/images/food/6.jpg';
import image7 from '@/assets/images/food/7.jpg';
import image8 from '@/assets/images/food/8.jpg';
import image9 from '@/assets/images/food/9.jpg';
import image10 from '@/assets/images/food/10.jpg';
import image11 from '@/assets/images/food/11.jpg';
import image12 from '@/assets/images/food/12.jpg';
import image13 from '@/assets/images/food/13.jpg';
import image14 from '@/assets/images/food/14.jpg';
import image15 from '@/assets/images/food/15.jpg';

// Reactive state
const images = [
  image, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
];

const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

// Lightbox methods
const showLightbox = (index) => {
  imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};

// Tiny Slider Initialization
onMounted(() => {
  tns({
    container: '.tiny-twelve-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: [
      '<i class="mdi mdi-chevron-left"></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: { items: 12 },
      992: { items: 8 },
      767: { items: 6 },
      320: { items: 2 },
    },
  });
});
</script>