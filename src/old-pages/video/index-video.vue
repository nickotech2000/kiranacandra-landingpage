<template>
    <div>
    <Navbar />
        <section class="relative h-screen flex items-center">
            <div class="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <iframe src="https://www.youtube.com/embed/gJpXlRkW6Fw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
            </div>
            <div class="absolute inset-0 bg-black/40"></div>
            
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <img :src="bg" alt="">
                </div>
            </div>

            <div class="container-fluid relative">
                <div class="fixed bottom-0 start-0 end-0 pb-8">
                    <div class="container relative">
                        <div class="grid grid-cols-1">
                            <div class="block">
                                <div class="flex justify-between">
                                    <h5 class="text-white text-xl font-semibold">Videos for Ads</h5>
                                    <router-link to="/video-portfolio" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-white hover:text-white duration-500 ease-in-out">See Videos <i class="uil uil-arrow-right"></i></router-link>
                                    <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar-video-light.vue'
import bg from '@/assets/images/video/bg.png'
import Switcher from '@/components/switcher.vue';

</script>