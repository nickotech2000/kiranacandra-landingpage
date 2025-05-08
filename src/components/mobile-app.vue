<template>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div class="lg:col-span-5 md:col-span-6">
                        <img :src="envelop" class="mx-auto d-block" alt="">
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Mobile Apps</span>
                        <h4 class="md:text-3xl text-2xl lg:leading-normal leading-normal font-medium my-4">Available for your <br> Smartphones</h4>
                        <p class="text-slate-400 max-w-xl mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        <div class="my-5">
                            <router-link to="#"><img :src="app" class="m-1 inline-block" alt=""/></router-link>
                            <router-link to="#"><img :src="playstore" class="m-1 inline-block" alt=""/></router-link>
                        </div>

                        <div class="inline-block">
                            <div class="pt-4 flex items-center border-t border-gray-100 dark:border-gray-700">
                                <i data-feather="smartphone" class="me-2 text-indigo-600 size-10"></i>
                                <div class="content">
                                    <h6 class="text-base font-medium">Install app now on your cellphones</h6>
                                    <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 hover:text-indigo-600  duration-500 ease-in-out"> <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-50 bg-indigo-600"></span>Learn More <i class="uil uil-angle-right-b"></i></router-link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
  import envelop from '@/assets/images/illustrator/envelope.svg'
  import app from '@/assets/images/app/app.png'
  import playstore from '@/assets/images/app/playstore.png'
</script>