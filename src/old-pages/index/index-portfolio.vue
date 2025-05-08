<template>
    <div>
        <Navbar :lightlogo=true loginButton=true />
       <section class="relative table w-full pt-28 lg:pt-36">
            <div class="container relative">
                <div class="grid grid-cols-1 mt-10 text-center">
                    <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text mb-5">Building <br> digital products, brands, <br> and experience.</h4>
                    <p class="text-slate-400 text-lg max-w-xl mx-auto">A <span class="text-black dark:text-white font-semibold">Product Designer</span> and <span class="text-black dark:text-white font-semibold">Visual Developer</span> in NY. We specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
                    <div class="mt-6">
                        <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i class="uil uil-envelope"></i> Contact Us</router-link>
                    </div>
                </div>
            </div>
        </section>
        <Datas />
        <Footer />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Datas from '@/components/portfolio/portfolio-data.vue';
import Footer from '@/components/footer/footer-small.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
</script>