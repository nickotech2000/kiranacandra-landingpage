<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />
        <section class="relative table w-full py-36 lg:py-44 overflow-hidden">
            <span class="absolute  xl:start-[50rem] lg:start-[30rem] md:start-[15rem] start-[0rem] lg:bottom-[10rem] md:bottom-[12rem] bottom-[14rem] w-[60rem] h-[30rem] rounded-[18rem] ltr:rotate-[135deg] rtl:rotate-[45deg] bg-indigo-600/5 dark:bg-indigo-600/10"></span>
            <div class="absolute inset-0 bg-indigo-600 opacity-5"></div>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="md:col-span-7">
                        <div class="md:me-6">
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Bigger, Bolder
                                <br> <span class="text-indigo-600">& Better</span>
                            </h4>
                            <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                            <div class="mt-6">
                                <router-link to="/page-aboutus" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Company</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-5">
                        <div class="relative">
                            <div class="tiny-one-item studio-img">
                                <div v-for="image in images" :key="image" class="tiny-slide">
                                    <div class="m-2 mx-3">
                                        <img :src="image" class="rounded-lg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </router-link>
                            </div>
                        </div>
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

        <section class="relative md:py-24 py-16 pt-12">
        <div class="container relative">
            <CompanyLogos />
        </div>
        <Services />
        </section>
        <Marketing />
        <Project />
        <Switcher />
        <Portfolio />
        <Users :users=true />
        <Contact />
        <Footer :email=true />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';

import Navbar from '@/components/navbar/navbar.vue';
import Services from '@/components/studio/studio-services.vue';
import Marketing from '@/components/market-cta.vue';
import Project from '@/components/studio/studio-project.vue';
import Switcher from '@/components/switcher.vue';
import Portfolio from '@/components/studio/studio-portfolio.vue';
import Users from '@/components/users.vue';
import Contact from '@/components/studio/studio-contact.vue';
import Footer from '@/components/footer/footer.vue';
import CompanyLogos from '@/components/company-logos.vue';

import image from '@/assets/images/studio/01.jpg';
import image2 from '@/assets/images/studio/02.jpg';
import image3 from '@/assets/images/studio/03.jpg';

const images = ref([image, image2, image3]);
const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};

onMounted(() => {
  tns({
    container: '.tiny-one-item',
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left"></i>',
      '<i class="mdi mdi-chevron-right"></i>'
    ],
    nav: false,
    speed: 400,
    gutter: 0,
  });
});
</script>