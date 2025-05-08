<template>
    <section class="relative md:mt-24 mt-16" id="portfolio">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Portfolio</h6>
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Works & Projects</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                <div v-for="(item, index) in datas" :key="index.id" class="group relative block overflow-hidden rounded-md duration-500">
                    <img :src="item.images" class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 duration-500" alt="">
                    <div class="absolute inset-0 group-hover:bg-dark opacity-50 duration-500 z-0"></div>

                    <div class="content">
                        <div class="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 duration-500">
                            <a @click="showLightbox(index)" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i class="uil uil-camera"></i></a>
                        </div>

                        <div
                            class="title absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 duration-500">
                            <router-link :to="`/portfolio-detail-one/${item.id}`" class="h6 text-md font-medium text-white hover:text-indigo-600 duration-500 ease-in-out">{{item. name }}</router-link>
                            <p class="text-slate-100 tag mb-0">{{ item.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

import image from '@/assets/images/portfolio/1.jpg';
import image2 from '@/assets/images/portfolio/2.jpg';
import image3 from '@/assets/images/portfolio/3.jpg';
import image4 from '@/assets/images/portfolio/4.jpg';
import image5 from '@/assets/images/portfolio/5.jpg';
import image6 from '@/assets/images/portfolio/6.jpg';
import image7 from '@/assets/images/portfolio/7.jpg';
import image8 from '@/assets/images/portfolio/8.jpg';

const datas = ref([
  { id: 1, images: image, name: 'Mockup Collection', title: 'Abstract' },
  { id: 2, images: image2, name: 'Mockup Collection', title: 'Abstract' },
  { id: 3, images: image3, name: 'Mockup Collection', title: 'Abstract' },
  { id: 4, images: image4, name: 'Mockup Collection', title: 'Abstract' },
  { id: 5, images: image5, name: 'Mockup Collection', title: 'Abstract' },
  { id: 6, images: image6, name: 'Mockup Collection', title: 'Abstract' },
  { id: 7, images: image7, name: 'Mockup Collection', title: 'Abstract' },
  { id: 8, images: image8, name: 'Mockup Collection', title: 'Abstract' },
]);

const images = [image, image2, image3, image4, image5, image6, image7, image8];
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);




const showLightbox = (index) =>{
    imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
}

function onHide() {
  visibleRef.value = false;
}


</script>