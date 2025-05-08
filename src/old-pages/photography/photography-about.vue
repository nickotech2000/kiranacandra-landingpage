<template>
    <div>
        <Navbar />
        <section class="relative md:py-56 py-44 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax" data-jarallax data-speed="0.5" id="aboutme">
            <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>
            <div class="absolute text-center p-6 bottom-0 start-0 end-0">
                <h5 class="text-slate-900 dark:text-white/70 font-semibold text-lg">I'm Jack Jeffrey</h5>
                <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">About Me</h3>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <div class="rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                        <div class="md:flex items-center">
                            <div class="relative md:shrink-0">
                                <img :src="about" class="h-full w-full object-cover lg:w-[500px] md:w-80 lg:h-full md:h-96" alt="">
                            </div>

                            <div class="p-8">
                                <div class="flex">
                                    <div class="w-1/2">
                                        <h2 class="text-3xl mb-2 font-bold flex"><count-up class="counter-value" :start-val="1" :end-val="9"></count-up>+</h2>
                                        <h6 class="text-slate-400 mb-0">Years of Experience</h6>
                                    </div>
                                    <div class="w-1/2">
                                        <h2 class="text-3xl mb-2 font-bold flex"><count-up class="counter-value" :start-val="40" :end-val="1542"></count-up>+</h2>
                                        <h6 class="text-slate-400 mb-0">Total Photo Click</h6>
                                    </div>
                                </div>
                                <p class="text-slate-400 dark:text-white mt-6">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <router-link to="/contact-two" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 duration-500 ease-in-out mt-6">Get in touch <i class="uil uil-arrow-right"></i><span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600 dark:bg-white"></span></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Brands />
            <GetInTouch />
        </section>
        <Footer />
        <switcher />
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';
import CountUp from 'vue-countup-v3';
import Navbar from '@/components/navbar/navbar-photography.vue';
import Brands from '@/components/photography/photography-brands.vue';
import GetInTouch from '@/components/photography/photography-getintouch.vue';
import Footer from '@/components/footer/photography-footer.vue';
import Switcher from '@/components/switcher.vue';
import about from '@/assets/images/photography/about.jpg'

const darkmode = () => {
  document.documentElement.classList.add('dark');
};

onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
  darkmode();
});
</script>

<style lang="scss" scoped></style>