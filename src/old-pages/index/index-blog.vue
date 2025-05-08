<template>
<div>
    <navbar :navLight="'nav-light'" />
    <!-- Start -->
    <section
        class="relative md:pt-60 pt-40 md:pb-64 pb-56 flex items-center bg-[url('../../assets/images/blog/bg1.jpg')] bg-center bg-no-repeat bg-cover jarallax"
        data-jarallax data-speed="0.5">
        <div class="absolute inset-0 bg-slate-900/40"></div>
        <div class="container relative">
            <div class="md:flex justify-center mt-10">
                <div class="w-full">
                    <span class="flex items-center">
                        <img src="../../assets/images/client/05.jpg"
                            class="h-8 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                        <span class="ms-1 text-lg"><span class="text-white/80 mx-1">by</span> <a href=""
                                class="text-white">Cristino Loly</a></span>
                        <span class="ms-1 text-lg"><span class="text-white/80 mx-1">in</span> <a href=""
                                class="text-white">Business</a></span>
                    </span>

                    <a href=""
                        class="font-bold text-white leading-snug text-[30px] lg:text-[42px] mt-6 block">Establishing
                        that <br> you have something to say</a>

                    <div class="mt-8">
                        <a href=""
                            class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Read
                            Article <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <div class="relative">
        <div
            class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End -->
    <section class="relative md:py-24 py-16">
        <features />
        <div class="container relative mt-16">
            <div
                class="relative bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-sm dark:shadow-gray-800 overflow-hidden">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="md:text-start text-center z-1">
                        <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Subscribe to Newsletter!</h3>
                        <p class="text-slate-400 max-w-xl mx-auto mt-2">Subscribe to get latest updates and information.
                        </p>
                    </div>

                    <div class="subcribe-form z-1">
                        <form class="relative max-w-xl">
                            <input type="email" id="subcribe" name="email"
                                class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800"
                                placeholder="Your Email Address :">
                            <button type="submit"
                                class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subscribe</button>
                        </form><!--end form-->
                    </div>
                </div>

                <div class="absolute -top-5 -start-5">
                    <div
                        class="uil uil-envelope lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 -rotate-45">
                    </div>
                </div>

                <div class="absolute -bottom-5 -end-5">
                    <div class="uil uil-pen lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5"></div>
                </div>
            </div>
        </div>
        <newfeatures />
        <recentblog />
    </section>
    <Footer :email=true />
    <switcher />
    <cookies />
</div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue';
import features from '@/components/blogs/all-features.vue';
import newfeatures from '@/components/blogs/new-features.vue';
import recentblog from '@/components/blogs/recent-blog.vue';
import Footer from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import cookies from '@/components/start-cookies.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        navbar,
        features,
        newfeatures,
        recentblog,
        Footer,
        switcher,
        cookies
    }
}
</script>

<style lang="scss" scoped></style>