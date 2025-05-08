<template>
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">How It Work ?</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div class="lg:col-span-5">
                <img :src="image1" alt="">
            </div>
            <div class="lg:col-span-7">
                <div class="lg:ms-10">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Change the way you build websites</h3>
                    <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                    <ul class="list-none text-slate-400 mt-4">
                        <li v-for="data in datas" :key="data" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ data }} </li>
                    </ul>

                    <div class="mt-4">
                        <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container relative md:mt-24 mt-16">
        <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div class="lg:col-span-5 md:order-2 order-1">
                <div class="lg:ms-10">
                    <div class="bg-white dark:bg-slate-900 p-6 rounded-md shadow-sm dark:shadow-gray-800">
                        <img :src="image2" alt="">

                        <div class="mt-8">
                            <form>
                                <div class="grid grid-cols-1">
                                    <div class="mb-5">
                                        <label class="form-label font-medium">Your Name : <span class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                            <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name" name="name" required="">
                                        </div>
                                    </div>

                                    <div class="mb-5">
                                        <label class="form-label font-medium">Your Email : <span class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                            <input type="email" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="">
                                        </div>
                                    </div>

                                    <div class="mb-5">
                                        <label class="form-label font-medium">Enter Password : <span class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="key" class="size-4 absolute top-3 start-4"></i>
                                            <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Password" required="">
                                        </div>
                                    </div>

                                    <div class="">
                                        <button class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Download</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-7 md:order-1 order-2">
                <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Speed up your development <br> with <span class="text-indigo-600">Techwind.</span></h3>
                <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can  take a component from the Application theme and use it in the Website.</p>

                <ul class="list-none text-slate-400 mt-4">
                    <li v-for="data in datas" :key="data" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ data }} </li>
                </ul>

                <div class="mt-4">
                    <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</section>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import feather from 'feather-icons';

import image1 from '@/assets/images/illustrator/SEO_SVG.svg'
import image2 from '@/assets/images/illustrator/Mobile_notification_SVG.svg'

const datas = ref([
  'Digital Marketing Solutions for Tomorrow',
  'Our Talented & Experienced Marketing Agency',
  'Create your own skin to match your brand'
]);

onMounted(() => {
  feather.replace();
});
</script>