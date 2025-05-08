<template>
    <div>
        <navbar />
        <section class="relative flex md:h-screen py-44 items-center bg-cover bg-center self-center">
            <div class="absolute inset-0 h-full w-full  jarallax1" data-jarallax data-speed="0.8"    :style="{ backgroundImage: `url(${backgroundImagePath})`, backgroundPosition: 'bottom', }"></div>
            <div class="absolute inset-0 h-full w-full md:block hidden jarallax" data-jarallax data-speed="0.5"  :style="{ backgroundImage: `url(${text1})`, backgroundPosition: 'center', }"></div>
            <div class="absolute inset-0 h-full w-full block md:hidden jarallax" data-jarallax data-speed="0.5" :style="{ backgroundImage: `url(${text2})`, backgroundPosition: 'center', }"></div>
            <div class="absolute inset-0 h-full w-full jarallax3" data-jarallax data-speed="1.1" :style="{ backgroundImage: `url(${last})`, backgroundPosition: 'bottom', }" ></div>
            <div class="absolute inset-0 bg-gradient-to-t to-transparent via-transparent from-slate-900 hidden dark:block"></div>
            <div class="absolute inset-0 bg-gradient-to-t to-transparent via-transparent from-white dark:hidden block"></div>
        </section>
   
        <Photography />
        <section class="relative pt-8 md:pb-24 py-16">
            <Jackabout />
            <portfolio />
        </section>
        <Footer />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.min.css';

// Image imports
import backgroundImagePath from '@/assets/images/photography/first.jpg';
import text1 from '@/assets/images/photography/hero-text-lg.png';
import text2 from '@/assets/images/photography/hero-text-sm.png';
import last from '@/assets/images/photography/last.png';

import navbar from '@/components/navbar/navbar-photography.vue';
import Photography from '@/components/photography/photography.vue';
import Jackabout from '@/components/photography/photography-about.vue';
import portfolio from '@/components/photography/photography-portfolio.vue';
import Footer from '@/components/footer/photography-footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

const darkmode = () => {
  document.documentElement.classList.add('dark');
};

onMounted(() => {
  darkmode();
  
  jarallax(document.querySelectorAll('.jarallax1'), { speed: 0.8 });
  jarallax(document.querySelectorAll('.jarallax'), { speed: 0.5 });
  jarallax(document.querySelectorAll('.jarallax3'), { speed: 1.1 });
});
</script>