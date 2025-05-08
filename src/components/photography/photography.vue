<template>
   <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Photography</h3>

                <p class="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end  result.</p>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <div class="relative overflow-hidden h-fit">
                    <img :src="image1" class="rounded-md" alt="">
                    <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                    <div class="absolute text-center p-6 bottom-0 start-0 end-0">
                        <router-link to="photography-about" class="font-semibold text-lg">Jack Jeffrey <i class="uil uil-arrow-up-right"></i></router-link>
                    </div>
                </div>

                <div class="relative overflow-hidden h-fit lg:mt-16">
                    <img :src="image2" class="rounded-md" alt="">
                    <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                    <div class="absolute text-center p-6 bottom-0 start-0 end-0">
                        <router-link to="/photography-portfolio" class="font-semibold text-lg">Portfolio <i class="uil uil-arrow-up-right"></i></router-link>
                    </div>
                </div>

                <div class="relative overflow-hidden h-fit">
                    <img :src="image3" class="rounded-md" alt="">
                    <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                    <div class="absolute text-center p-6 bottom-0 start-0 end-0">
                        <router-link to="/contact-two" class="font-semibold text-lg">Contact <i class="uil uil-arrow-up-right"></i></router-link>
                    </div>
                </div>

                <div class="relative overflow-hidden h-fit lg:mt-16">
                    <img :src="image4" class="rounded-md" alt="">
                    <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                    <div class="absolute text-center p-6 bottom-0 start-0 end-0">
                        <a href="#aboutme" class="font-semibold text-lg">About Me <i class="uil uil-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import image1 from '@/assets/images/photography/01.jpg'
import image2 from '@/assets/images/photography/02.jpg'
import image3 from '@/assets/images/photography/03.jpg'
import image4 from '@/assets/images/photography/04.jpg'
</script>