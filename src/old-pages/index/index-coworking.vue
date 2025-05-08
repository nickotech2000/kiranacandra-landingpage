<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative md:py-60 py-36 items-center">
        <div class="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            <iframe src="https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
        </div>
        <div class="absolute inset-0 opacity-20 bg-[url('../../assets/images/map.svg')] bg-no-repeat bg-center bg-cover"></div>
        <div class="absolute inset-0 bg-slate-900/70"></div>

        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <img :src="logo" class="block mx-auto animate-[spin_10s_linear_infinite]" alt="">
                <h3 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">Coworking Just Feels Right</h3>

                <p class="text-slate-300 text-lg max-w-2xl mx-auto">Coworking spaces offer a wealth of advantages for self starters, including networking opportunities, daily structure, and increased productivity.</p>

                <div class="subcribe-form z-1 mt-8">
                    <form class="relative mx-auto max-w-xl">
                        <i data-feather="map-pin" class="size-5 absolute top-[48%] -translate-y-1/2 start-4"></i>
                        <input type="text" id="search_name" name="name" class="pt-4 pe-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 ps-12" placeholder="Washington, D.C.">
                        <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Find A Space</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Effective :Effective=true :History=true />
    <Services />
    <Works />
    <section class="relative md:my-24 my-16 md:pt-0 pt-0">
        <Cta />
        <CoWorking />
    </section>
    <Users :users=true />
    <section class="relative md:my-24 my-16">
        <Blogs />
    </section>
    <Contact />
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Effective from '@/components/powerful-digitalization.vue';
import Services from '@/components/coworking/coworking-services.vue'
import Works from '@/components/coworking/coworking-works.vue';
import Cta from '@/components/market-cta.vue';
import CoWorking from '@/components/coworking/coworking-management.vue';
import Users from '@/components/users.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Contact from '@/components/coworking/coworking-contact.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue'
import logo from '@/assets/images/logo-icon-64.png'
</script>
