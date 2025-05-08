<template>
        <section class="relative md:py-24 py-16 bg-[url('../../assets/images/course/cta.jpg')] bg-no-repeat bg-fixed bg-top bg-cover" id="table">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="container relative">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 items-center gap-[30px]">
                    <div class="lg:col-span-7">
                        <h4 class="font-semibold lg:leading-normal leading-normal text-3xl lg:text-4xl mb-5 text-white">Register Now !</h4>
                
                        <p class="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                    
                        <div class="relative mt-10">
                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Admission Now</router-link>
                        </div>
                    </div>

                    <div class="lg:col-span-5">
                        <div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm dark:shadow-gray-800 md:p-8 p-6 lg:ms-10 z-10 relative">
                            <h4 class="mb-5 text-2xl font-semibold">Register Now</h4>
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
</template>

<script setup>
import { onMounted } from 'vue';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';

onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
});
</script>