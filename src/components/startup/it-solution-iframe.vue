<template>
      <section v-if="iframe" class="py-28 w-full table relative bg-[url('../../assets/images/cta.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-4 md:text-3xl text-2xl text-white font-medium">No Confuse, just use the app</h3>
                    <p class="text-white/70 max-w-xl mx-auto">We make our app and solution as simple as turn on your lights</p>
                    <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10 cursor-pointer">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </router-link>
                </div>
            </div>
        </section>
    
        <section v-else class="py-20 w-full table relative bg-[url('../../assets/images/team.jpg')] bg-center bg-no-repeat bg-cover md:my-24 mt-16">
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-4 md:text-3xl text-2xl text-white font-medium">No Confuse, just use the app</h3>
                    <p class="text-white/70 max-w-xl mx-auto">We make our app and solution as simple as turn on your lights</p>
                    <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10 cursor-pointer">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </router-link>
                </div>
            </div>
        </section>
        
        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/6NVWtPLeQ_w?si=7j0rJLY5FyF9g2lz" width="700" height="500" frameborder="0"></iframe>
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

defineProps({
  iframe: {
    type: Boolean,
    required: true,
  }
});

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>