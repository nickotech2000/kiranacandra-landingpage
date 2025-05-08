<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="swiper-slider-hero relative block h-screen" id="home">
        <div class="swiper-container absolute end-0 top-0 w-full h-full">
            <swiper class="swiper-wrapper" :modules="modules" :autoplay="true" :pagination="{ type: 'fraction', }">
                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div class="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-[url('../../assets/images/corporate/1.jpg')] bg-center;">
                        <div class="absolute inset-0 bg-slate-900/70"></div>
                        <div class="container relative">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <h1 class="font-semibold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Discover the world of <br> business</h1>
                                    <p class="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                    <div class="mt-6">
                                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div class="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-[url(../../assets/images/corporate/2.jpg)] bg-center;">
                        <div class="absolute inset-0 bg-slate-900/70"></div>
                        <div class="container relative">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <h1 class="font-semibold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Meet our brand <br> new solution</h1>
                                    <p class="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                    <div class="mt-6">
                                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>

    <section class="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
        <Services />
        <Expert />
    </section>

    <Keyfeature :seemore2=true />
    <Cta />
    <Pricing />

    <section class="relative md:mt-24 mt-16">
        <Users :users=true />
    </section>

    <section class="relative md:my-24 my-16">
        <Blogs />
    </section>
    
    <Cookies />
    <Switcher />
    <Footer :email=true />
</div>
</template>


<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Autoplay, Pagination } from 'swiper/modules';

    import Navbar from '@/components/navbar/navbar.vue';
    import Services from '@/components/corporate/corporate-services.vue';
    import Expert from '@/components/corporate/corporate-expert.vue';
    import Keyfeature from '@/components/features/key-features.vue';
    import Cta from '@/components/corporate/corporate-cta.vue';
    import Pricing from '@/components/comfortable-rates.vue';
    import Users from '@/components/users.vue';
    import Blogs from '@/components/blogs/blogs.vue';
    import Footer from '@/components/footer/footer.vue';
    import Switcher from '@/components/switcher.vue';
    import Cookies from '@/components/start-cookies.vue';

    // Import Swiper modules
    const modules = [Navigation, Autoplay, Pagination];
</script>