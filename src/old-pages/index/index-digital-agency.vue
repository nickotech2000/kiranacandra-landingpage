<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />
    <section class="relative table w-full py-36 lg:py-44">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="md:col-span-6">
                    <div class="md:me-6">
                        <img :src="logoIcon" class="mb-5" alt="">
                        <p class="text-indigo-600 text-lg font-medium mb-4">We are a very dedicated team</p>
                        <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">We are a full-service digital agency</h4>
                        <p class="text-slate-400 text-lg max-w-xl">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>

                        <div class="mt-6">
                            <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox cursor-pointer"><i data-feather="video" class="size-4"></i></router-link><span class="font-semibold ms-2 align-middle">Watch Now</span>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-6">
                    <div class="grid grid-cols-12 gap-4 items-center">
                        <div class="col-span-5">
                            <div class="grid grid-cols-1 gap-4">
                                <img :src="about2" class="shadow-sm rounded-lg" alt="">

                                <div class="ms-auto">
                                    <div class="size-28 bg-indigo-600/10 rounded-lg"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-7">
                            <div class="grid grid-cols-1 gap-4">
                                <img :src="about1" class="shadow-sm rounded-lg" alt="">
                            </div>
                        </div>
                    </div>
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

    <div class="container relative mb-16 mt-8">
        <div class="grid grid-cols-1 pb-4 text-center">
            <h6 class="text-slate-400 text-lg">We are very fortunate to work with these amazing partners</h6>
        </div>
        <Companylogo />
    </div>

    <Digitalagency />
    <Services />
    <Pricing />
    <Cta />

    <section class="relative md:mt-24 mt-16">
        <Users :Testimonial=true :customer=true />
    </section>

    <DigitalPortfolio />
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Companylogo from '@/components/company-logos.vue';
import Digitalagency from '@/components/digital/digital-agency.vue';
import Services from '@/components/digital/digital-service.vue';
import Pricing from '@/components/marketing/marketing-pricing.vue';
import Cta from '@/components/market-cta.vue';
import Users from '@/components/users.vue';
import DigitalPortfolio from '@/components/digital/digital-agency-portfolio.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

import logoIcon from '@/assets/images/logo-icon-40.png'
import about1 from '@/assets/images/digital/01.jpg'
import about2 from '@/assets/images/digital/02.jpg'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>