<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="flex md:h-screen py-36 items-center bg-[url('../../assets/images/gym/bg1.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Build Your Body Strong</h3>
                <p class="text-slate-300 text-lg max-w-xl mx-auto">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                <div class="mt-8">
                    <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="py-2 px-5 inline-block font-semibold tracking-wide border duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full align-middle lightbox p-1 ps-4 cursor-pointer">3:07 Min video <span class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full ms-2"><i class="mdi mdi-play"></i></span></router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1 justify-center">
                <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0">
                    <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
                        <div v-for="gym in gyms" :key="gym" class="group relative overflow-hidden p-6 rounded-lg shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500 border-t-8 border-indigo-600/50">
                            <img :src="gym.image" class="size-16 mx-auto" alt="">
                            <div class="content mt-7">
                                <h2 class="title text-xl font-semibold">{{ gym.name }}</h2>
                                <p class="text-slate-400 mt-3">{{ gym.desc }}</p>
                            </div>

                            <div class="hidden group-hover:block">
                                <div class="absolute inset-0">
                                    <img :src="gym.image2" alt="">
                                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                                </div>

                                <div class="absolute bottom-0 start-0 end-0 mb-6">
                                    <router-link to="#" class="text-white text-xl font-bold">{{ gym.title }}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FitnessCenter />
        <Gallery />
        <Schedule />
        <Tainer />
    </section>
    <Membership />
    <section class="md:mt24 mt-16">
        <Users :Testimonial=true  :gym=true />
    </section>
    <Blogs />
    <Footer :email=true />
    <Switcher />
    <Cookies />

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
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import FitnessCenter from '@/components/gym/fitness-center.vue';
import Gallery from '@/components/gym/gym-gallery.vue';
import Schedule from '@/components/gym/gym-schedule.vue';
import Tainer from '@/components/gym/gym-tainer.vue';
import Membership from '@/components/gym/gym-membership.vue';
import Users from '@/components/users.vue';
import Blogs from '@/components/gym/gym-blogs.vue';
import Footer from '@/components/footer/footer-two.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import icon1 from '@/assets/images/gym/icon/scale.png'
import icon2 from '@/assets/images/gym/icon/kettlebell.png'
import icon3 from '@/assets/images/gym/icon/water-bottle.png'
import fea1 from '@/assets/images/gym/fea01.jpg'
import fea2 from '@/assets/images/gym/fea02.jpg'
import fea3 from '@/assets/images/gym/fea03.jpg'

const isActive = ref(false);
const gyms = ref([
  {
    image: icon1,
    name: 'Progression',
    desc: 'After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination.',
    image2: fea1,
    title: 'Progression'
  },
  {
    image: icon2,
    name: 'Workouts',
    desc: 'After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination.',
    image2: fea2,
    title: 'Workouts'
  },
  {
    image: icon3,
    name: 'Nutrition',
    desc: 'After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination.',
    image2: fea3,
    title: 'Nutrition'
  }
]);

const darkmode = () => {
  document.documentElement.classList.add('dark');
};

const toggle = () => {
  isActive.value = !isActive.value;
};

onMounted(() => {
  darkmode();
});
</script>