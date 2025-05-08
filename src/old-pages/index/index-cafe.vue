<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative py-40 md:h-screen flex items-center overflow-hidden" id="home" :style="{ 'background-image': `url(${randomImage})` }">
        <div class="absolute inset-0 bg-gradient-to-t from-transparent to-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 mt-10 text-center">
                <div class="md:-rotate-12 -rotate-6">
                    <span class="!font-kaushan  text-white/70 block mb-2">Since 1993</span>
                    <span class="!font-kaushan  text-white font-semibold lg:text-9xl lg:leading-tight md:text-8xl md:leading-tight text-6xl leading-tight block">Great Coffee <br> Good Vibes</span>

                    <div class="mt-8">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Cafes />
    <section class="relative md:pt-0 pt-48 bg-[url('../../assets/images/cafe/cta.jpg')] bg-center bg-no-repeat bg-cover jarallax" :style="{ backgroundImage: `url(${backgroundImagePath})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }">
        <div class="container relative">
            <div class="md:flex justify-end">
                <div class="md:w-1/2 md:py-36 py-10 lg:px-16 md:px-10 px-6 bg-white dark:bg-slate-900 text-center">
                    <img :src="icon1" class="size-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white mx-auto" alt="">
                    <h4 class="!font-ebgaramond text-3xl font-medium mt-4">Happy Hours</h4>
                    <p class="text-indigo-600 !font-ebgaramond text-lg font-medium mt-2">Starts at 3pm</p>
                    <p class="text-slate-400 mt-4">The restaurant will open at 3pm for happy hour and dinner service starting at 5pm. We will continue to offer brunch on weekends from 10am-3pm with bottomless mimosas. We will also continue with our late night lounge on Friday and Saturdays until 2am.</p>
                    <div class="mt-4">
                        <router-link to="tel:+152534-468-854" class="relative inline-block font-semibold tracking-wide align-middle text-center border-none text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out !font-ebgaramond text-lg">+152 534-468-854</router-link><span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600 "></span>
                    </div>

                    <div class="mt-8">
                        <router-link to="#" class="py-2.5 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-lg text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Book Now</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative md:py-24 py-16">
        <Menus />
        <Customer />
        <Coffee />
        <Blogs />
    </section>
    <CafeInsta />
    <Footer />
    <Switcher />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import image from '@/assets/images/cafe/bg1.jpg';
import image2 from '@/assets/images/cafe/bg2.jpg';
import image3 from '@/assets/images/cafe/bg3.jpg';
import backgroundImagePath from '@/assets/images/cafe/cta.jpg';
import Navbar from '@/components/navbar/navbar.vue';
import Cafes from '@/components/cafe/techwind-cafe.vue';
import Menus from '@/components/cafe/cafe-menu.vue';
import Customer from '@/components/cafe/cafe-customer.vue';
import Coffee from '@/components/cafe/best-coffee.vue';
import Blogs from '@/components/cafe/cafe-blogs.vue';
import CafeInsta from '@/components/cafe/cafe-insta-post.vue';
import Footer from '@/components/footer/footer-restaurent.vue';
import Switcher from '@/components/switcher.vue';
import icon1 from '@/assets/images/cafe/icons/coffee.svg'

const randomImage = ref('');
const backgroundImages = [image, image2, image3];

const darkmode = () => {
  document.documentElement.classList.add('dark');
};

const changeBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  randomImage.value = backgroundImages[randomIndex];
};

onMounted(() => {
  darkmode();
  changeBackground();
  setInterval(changeBackground, 4000);
});
</script>