<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />
        <section class="relative table w-full py-36 overflow-hidden bg-gradient-to-b to-transparent from-indigo-600/20 dark:from-indigo-600/40">
            <div class="container relative">
                <div class="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="md:col-span-6">
                        <div class="md:me-8">
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white relative">Easy way to <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-600 relative inline-block"><span class="relative text-white">manage</span></span> your over work</h4>
                            <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                            <div class="subcribe-form mt-6 mb-3">
                                <form class="relative max-w-xl">
                                    <input type="email" id="subcribe" name="email" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Your Email Address :">
                                    <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free <i class="uil uil-arrow-right"></i></button>
                                </form>
                            </div>

                            <span class="text-slate-400 font-medium">Looking for help? <router-link to="#" class="text-indigo-600">Get in touch with us</router-link></span>
                        </div>
                    </div>

                    <div class="md:col-span-6">
                        <div class="relative">
                            <div class="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                                <div class="w-full py-72 bg-slate-400 bg-[url('../../assets/images/saas/home.jpg')] bg-cover bg-no-repeat bg-top jarallax" data-jarallax data-speed="0.5"></div>
                            </div>

                            <div class="absolute flex justify-between items-center md:bottom-10 bottom-5 md:-start-16 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                <div class="flex items-center">
                                    <div class="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                        <i data-feather="monitor" class="h-6 w-6"></i>
                                    </div>
                                    <div class="flex-1">
                                        <h6 class="text-slate-400">Visitor</h6>
                                        <p class="text-xl font-bold"><count-up class="counter-value" :start-val="2100" :end-val="4589"></count-up></p>
                                    </div>
                                </div>

                                <span class="text-red-600"><i class="uil uil-chart-down"></i> 0.5%</span>
                            </div>

                            <div class="absolute xl:top-20 top-40 xl:-end-20 lg:-end-10 -end-1 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                <h5 class="text-xl font-semibold mb-3">Manage Your Software</h5>
                                <div class="flex justify-between mt-3 mb-2">
                                    <span class="text-slate-400">Work in progress</span>
                                    <span class="text-slate-400">84%</span>
                                </div>
                                <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div class="bg-indigo-600 h-[6px] rounded-full" style="width: 84%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative overflow-hidden" >
            <Managements />
            <WhyTechwind />
        </section>

        <section class="md:mt-24 mt-16">
            <Users :Testimonial=true :users=true />
        </section>

        <ComfortableRates />

        <AskedQuestions />

        <GetInTouch />

        <Footer :email=true />

        <Switcher />

        <Cookies />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { jarallax, jarallaxVideo } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';
import CountUp from 'vue-countup-v3';
import Navbar from '@/components/navbar/navbar.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import Managements from '@/components/management-platform.vue';
import WhyTechwind from '@/components/why-loves-techwind.vue';
import Users from '@/components/users.vue';
import ComfortableRates from '@/components/comfortable-rates.vue';
import AskedQuestions from '@/components/asked-questions/asked-questions.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch.vue';
import Footer from '@/components/footer/footer.vue';

onMounted(() => {
  jarallaxVideo();
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
});

</script>