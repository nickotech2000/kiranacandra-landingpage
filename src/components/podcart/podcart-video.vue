<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center">
                <div class="md:col-span-6">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Podcasts</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">All Podcasts from<br> Audio & Video</h3>
                </div>

                <div class="md:col-span-6">
                    <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 relative mt-8">
                <div class="tiny-three-item-icon">
                    <div v-for="item in datas" :key="item" class="tiny-slide">
                        <div class="group relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden m-3">
                            <div class="relative">
                                <img :src="item.image" alt="">

                                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-indigo-600 absolute top-3 end-3 cursor-pointer"><i class="mdi mdi-play"></i></router-link>

                                <div class="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                    <div class="pb-4 ps-4 flex items-center">
                                        <img :src="item.image2" class="size-10 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="">
                                        <div class="ms-3">
                                            <router-link to="#" class="font-semibold text-white block">{{item.name}}</router-link>
                                            <span class="text-white/70 text-sm">{{item.subscribe}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="content p-6">
                                <audio controls class="block w-full max-w-md mx-auto mb-3">
                                    <source :src="audio" type="audio/mpeg">
                                </audio>

                                <router-link to="/blog-youtube-post" class="title h5 text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{{ item.song }}</router-link>
                                <p class="text-slate-400 mt-3">{{item.title}}</p>

                                <div class="mt-4">
                                    <router-link to="/blog-youtube-post" class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Watch Now <i class="uil uil-arrow-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
import { tns } from 'tiny-slider/src/tiny-slider';
import podcast1 from '@/assets/images/podcast/p1.jpg'
import podcast2 from '@/assets/images/podcast/p2.jpg'
import podcast3 from '@/assets/images/podcast/p3.jpg'
import podcast4 from '@/assets/images/podcast/p4.jpg'
import podcast5 from '@/assets/images/podcast/p5.jpg'
import podcast6 from '@/assets/images/podcast/p6.jpg'

import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

import audio from '@/assets/images/audio.mp3'

const isActive = ref(false);

const datas = ref([
  {
    image: podcast1,
    image2: client1,
    name: 'Calvin Carlo',
    subscribe: '4k Subscribe',
    song: 'Design your apps in your own way',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    image: podcast2,
    image2: client2,
    name: 'Calvin Carlo',
    subscribe: '4k Subscribe',
    song: 'How apps is changing the IT world',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    image: podcast3,
    image2: client3,
    name: 'Calvin Carlo',
    subscribe: '4k Subscribe',
    song: 'Smartest Applications for Business',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    image: podcast4,
    image2: client4,
    name: 'Calvin Carlo',
    subscribe: '4k Subscribe',
    song: 'Design your apps in your own way',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    image: podcast5,
    image2: client5,
    name: 'Calvin Carlo',
    subscribe: '4k Subscribe',
    song: 'How apps is changing the IT world',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    image: podcast6,
    image2: client6,
    name: 'Calvin Carlo',
    subscribe: '4k Subscribe',
    song: 'Smartest Applications for Business',
    title: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
]);

const toggle = () => {
  isActive.value = !isActive.value;
};

onMounted(() => {
  tns({
    container: '.tiny-three-item-icon',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      992: { items: 3 },
      767: { items: 2 },
      320: { items: 1 },
    },
  });
});
</script>
