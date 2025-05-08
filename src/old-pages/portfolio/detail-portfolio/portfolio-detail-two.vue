<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-32 lg:py-48 bg-[url('../../assets/images/portfolio/bg-inner.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 text-3xl leading-normal font-medium text-white">New Trends in SEO</h3>

                    <ul class="list-none">
                        <li class="inline font-semibold text-white/60 me-2"> <span class="text-white">Client :</span> Calvin Carlo</li>
                        <li class="inline font-semibold text-white/60"> <span class="text-white">Date :</span> 23th May, 2022</li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 justify-center">
                    <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0">
                        <div id="grid" class="lg:columns-4 md:columns-2 columns-1 mx-auto gap-4">
                            <div v-for="(item, index) in images" :key="index" class="picture-item mb-4" data-groups='["branding"]'>
                                <div class="group relative block overflow-hidden rounded-md duration-500">
                                    <router-link to="#" @click="showLightbox(index)" class="lightbox duration-500 group-hover:scale-105 tobii-zoom cursor-pointer" title="">
                                        <img :src="item" class="" alt="work-image">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="flex mx-auto justify-center">
                    <div class="lg:w-2/3 md:w-full">
                        <div class="text-center">
                            <h4 class="text-3xl leading-normal font-semibold mb-6">Project Description</h4>
                            <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                                totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates
                                impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae
                                hic.</p>
                            <p class="text-slate-400 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque
                                alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste.
                                Corporis fuga ducimus dignissimos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />
        </section>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        <Footer :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import Navbar from '@/components/navbar/navbar.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Contact from '@/components/portfolio-contact.vue';

import image10 from '@/assets/images/portfolio/10.jpg';
import image13 from '@/assets/images/portfolio/13.jpg';
import image7 from '@/assets/images/portfolio/7.jpg';
import image8 from '@/assets/images/portfolio/8.jpg';
import image9 from '@/assets/images/portfolio/9.jpg';
import image15 from '@/assets/images/portfolio/15.jpg';
import image16 from '@/assets/images/portfolio/16.jpg';
import image2 from '@/assets/images/portfolio/2.jpg';
import image11 from '@/assets/images/portfolio/11.jpg';
import image6 from '@/assets/images/portfolio/6.jpg';
import image14 from '@/assets/images/portfolio/14.jpg';
import image12 from '@/assets/images/portfolio/12.jpg';
import image1 from '@/assets/images/portfolio/1.jpg';

const images = ref([
  image10,
  image7,
  image1,
  image13,
  image8,
  image9,
  image15,
  image16,
  image2,
  image11,
  image6,
  image14,
  image12,
]);

const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const showLightbox = (index) => {
  imgsRef.value = images.value;
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};
</script>
