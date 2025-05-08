<template>
<div>
    <section  class="relative overflow-hidden md:h-screen py-36 flex justify-center items-center bg-[url('../../assets/images/christmas/bg-hero.jpg')] bg-center bg-no-repeat bg-fi bg-cover" id="home">
        <div class="absolute inset-0" id="particles-snow"></div>
        <div class="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900"></div>

        <router-link to="/" class="absolute top-10 end-0 start-0 text-center justify-center mx-auto">
            <img :src="logoLight" class="mx-auto block" alt="">
        </router-link>

        <div class="container relative z-1">
            <div class="grid grid-cols-1 justify-center text-center">
                <h4 class="font-bold lg:leading-normal leading-normal text-white uppercase text-5xl lg:text-7xl">Christmas Offers</h4>
                <div id="countdown">
                    <ul class="count-down list-none inline-block text-white text-center mt-8">
                        <li id="days" class="text-[48px] font-bold leading-[110px] size-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{{ days }}<p class="count-head">Days</p></li>
                        <li id="hours" class="text-[48px] font-bold leading-[110px] size-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{{ hours }}<p class="count-head">Hours</p></li>
                        <li id="mins" class="text-[48px] font-bold leading-[110px] size-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{{ minutes }}<p class="count-head">minutes</p></li>
                        <li id="secs" class="text-[48px] font-bold leading-[110px] size-[130px] rounded-md shadow-md bg-slate-950/40 backdrop-opacity-30 inline-block m-2">{{ seconds }}<p class="count-head">seconds</p></li>
                        <li id="end" class="h1"></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div class="relative">
        <div class="absolute block w-full h-auto bottom-[25px] z-1 start-0">
            <a href="#about"><i class="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800"></i></a>
        </div>

        <div  class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <Features />
    <Products />
    <Categories />
    <Mobileapp />
    <Footer :email=true />
    <Switcher />
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Features from '@/components/christmas/christmas-features.vue';
import Products from '@/components/christmas/christmas-products.vue';
import Categories from '@/components/christmas/christmas-categories.vue';
import Mobileapp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import logoLight from '@/assets/images/logo-light.png'

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const countDownToTime = new Date("Dec 25, 2025 00:00:00").getTime();
let intervalId;

const tickTock = () => {
  const now = new Date().getTime();
  const difference = countDownToTime - now;

  if (difference <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0;
    clearInterval(intervalId);
    return;
  }

  days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
};

onMounted(() => {
  tickTock();
  intervalId = setInterval(tickTock, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>