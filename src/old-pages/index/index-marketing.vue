<template>
    <div>
        <navbar :lightlogo=true :loginButton=true />
        <!-- Start Hero -->
        <section class="relative table w-full md:py-44 py-36">
            <div class="absolute inset-0 bg-indigo-600/5"></div>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="md:col-span-7">
                        <div class="md:me-6">
                            <span class="text-indigo-600 font-medium">Techwind Marketing</span>
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Increase Your
                                Business <br> With Techwind</h4>
                            <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise
                                on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                            <div class="subcribe-form mt-6 mb-3">
                                <form class="relative max-w-xl">
                                    <input type="email" id="subcribe" name="email"
                                        class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800"
                                        placeholder="Your Email Address :">
                                    <button type="submit"
                                        class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try
                                        it for free <i class="uil uil-arrow-right"></i></button>
                                </form><!--end form-->
                            </div>

                            <span class="text-slate-400 font-medium">Looking for help? <a href=""
                                    class="text-indigo-600">Get in touch with us</a></span>
                        </div>
                    </div><!--end col-->

                    <div class="md:col-span-5">
                        <div class="relative">
                            <img src="../../assets/images/marketing.png" alt="">
                            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                                    class="lightbox size-20 rounded-full cursor-pointer shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end grid-->
            </div><!--end container -->
        </section><!--end section-->

        <section class="py-10 bg-indigo-600">
            <div class="container relative">
                <div class="grid grid-cols-2 md:grid-cols-4">
                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10 flex justify-center">
                            <count-up class="counter-value" :start-val="3000" :end-val="3452"></count-up>+</h3>
                        <span
                            class="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Investment
                            Projects</span>
                    </div><!--end counter box-->

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10 flex justify-center">
                            <count-up class="counter-value" :start-val="1" :end-val="15"></count-up>+</h3>
                        <span class="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Years of
                            Experience</span>
                    </div><!--end counter box-->

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10 flex justify-center">
                            <count-up class="counter-value" :start-val="5" :end-val="54"></count-up></h3>
                        <span class="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Offices
                            in the World</span>
                    </div><!--end counter box-->

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] text-white opacity-10 flex justify-center">
                            <count-up class="counter-value" :start-val="12" :end-val="247"></count-up>+</h3>
                        <span
                            class="counter-head font-semibold text-xl text-white absolute top-2/4 start-0 end-0">Successful
                            Cases</span>
                    </div><!--end counter box-->
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Hero -->

        <!-- iframe start  -->
        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500"
                    frameborder="0"></iframe>
            </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <!-- iframe end  -->
        <section class="md:py-24 py-16" >
        <smartsolution />
        <digitalization />
        <marketing />
        </section>
        <users :bgcolor="'md:py-24 py-16 bg-gray-50 dark:bg-slate-800'" :users=true />
        <getintouch />
        <fooTer />
        <switcher />
        <cookies />
    </div>
</template>

<script>
import CountUp from 'vue-countup-v3';
import navbar from '@/components/navbar/navbar.vue';
import smartsolution from '@/components/smart-solutions.vue';
import digitalization from '@/components/powerful-digitalization.vue';
import marketing from '@/components/analytics/marketing-analytics.vue';
import users from '@/components/users.vue';
import getintouch from '@/components/get-in-touch/get-in-touch-marketing.vue';
import fooTer from '@/components/footer/footer.vue'
import switcher from '@/components/switcher.vue';
import cookies from '@/components/start-cookies.vue'
export default {
    data() {
        return {
            isActive: false
        }
    },
    components: {
        navbar,
        CountUp,
        smartsolution,
        digitalization,
        marketing,
        users,
        getintouch,
        fooTer,
        switcher,
        cookies
    },
    methods: {
        toggle() {
            if (!this.isActive) {
                this.isActive = true
            } else {
                this.isActive = false
            }

        }
    },
}
</script>

<style lang="scss" scoped></style>