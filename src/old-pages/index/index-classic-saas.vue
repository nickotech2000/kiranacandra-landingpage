<template>
<div>
    <navbar :lightlogo=true :issticky="'nav-white bg-white dark:bg-slate-900'" :loginButton=true />

    <section class="relative table w-full py-36 lg:py-44 overflow-hidden">
        <div class="container relative">
            <div class="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="md:col-span-7">
                    <div class="md:me-6">
                        <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white relative">Fast and clean help <br> <span class="absolute end-0 start-0 bottom-3 lg:h-3 h-2 w-auto rounded-md bg-indigo-600/30 relative text-indigo-600">Structure</span> your work</h4>
                        <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                        <div class="relative mt-8">
                            <router-link to="#"  class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2">Get Started</router-link>
                            <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="size-9 cursor-pointer inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><i class="mdi mdi-play text-xl align-middle"></i></router-link><small class="text-sm font-semibold uppercase align-middle ms-2">Watch Now</small>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-5">
                    <div class="relative">
                        <span class="absolute md:bottom-12 -bottom-20 lg:-start-0 md:-start-20 -start-24 bg-indigo-600 shadow-2xl shadow-indigo-600/40 -z-1 ltr:rotate-[130deg] rtl:-rotate-[130deg] w-[75rem] md:h-[55rem] h-[30rem] rounded-[20rem]"></span>
                        <img :src="image1" class="lg:max-w-none md:max-w-md" alt="">
                    </div>
                </div>

                <div class="overflow-hidden">
                    <span class="absolute h-32 w-32 bg-indigo-600/5 top-16 start-0  -z-1 rounded-3xl animate-[spin_10s_linear_infinite]"></span>
                </div>
            </div>
        </div>
    </section>

    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
        </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>

    <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div class="container relative">
          <companyLogos ></companyLogos>
        </div>
    </section>

    <features />

    <section class="relative md:py-24 py-16">
        <users :users=true />
    </section>

    <getfree />
    <mobileapp />
    <fooTer :email=true />
    <cookies />
    <switcher />
    
</div>
</template>

<script setup>
import { ref } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import companyLogos from '@/components/company-logos.vue';
import features from '@/components/features/features.vue';
import users from '@/components/users.vue';
import getfree from '@/components/get-free-trail.vue';
import mobileapp from '@/components/mobile-app.vue';
import fooTer from '@/components/footer/footer.vue';
import cookies from '@/components/start-cookies.vue';
import switcher from '@/components/switcher.vue';
import image1 from '@/assets/images/laptop.png'

const isActive = ref(false);

function toggle() {
  isActive.value = !isActive.value;
}
</script>
