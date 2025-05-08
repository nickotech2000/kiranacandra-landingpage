<template>
        <section class="relative md:py-24 py-16 md:pt-0 pt-0">
            <div class="container relative z-1">
                <div class="grid grid-cols-1 justify-center " data-wow-delay=".1s" :class="wowAnimate">
                    <div class="relative ">
                        <div class="grid grid-cols-1 md:text-start text-center justify-center">
                            <div class="relative">
                                <img :src="home" alt="">
                                <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox cursor-pointer size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="content md:mt-8">
                            <div class="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div class="lg:col-start-2 lg:col-span-10">
                                    <div class="grid md:grid-cols-2 grid-cols-1 items-center">
                                        <div class="mt-8">
                                            <div class="section-title text-md-start">
                                                <h6 class="text-white/50 text-lg font-semibold">Get Free Trial</h6>
                                                <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Get An Easy Start <br> With Techwind Now</h3>
                                            </div>
                                        </div>

                                        <div class="mt-8">
                                            <div class="section-title text-md-start">
                                                <p class="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                <router-link to="#" class="text-white">Read More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
        </section>

     <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe  src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
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
import { ref, defineProps } from 'vue';
import home from '@/assets/images/saas/home.png'

defineProps({
  wowAnimate: {
    type: String,
    required: true,
  }
});

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>