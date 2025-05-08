<template>
    <div>
        <Navbar class="is-sticky bg-white dark:bg-slate-900" :lightlogo=true :loginButton=true />
        <section class="relative md:h-screen flex items-center py-36 overflow-hidden">
            <span class="absolute xl:bottom-96 xl:start-[30rem] xl:w-[75rem] xl:h-40 ltr:rotate-[115deg] rtl:rotate-[65deg] bg-indigo-600/10 -z-1 md:start-0 before:-start-0 -start-40 bottom-80 w-[75rem] h-60"></span>
            <span class="absolute bottom-40 xl:start-[45rem] xl:w-[90rem] xl:h-[35rem] ltr:rotate-[115deg] rtl:rotate-[65deg] bg-indigo-600 md:start-40 w-[75rem] h-[30rem]"></span>
            <div class="absolute inset-0 duration-500" id="overlay" :style="{ 'background-image': `url(${randomImage})` }"></div>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="md:col-span-7">
                        <div class="md:me-6">
                            <img :src="logo" class="mb-4" alt="">
                            <h4 class="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Build, Grow, And <br> Manage Your Brand</h4>
                            <p class="text-slate-400 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <div class="mt-6">
                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Learn More</router-link>
                                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white m-1 lightbox cursor-pointer"><i data-feather="video" class="size-4"></i></router-link><span class="font-semibold ms-1 align-middle">Watch Now</span>
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

        <section class="relative py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="flex">
                        <div class="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-xs dark:shadow-gray-800">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content ms-6">
                            <router-link to="#" class="text-lg font-medium hover:text-indigo-600">{{ item.name }}</router-link>
                            <p class="text-slate-400 mt-3">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Experience :team=true />
        <Iframe :iframe=true />
        <Services />

        <section class="relative md:mt-24 mt-16">
            <Users :users=true :Testimonial=true />
        </section>

        <div class="container relative mt-8">
            <Companylogo />
        </div>

        <Teams :Minds=true />
        <section class="relative md:my-24 my-16">
            <h6 class="text-indigo-600 text-center text-base mb-2">Blog</h6>
            <Blogs :blog=true :blog2=true />
        </section>
        
        <Footer />
        <Cookies />
        <Switcher/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import image from '@/assets/images/startup/01.png';
import image2 from '@/assets/images/startup/02.png';
import image3 from '@/assets/images/startup/03.png';
import logo from '@/assets/images/logo-icon-40.png';

import Navbar from '@/components/navbar/navbar.vue';
import Experience from '@/components/startup/startup-experience.vue';
import Iframe from '@/components/it-solution-iframe.vue';
import Services from '@/components/startup/startup-services.vue';
import Users from '@/components/users.vue';
import Companylogo from '@/components/company-logos.vue';
import Teams from '@/components/startup/startup-team.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer-small.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

const isActive = ref(false);
const randomImage = ref('');
const backgroundImages = [image, image2, image3];
const datas = ref([
  {
    icon: 'uil uil-water',
    name: '24/7 Support',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-dropbox',
    name: 'Take Ownership',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-focus-target',
    name: 'Team Work',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  }
]);

const toggle = () => {
  isActive.value = !isActive.value;
};

const changeBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  randomImage.value = backgroundImages[randomIndex];
};

onMounted(() => {
  changeBackground();
  setInterval(changeBackground, 4000);
});
</script>