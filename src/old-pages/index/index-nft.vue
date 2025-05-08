<template>
    <div>
        <Navbar />

        <section class="relative md:py-52 py-36 items-center overflow-hidden bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
            <div class="absolute inset-0 ltr:bg-[url('../../assets/images/nft/hero.png')] rtl:bg-[url('../../assets/images/nft/hero-rtl.png')] bg-no-repeat bg-bottom bg-cover"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 items-center mt-10">
                    <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Discover Exclusive <br> Digital collectibles</h4>
                    <p class="text-lg max-w-xl">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                
                    <div class="mt-8">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Discover</router-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <Services />
            <Seller />
            <Products  />
        </section>

        <CtaNft />

        <section class="relative md:py-24 py-16">
            <Collections />
            <Blogs />
        </section>

        <Footer :email=true />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar-nft.vue';
import Services from '@/components/nft/nft-services.vue';
import Seller from '@/components/nft/nft-sellers.vue';
import Products from '@/components/nft/nft-products.vue';
import CtaNft from '@/components/nft/nft-cta.vue';
import Collections from '@/components/nft/nft-collections.vue';
import Blogs from '@/components/nft/nft-blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
</script>