<template>
    <div class="container relative">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div class="lg:col-span-5 md:col-span-6">
                <div class="relative">
                    <img :src="about" class="rounded-full" alt="">
                    <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                        <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                            class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </router-link>
                    </div>

                    <div class="absolute top-0 start-0 -z-1">
                        <img :src="dots" alt="">
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 md:col-span-6">
                <div class="lg:ms-5">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">About Me</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Unleash Your Real <br> Potential and <br> Live Limitless!</h3>
                    <p class="text-slate-400 max-w-xl">I am glad that you have made it here to send a distress signal, and inform the Senate that all on board were killed. Dantooine. I’m not going to Alderaan. I really got to go.</p>
                    <p class="text-slate-400 max-w-xl mt-2">But that to me. Send a distress signal, and inform the Senate that all on board were killed. Dantooine. They’re on Dantooine. The plans you refer to will soon be back in our hands. Alderaan? I’m not going to Alderaan. I got to go home.</p>
                    <img :src="sign" class="mt-3" alt="">
                </div>
            </div>
        </div>
    </div>

    <div :class="isOpen ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
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
import { ref } from 'vue';
import about from '@/assets/images/coach/about.jpg'
import dots from '@/assets/images/illustrator/dots.svg'
import sign from '@/assets/images/sign.png'

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>
