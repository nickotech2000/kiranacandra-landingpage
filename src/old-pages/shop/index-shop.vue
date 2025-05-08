<template>
    <div>
        <Navbar />
        <section class="relative mt-20">
            <div class="container-fluid relative">
                <div class="relative py-48 table w-full shadow-md overflow-hidden">
                    <div class="absolute inset-0 bg-[url('../../assets/images/shop/bg.jpg')] bg-no-repeat md:bg-left bg-center bg-cover"></div>
                    <div class="absolute inset-0 bg-slate-950/30"></div>
                    <div class="container relative">
                        <div class="grid grid-cols-1">
                            <div class="md:text-start text-center">
                                <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">New Accessories <br> Collections</h1>
                                <p class="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <div class="mt-6">
                                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i class="mdi mdi-cart-outline"></i> Shop Now</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative py-16">
            <div class="container relative">
                <div id="grid" class="md:flex w-full justify-center mx-auto mt-4">
                <Images />
                </div>
            </div>
            <Product />
        </section>

        <Categories />
        <Popular />
        <Cta />
        <Recentproduct />
        <MobileApp />
        <Footer :email=true />
        <Switcher />
        <Cookies />
    </div>

</template>

<script setup>
import Navbar from '@/components/navbar/navbar-shop.vue';
import Product from '@/components/shop/shop-products.vue';
import Categories from '@/components/christmas/christmas-categories.vue';
import Popular from '@/components/shop/popular-product.vue';
import Cta from '@/components/shop/shop-cta.vue';
import Recentproduct from '@/components/shop/recent-product.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer-shop.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import Images from '@/components/shop/shop-image.vue'
</script>
