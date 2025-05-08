<template>
<div>
   <Navbar :lightlogo=true :loginButton=true />
    <section class="relative table w-full py-36 lg:py-44 bg-gray-50 dark:bg-slate-800 bg-[url('../../assets/images/bg4.png')] bg-bottom bg-cover" id="home">
        <div class="container relative">
            <div class="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-[30px]">
                <div class="lg:col-span-7">
                    <span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Form Landing Page</span>
                    <h4 class="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mt-2 mb-5">Experience, <br> Expertise, Consulting</h4>
                    <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                    <div class="relative mt-10">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full me-1">Get Started</router-link>
                        <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="size-12 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><i class="mdi mdi-play text-xl align-middle cursor-pointer"></i></router-link><small class="text-sm uppercase align-middle font-bold ms-2">Watch Now</small>
                    </div>
                </div>

                <div class="lg:col-span-5">
                    <div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm dark:shadow-gray-800 md:p-8 p-6 lg:ms-10 z-10 relative">
                        <h4 class="mb-5 text-2xl font-semibold">We are offering 14 <br> days free trial</h4>
                        <form>
                            <div class="grid grid-cols-1">
                                <div class="mb-5">
                                    <label class="form-label font-medium">Your Name : <span class="text-red-600">*</span></label>
                                    <div class="form-icon relative mt-2">
                                        <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                        <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name" name="name" required>
                                    </div>
                                </div>

                                <div class="mb-5">
                                    <label class="form-label font-medium">Your Email : <span class="text-red-600">*</span></label>
                                    <div class="form-icon relative mt-2">
                                        <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                        <input type="email" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required>
                                    </div>
                                </div>

                                <div class="mb-5">
                                    <label class="form-label font-medium">Phone No. : <span class="text-red-600">*</span></label>
                                    <div class="form-icon relative mt-2">
                                        <i data-feather="phone" class="size-4 absolute top-3 start-4"></i>
                                        <input name="number" id="phNumber" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="+12 12458 854" required>
                                    </div>
                                </div>
                                
                                <div>
                                    <router-link to="#" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Free Trial</router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
        </div>
        <button class="text-slate-400 absolute top-[20px] right-[20px]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>

    <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div class="container relative">
            <Companylogo />
        </div>
    </section>

    <section class="relative md:py-24 py-16">
        <Feature />
        <Expert />
        <keyfeature :seemore=true />
        <Cta />
        <Comfortable />
    </section>

    <Blogs />   

    <section class="relative md:mt-24 mt-16">
        <Footer :email=true />
    </section>

    <Switcher />
    <Cookies />          
</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Companylogo from '@/components/company-logos.vue';
import Feature from '@/components/landing-four/landing-four-feature.vue';
import Expert from '@/components/corporate/corporate-expert.vue';
import Cta from '@/components/corporate/corporate-cta.vue';
import Keyfeature from '@/components/features/key-features.vue';
import Comfortable from '@/components/comfortable-rates.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>