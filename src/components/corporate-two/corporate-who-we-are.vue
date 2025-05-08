<template>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-4 md:col-span-6 lg:order-1 order-2 lg:text-center">
                        <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white duration-500 ease-in-out mx-auto cursor-pointer">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </router-link>

                        <h6 class="text-indigo-600 text-sm font-bold uppercase mt-8 mb-2">About Us</h6>
                        <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-bold">Who we are ?</h3>
                        <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                    
                    <div class="lg:col-span-4 md:col-span-6 lg:order-2 order-1">
                        <img :src="well" class="shadow-md dark:shadow-gray-800" alt="">
                    </div>
                    
                    <div class="lg:col-span-4 md:col-span-12 lg:order-3 order-2">
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Our Talented &amp; Experienced Marketing Agency</li>
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Create your own skin to match your brand</li>
                        </ul>
                    </div>
                </div>
            </div>

                     
        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
            </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"  @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

</template>

<script setup>
import { ref } from 'vue';
import well from '@/assets/images/corporate/experience-wall.jpg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
