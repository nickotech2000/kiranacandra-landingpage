<template>
     <section class="py-20 w-full table relative bg-[url('../../assets/images/personal/cta.jpg')] jarallax" data-jarallax data-speed="0.5" >
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl text-2xl text-white font-medium">I Am Available For Freelancer Projects.</h3>
                    <p class="text-white/80 max-w-xl mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    <div class="relative mt-8">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Hire Me</router-link>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';

onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
});
</script>