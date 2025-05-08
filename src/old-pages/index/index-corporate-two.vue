<template>
    <div>
        <Navbar :navLight="'nav-light'" />

        <section class="relative table w-full py-36 lg:py-64 bg-[url('../../assets/images/corporate/bg.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b to-transparent via-gray-900/50 from-gray-900"></div>
            <div class="absolute inset-0 bg-[url('../../assets/images/overlay.png')] bg-repeat bg-center bg-cover"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <span class="text-white/60 font-bold text-sm mb-3">HAVE YOU NOTICED</span>
                    <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Small Details Create <br> The Big Picture</h4>
                    <p class="text-white/60 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                    <div class="mt-8">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-indigo-600 border-gray-50 hover:border-indigo-600 text-slate-900 hover:text-white rounded-md">Learn More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </section>

        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-indigo-600">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <Support />
        <section class="relative md:py-24 py-16">
            <WhoWeAre />
            <Industries />
            <Iframe />
            <Work />
            <Clients />
        </section>

        <Blogs :blog=true />

        <section class="relative md:mt-24 mt-16">
            <Footer :email=true />
        </section>

        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Support from '@/components/corporate-two/corporate-support.vue';
import WhoWeAre from '@/components/corporate-two/corporate-who-we-are.vue';
import Industries from '@/components/corporate-two/industries-serve.vue';
import Iframe from '@/components/it-solution-iframe.vue';
import Work from '@/components/corporate-two/corporate-work.vue';
import Clients from '@/components/software-client.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
</script>