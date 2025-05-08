<template>
<div>
    <navbar :lightlogo=true :loginButton=true />
    <!-- Start Hero -->
    <section
        class="relative md:py-64 py-36 items-center bg-[url('../../assets/images/bg-seo.png')] bg-center bg-no-repeat bg-cover">
        <div class="container relative">
            <div class="grid grid-cols-1 justify-center text-center">
                <div class="">
                    <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">All-in-one SEO
                        <vue-typewriter-effect class="typewrite" data-period="2000"
                            :strings='["Plugin", "Website", "Toolkit", "Agency"]' />
                    </h1>
                    <p class="text-lg max-w-xl mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta,
                        vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>

                    <div class="subcribe-form mt-6 mb-3">
                        <form class="relative max-w-xl mx-auto">
                            <input type="url" id="site-url" name="url"
                                class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow-sm dark:shadow-gray-800"
                                placeholder="http://www.yourdomain.com">
                            <button type="submit"
                                class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Start
                                Free Trial</button>
                        </form><!--end form-->
                    </div>

                    <span class="font-medium">Looking for help? <a href="" class="text-indigo-600">Get in touch with
                            us</a></span>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <div class="relative">
        <div
            class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End Hero -->

    <!-- Start -->
    <section class="relative ">
        <div class="container relative">
            <div class="md:flex justify-center">
                <div class="lg:w-3/4 md:w-full relative -mt-16">
                    <div class="p-6 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800">
                        <div class="md:flex justify-center">
                            <div class="md:w-1/3">
                                <div class="text-center">
                                    <h6 class="text-slate-400 mb-0">External Backlinks</h6>
                                    <h2 class="mb-0 text-4xl mt-3 font-bold flex justify-center"><count-up
                                            class="counter-value" :start-val="1990" :end-val="2021">1990</count-up> K+
                                    </h2>
                                </div>
                            </div>

                            <div class="md:w-1/3 mt-8 md:mt-0">
                                <div class="text-center">
                                    <h6 class="text-slate-400 mb-0">Pages Crawled Daily</h6>
                                    <h2 class="mb-0 text-4xl mt-3 font-bold flex justify-center"><count-up
                                            class="counter-value" :start-val="2" :end-val="210"></count-up> B+</h2>
                                </div>
                            </div>

                            <div class="md:w-1/3 mt-8 md:mt-0">
                                <div class="text-center">
                                    <h6 class="text-slate-400 mb-0">Domain Indexed</h6>
                                    <h2 class="mb-0 text-4xl mt-3 font-bold flex justify-center"><count-up
                                            class="counter-value" :start-val="1" :end-val="18"
                                            data-target="18"></count-up> M+</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end grid-->
        </div><!--end container-->
    </section>
    <seoprofessional />
    <marketingagency />
    <seohistory />
    <businesses />
    <section class="md:mt-24 mt-16">
        <blogs />
    </section>
    <getintouch />
    <fooTer :email=true  />
    <switcher />
    <cookies />
</div>
</template>

<script>
import VueTypewriterEffect from "vue-typewriter-effect";
import navbar from '@/components/navbar/navbar.vue';
import CountUp from 'vue-countup-v3';
import seoprofessional from '@/components/seo/seo-professionals.vue';
import marketingagency from '@/components/marketing/marketing-agency.vue';
import seohistory from '@/components/seo/seo-history.vue';
import businesses from '@/components/businesses-worldwide.vue';
import blogs from '@/components/blogs/blogs.vue';
import getintouch from '@/components/get-in-touch/get-in-touch.vue';
import fooTer from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import cookies from '@/components/start-cookies.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        navbar,
        VueTypewriterEffect,
        CountUp,
        seoprofessional,
        marketingagency,
        seohistory,
        businesses,
        blogs,
        getintouch,
        fooTer,
        switcher,
        cookies
    }
}
</script>

<style lang="scss" scoped></style>