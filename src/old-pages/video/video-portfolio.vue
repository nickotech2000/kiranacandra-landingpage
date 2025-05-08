<template>
    <div>
        <Navbar />
        <section class="relative md:pt-40 pt-28 md:pb-48 pb-40 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax" data-jarallax data-speed="0.5" id="aboutme">
            <div class="absolute inset-0 h-full w-full bg-slate-900/60"></div>

            <div class="container relative">
                <div class="grid grid-cols-1 mt-10">
                    <div class="text-center">
                        <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-bold text-white">Watch Our Videos</h3>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:pb-24 pb-16 -mt-10">
            <div class="container relative">
                <div class="lg:flex lg:w-4/5 mx-auto">
                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div v-for="item in datas" :key="item" class="picture-item">
                            <div class="group relative block overflow-hidden rounded-md duration-500">
                                <router-link to="#" @click="toggle" class="lightbox max-w-full max-h-full cursor-pointer">
                                    <span class="relative">
                                        <img :src="item.image" class="rounded-md" alt="">
                                        <div class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500">
                                            <img :src="item.image2" class="rounded-md absolute top-1/2 -translate-y-1/2 start-0 end-0 p-4" alt=""/>
                                        </div>
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-8">
                    <div class="text-center">
                        <router-link to="/photography-portfolio" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600 dark:bg-white"></span>See More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </section>

        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
            </div>
            <button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <Footer />
        <switcher />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';
import Navbar from '@/components/navbar/navbar-video-light.vue';
import Footer from '@/components/footer/footer-video.vue';
import switcher from '@/components/switcher.vue';

import portfolio1 from '@/assets/images/portfolio/01.jpg'
import portfolio2 from '@/assets/images/portfolio/02.jpg'
import portfolio3 from '@/assets/images/portfolio/03.jpg'
import portfolio4 from '@/assets/images/portfolio/04.jpg'
import portfolio5 from '@/assets/images/portfolio/05.jpg'
import portfolio6 from '@/assets/images/portfolio/06.jpg'

import bg from '@/assets/images/video/bg.png'

const isActive = ref(false);
const datas = [
  {
    image: portfolio1,
    image2: bg
  },
  {
    image: portfolio2,
    image2: bg
  },
  {
    image: portfolio3,
    image2: bg
  },
  {
    image: portfolio4,
    image2: bg
  },
  {
    image: portfolio5,
    image2: bg
  },
  {
    image: portfolio6,
    image2: bg
  },
];

// Methods
const darkmode = () => {
  document.documentElement.classList.add('dark');
};

const toggle = () => {
  isActive.value = !isActive.value;
};

// Lifecycle hooks
onMounted(() => {
  darkmode();
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
});
</script>