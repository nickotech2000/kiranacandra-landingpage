<template>
    <div>
        <Navbar />
        <section class="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-14">
                    <h3 class="text-3xl leading-normal font-semibold">Shop Story</h3>
                </div>

                <div class="relative text-center mt-3">
                    <ul class="tracking-[0.5px] mb-0 inline-block">
                        <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                            <router-link to="/index-shop">Techwind</router-link>
                        </li>
                        <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                            <i class="uil uil-angle-right-b"></i>
                        </li>
                        <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">About us</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="relative md:mt-24 mt-16">
            <div class="container">
                <div class="md:flex justify-center">
                    <div class="lg:w-3/5 text-center">
                        <h5 class="text-2xl font-semibold">Techwind Shop</h5>
                        <p class="text-slate-400 mt-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                </div>
            </div>
            <Features />
            <div class="container relative md:mt-24 mt-16">
                <div id="grid" class="md:flex w-full justify-center mx-auto mt-4">
                    <Images />
                </div>
            </div>
        </section>
        <MobileApp />
        <Footer />
        <Switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar-shop.vue';
import Features from '@/components/shop/shop-features.vue';
import Images from '@/components/shop/shop-image.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer-shop.vue';
import Switcher from '@/components/switcher.vue'
</script>
