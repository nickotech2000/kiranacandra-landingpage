<template>
    <section class="py-20 w-full table relative bg-[url('../../assets/images/spa/cta.jpg')]  bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
        <div class="absolute inset-0 bg-slate-900/70"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 text-center">
                <h3 class="mb-6 md:text-4xl text-3xl !font-ebgaramond text-white font-medium">Stop leaving money on the table.</h3>
                <p class="text-white/80 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
                <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10 cursor-pointer">
                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </router-link>
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
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.min.css';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};

onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
});
</script>