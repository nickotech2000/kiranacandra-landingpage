<template>
        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Experience</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Work Experience</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                </div>

                <div class="grid grid-cols-1 mt-8">
                    <div class="relative ms-3 md:ms-0">
                        <span class="absolute top-0 md:end-0 md:start-0 w-px h-full md:m-auto border-s-2 border-dashed border-gray-200 dark:border-gray-700"></span>
                        <div class="ms-8 md:ms-0 relative">
                            <span class="absolute top-[9px] rounded-full z-10 w-2.5 h-2.5 bg-indigo-600 md:mx-auto md:end-0 md:start-0 -start-9"></span>
                            <span class="absolute md:mx-auto md:end-0 md:start-0 -start-11 rounded-full z-10 border-2 border-dashed border-gray-200 dark:border-gray-700 top-0 w-7 h-7 bg-white dark:bg-slate-900"></span>
                            <div class="grid md:grid-cols-2">
                                <div class="md:text-end md:me-8 relative">
                                    <img :src="client1" class="rounded-full size-9 md:ms-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Self Employed</h5>
                                    <h6 class="text-slate text-sm mb-0">2019-21</h6>
                                </div>

                                <div class="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                    <h5 class="title mb-1 font-semibold">UX / UI Designer</h5>
                                    <p class="mt-3 mb-0 text-slate-400">{{ datas }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 ms-8 md:ms-0 relative">
                            <span class="absolute top-[9px] rounded-full z-10 w-2.5 h-2.5 bg-indigo-600 md:mx-auto md:end-0 md:start-0 -start-9"></span>
                            <span class="absolute md:mx-auto md:end-0 md:start-0 -start-11 rounded-full z-10 border-2 border-dashed border-gray-200 dark:border-gray-700 top-0 w-7 h-7 bg-white dark:bg-slate-900"></span>
                            <div class="grid md:grid-cols-2">
                                <div class="text-start ms-8 relative md:order-2">
                                    <img :src="client2" class="rounded-full size-9 md:me-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Google Tech.</h5>
                                    <h6 class="text-slate text-sm mb-0">2018-19</h6>
                                </div>

                                <div class="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                    <h5 class="title mb-1 font-semibold">Sr. UX / UI Designer</h5>
                                    <p class="mt-3 mb-0 text-slate-400">{{ datas }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 ms-8 md:ms-0 relative">
                            <span class="absolute top-[9px] rounded-full z-10 w-2.5 h-2.5 bg-indigo-600 md:mx-auto md:end-0 md:start-0 -start-9"></span>
                            <span class="absolute md:mx-auto md:end-0 md:start-0 -start-11 rounded-full z-10 border-2 border-dashed border-gray-200 dark:border-gray-700 top-0 w-7 h-7 bg-white dark:bg-slate-900"></span>
                            <div class="grid md:grid-cols-2">
                                <div class="md:text-end md:me-8 relative">
                                    <img :src="client3" class="rounded-full size-9 md:ms-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                                    <h6 class="text-slate text-sm mb-0">2016-18</h6>
                                </div>

                                <div class="ltr:float-left rtl:float-right text-start ms-8 mt-6 md:mt-0">
                                    <h5 class="title mb-1 font-semibold">Jr. UX / UI Designer</h5>
                                    <p class="mt-3 mb-0 text-slate-400">{{ datas }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 ms-8 md:ms-0 relative">
                            <span class="absolute top-[9px] rounded-full z-10 w-2.5 h-2.5 bg-indigo-600 md:mx-auto md:end-0 md:start-0 -start-9"></span>
                            <span class="absolute md:mx-auto md:end-0 md:start-0 -start-11 rounded-full z-10 border-2 border-dashed border-gray-200 dark:border-gray-700 top-0 w-7 h-7 bg-white dark:bg-slate-900"></span>
                            <div class="grid md:grid-cols-2">
                                <div class="text-start ms-8 relative md:order-2">
                                    <img :src="client4" class="rounded-full size-9 md:me-auto" alt="">
                                    <h5 class="my-2 font-semibold text-lg">Circle CI</h5>
                                    <h6 class="text-slate text-sm mb-0">2015-16</h6>
                                </div>

                                <div class="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                    <h5 class="title mb-1 font-semibold">Front-end Web Designer</h5>
                                    <p class="mt-3 mb-0 text-slate-400">{{ datas }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import { ref } from 'vue';
import client1 from '@/assets/images/client/shree-logo.png'
import client2 from '@/assets/images/client/google-logo.png'
import client3 from '@/assets/images/client/lenovo-logo.png'
import client4 from '@/assets/images/client/circle-logo.png'

const datas = ref(
  'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
);
</script>