<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />
    <section class="relative items-center overflow-hidden">
        <span class="absolute xl:-top-[30%] lg:-top-[50%] sm:-top-[80%] -top-[90%] -start-80 end-0 w-[140rem] h-[65rem] ltr:-rotate-12 rtl:rotate-12 bg-indigo-600/5 dark:bg-indigo-600/10 z-1"></span>
        <div class="container relative z-2">
            <div class="grid grid-cols-1 md:mt-44 mt-32 text-center">
                <div class="wow animate__animated animate__fadeIn">
                    <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Build fast, Released quickly.</h4>
                    <p class="text-slate-400 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                    <div class="mt-6">
                        <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Try For Free</router-link>
                        <p class="text-slate-400 text-sm mt-3">No credit card required. Free 14-days trial</p>
                    </div>
                </div>
                <div class="relative mt-8 z-3 wow animate__animated animate__fadeIn">
                    <img :src="image1" alt="" class="mover">
                </div>
            </div>

            <div class="bg-indigo-600 w-8 h-16 z-2 absolute start-2 lg:bottom-28 md:bottom-36 sm:bottom-40 bottom-16"></div>
            <div class="bg-indigo-600/20 w-8 h-16 z-2 absolute start-12 lg:bottom-32 md:bottom-40 sm:bottom-44 bottom-20"></div>

            <div class="bg-indigo-600/20 w-8 h-16 z-2 absolute end-12 xl:bottom-[420px] lg:bottom-[315px] md:bottom-[285px] sm:bottom-80 bottom-32"></div>
            <div class="bg-indigo-600 w-8 h-16 z-2 absolute end-2 xl:bottom-[440px] lg:bottom-[335px] md:bottom-[305px] sm:bottom-[340px] bottom-36"></div>
        </div>
    </section>
    <section class="py-6">
        <div class="container relative">
            <Companylogos />
        </div>
    </section>
    <section class="relative overflow-hidden">
        <Features :seemore=true :wowAnimate="'wow animate__animated animate__fadeInUp'" />
        <WhyTechwind :wowAnimate="'wow animate__animated animate__fadeInUp'" />
    </section>
    <Cookies />
    <section class="relative md:py-24 py-16">
        <Users :wowAnimate="'wow animate__animated animate__fadeInUp'" :users=true />
    </section>
    <GetFree :wowAnimate="'wow animate__animated animate__fadeInUp'" />
    <ComfortableRate :rates=false :wowAnimate="'wow animate__animated animate__fadeInUp'" />
    <section class="md:py-24 py-16" >
        <Blogs :wowAnimate="'wow animate__animated animate__fadeInUp'" />
    </section>
    <Switcher />
    <Footer :email=true />
</div>
</template>

<script setup>
    import Navbar from '@/components/navbar/navbar.vue';
    import Features from '@/components/features/key-features.vue';
    import WhyTechwind from '@/components/why-loves-techwind.vue';
    import Users from '@/components/users.vue';
    import GetFree from '@/components/get-free-trail.vue';
    import ComfortableRate from '@/components/comfortable-rates.vue';
    import Blogs from '@/components/blogs/blogs.vue';
    import Cookies from '@/components/start-cookies.vue';
    import Switcher from '@/components/switcher.vue';
    import Footer from '@/components/footer/footer.vue';
    import Companylogos from '@/components/company-logos.vue';
    import image1 from '@/assets/images/saas/classic01.png'
</script>