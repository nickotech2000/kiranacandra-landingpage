<template>
     <section class="relative table w-full py-36 bg-[url('../../assets/images/event/bg2.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mb-12 cursor-pointer">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </router-link>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Let's Make Something Together</h3>
                    <p class="text-white/80 max-w-xl mx-auto">The Biggest Event Ever</p>
                </div>
            </div>
        </section>

    <div :class="isActive ? 'fixed' : 'hidden'"  class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
        </div>
        <button class="text-slate-400 absolute top-[20px] right-[20px]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>