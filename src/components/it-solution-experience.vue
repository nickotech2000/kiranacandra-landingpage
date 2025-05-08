<template>
    <div class="container relative">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div class="lg:col-span-5 md:col-span-6">
                <div class="grid grid-cols-12 gap-6 items-center">
                    <div class="col-span-6">
                        <div class="grid grid-cols-1 gap-6">
                            <img :src="about3" class="shadow-sm rounded-md" alt="">
                            <img :src="about2" class="shadow-sm rounded-md" alt="">
                        </div>
                    </div>

                    <div class="col-span-6">
                        <div class="grid grid-cols-1 gap-6">
                            <img :src="about1" class="shadow-sm rounded-md" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 md:col-span-6">
                <div class="lg:ms-5">
                    <div class="flex mb-4">
                        <span class="text-indigo-600 text-2xl font-bold flex"><count-up class="counter-value text-6xl font-bold" :start-va="1" :end-val="15"></count-up><span class="text-indigo-600 text-2xl font-bold mt-6">+</span></span>
                        
                        <span class="self-end font-medium ms-2">Years <br> Experience</span>
                    </div>

                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Who we are ?</h3>

                    <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>
                
                    <div class="mt-6">
                        <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i class="uil uil-envelope"></i> Contact us</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import about1 from '@/assets/images/about/ab01.jpg'
import about2 from '@/assets/images/about/ab02.jpg'
import about3 from '@/assets/images/about/ab03.jpg'
</script>

