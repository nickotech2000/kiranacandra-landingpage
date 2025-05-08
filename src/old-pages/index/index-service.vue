<template>
<div>
    <navbar :lightlogo=true :loginButton=true />
        <!-- Start Hero -->
    <section class="relative table w-full pt-36 lg:pt-44 pb-32 bg-[url('../../assets/images/home-shape.png')] bg-top bg-no-repeat bg-cover">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="md:col-span-7">
                    <div class="md:me-6">
                        <h4 class="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Find the perfect <br> <span class="text-indigo-600">Professional</span> for you</h4>
                        <p class="text-slate-400 text-xl max-w-xl">Get free quotes within minutes</p>
                    
                        <div class="subcribe-form z-1 mt-8">
                            <form class="relative mx-auto max-w-2xl">
                                <i data-feather="search" class="size-5 absolute top-[47%] -translate-y-1/2 start-4"></i>
                                <input type="text" id="search_name" name="name" class="pt-4 pe-40 pb-4 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 ps-12" placeholder="What service are you looking for?">
                                <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Search</button>
                            </form><!--end form-->
                            <p class="text-slate-400 max-w-xl mt-3"><span class="font-semibold">Popular:</span> House Cleaning, Web Design, Personal Trainers</p>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="md:col-span-5">
                    <img src="../../assets/images/illustrator/services.svg" alt="">
                </div><!--end col-->
            </div><!--end grid-->
        </div><!--end container-->

        <div class="container relative md:mt-24 mt-16">
            <companylogo />
        </div><!--end container-->
    </section><!--end section-->
        <!-- End Hero -->
    <service />
    <section class="relative md:mt-24 mt-16">
        <userstrusted />
        <client :width="'lg:w-1/3'" />
        <questions />
    </section>
    <getintouch />
    <Footer :email=true />
    <switcher />
    <cookies />
</div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue';
import companylogo from '@/components/company-logos.vue';
import service from '@/components/service/service.vue';
import userstrusted from '@/components/real-estate/estate-trusted.vue';
import client from '@/components/software-client.vue';
import questions from '@/components/asked-questions/software-questions.vue';
import getintouch from '@/components/get-in-touch/get-in-touch.vue';
import Footer from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import cookies from '@/components/start-cookies.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            navbar,
            companylogo,
            service,
            userstrusted,
            client,
            questions,
            getintouch,
            Footer,
            switcher,
            cookies
        }
    }
</script>

<style lang="scss" scoped>

</style>