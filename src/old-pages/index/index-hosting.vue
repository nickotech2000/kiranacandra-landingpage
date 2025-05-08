<template>
<div>
    <Navbar :navLight="'nav-light'" />

    <section class="relative table w-full py-36 lg:py-52 bg-[url('../../assets/images/hosting/bg-hosting.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h5 class="text-lg text-white font-medium mb-3">Bring your ideas to life</h5>
                <h3 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Powerful Web Hosting Services</h3>

                <p class="text-slate-300 text-lg max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                <div class="mt-8">
                    <router-link t0="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="relative md:py-24 py-16 pt-5">
        <HostingSlider />
        <HostingService />
        <HostingServer />
    </section>

    <HostingPricing />

    <section class="relative md:py-24 py-16 bg-[url('../../assets/images/hosting/bg.png')] bg-bottom bg-no-repeat bg-cover">
        <Users :customer=true />
        <HostingAsked />
    </section>

    <Footer :email=true />

    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import HostingSlider from '@/components/hosting/hosting-slide.vue';
import HostingService from '@/components/hosting/hosting-services.vue';
import HostingServer from '@/components/hosting/hosting-server.vue';
import HostingPricing from '@/components/hosting/hosting-pricing.vue';
import Users from '@/components/users.vue';
import HostingAsked from '@/components/hosting/hosting-questions.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue'
</script>
