<template>
<div>
    <navbar :navLight="'nav-light'" />
    <!-- Start Hero -->
    <section id="controls-carousel" class="relative swiper-slider-hero" data-carousel="static">
        <swiper :modules="modules" :autoplay="true" :effect="fade" :speed="900" :pagination="{ type: 'fraction', }"
            class="swiper-wrapper overflow-hidden relative !h-screen inset-0">
            <swiper-slide
                class="swiper-slide flex items-center justify-center duration-1000 bg-[url('../../assets/images/furniture/bg01.jpg')] bg-center bg-no-repeat bg-cover h-screen"
                data-carousel-item="active">
                <div
                    class="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                    <h5 class="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                    <h1 class="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Modern
                        <br> Furniture</h1>

                    <div class="mt-8">
                        <a href=""
                            class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Shop
                            Now <i class="uil uil-arrow-right"></i></a>
                           
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide
                class="flex items-center justify-center duration-1000 bg-[url('../../assets/images/furniture/bg02.jpg')] bg-center bg-no-repeat bg-cover !h-screen"
                data-carousel-item="">
                <div
                    class="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                    <h5 class="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                    <h1 class="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Dream
                        <br> Sofa Design</h1>

                    <div class="mt-8">
                        <a href=""
                            class="relative grpup inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 grpup-hover:w-full end-0 grpup-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Shop
                            Now <i class="uil uil-arrow-right"></i></a>
                            
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide
                class="flex items-center justify-center duration-1000 bg-[url('../../assets/images/furniture/bg03.jpg')] bg-center bg-no-repeat bg-cover"
                data-carousel-item="">
                <div
                    class="absolute md:end-0 md:start-auto bottom-0 w-full lg:w-[700px] md:w-[500px] h-fit bg-white dark:bg-slate-900 md:p-20 p-10">
                    <h5 class="uppercase font-bold mb-4 text-sm">New Arrivals</h5>
                    <h1 class="font-bold dark:text-white lg:leading-normal leading-normal text-3xl lg:text-5xl">Look
                        <br> Modern House</h1>

                    <div class="mt-8">
                        <a href=""
                            class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Shop Now <i class="uil uil-arrow-right"></i></a>
                            
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section><!--end section-->
    <!-- End Hero -->
    <section class="relative md:py-24 py-16">
        <items />
        <products />
    </section>
    <cta />
    <section class="relative md:py-24 py-16">
        <features />
        <services />
    </section>
    <furniturepost />
    <Footer />
    <switcher />
</div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import items from '@/components/furniture/furniture-item.vue'
import products from '@/components/furniture/furniture-products.vue';
import cta from '@/components/furniture/furniture-cta.vue'
import features from '@/components/furniture/furniture-features.vue'
import services from '@/components/furniture/furniture-services.vue';
import furniturepost from '@/components/furniture/furniture-post.vue';
import Footer from '@/components/footer/footer-small.vue';
import switcher from '@/components/switcher.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        navbar,
        Swiper,
        SwiperSlide,
        items,
        products,
        cta,
        features,
        services,
        furniturepost,
        Footer,
        switcher
    },
    setup() {
        return {
            modules: [Navigation, Autoplay, Pagination],
        };
    },
}
</script>

<style lang="scss" scoped></style>