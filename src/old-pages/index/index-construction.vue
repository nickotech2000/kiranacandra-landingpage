<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />

    <section class="relative md:h-screen py-36 flex items-center bg-[url('../../assets/images/construction/bg.jpg')] bg-center overflow-hidden bg-cover">
        <div class="absolute inset-0 bg-white/30 dark:bg-slate-900/60"></div>
        <div class="container relative z-1">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                    <div class="md:me-6">
                        <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Start building <br> your dream home</h4>
                        <p class="text-slate-900 dark:text-white/75 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <div class="mt-6">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</router-link>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                    <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox lg:size-24 size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto cursor-pointer">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
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

    <section class="relative md:py-24 py-16">
        <Features />
        <Companys />
        <Projects />
    </section>
    
    <Values />
    <Teams :Minds=true />
    <section class="relative md:py-24 py-16">
        <Blogs :blog=true :name=true />
    </section>
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Features from '@/components/construction/construction-features.vue';
import Companys from '@/components/construction/construction-companys.vue';
import Projects from '@/components/construction/construction-projects.vue';
import Values from '@/components/construction/construction-value.vue';
import Teams from '@/components/startup/startup-team.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>
