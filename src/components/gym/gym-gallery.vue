<template>
    <div class="container-fluid relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h5 class="font-semibold text-base text-indigo-600 mb-2">Gallery</h5>
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Take a Sneak Peek Inside</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
        </div>

        <div class="grid md:grid-cols-5 grid-cols-2 justify-center mx-auto mt-8">
            <div v-for="(gallery, index) in gallerys" :key="index" class="group relative block overflow-hidden duration-500">
                <router-link to="#" @click="showLightbox(index)" class="" title="">
                    <img :src="gallery" class="cursor-pointer lightbox duration-500 group-hover:scale-105" alt="Gym Images">
                </router-link>
            </div>
        </div>
    </div>
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

import image from '@/assets/images/gym/01.jpg';
import image2 from '@/assets/images/gym/02.jpg';
import image3 from '@/assets/images/gym/03.jpg';
import image4 from '@/assets/images/gym/04.jpg';
import image5 from '@/assets/images/gym/05.jpg';
import image6 from '@/assets/images/gym/06.jpg';
import image7 from '@/assets/images/gym/07.jpg';
import image8 from '@/assets/images/gym/08.jpg';
import image9 from '@/assets/images/gym/09.jpg';
import image10 from '@/assets/images/gym/10.jpg';

const gallerys = ref([
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
]);

const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const showLightbox = (index) => {
  visibleRef.value = true;
  imgsRef.value = gallerys.value;
  indexRef.value = index;
};

const onHide = () => {
  visibleRef.value = false;
};
</script>