<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="md:h-screen flex py-36 w-full items-center bg-[url('../../assets/images/cta.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-slate-900/70"></div>
        <div class="container relative">
            <div class="lg:flex justify-center mt-12">
                <div class="lg:w-11/12 bg-white dark:bg-slate-900 rounded-md shadow-lg dark:shadow-gray-800 overflow-hidden">
                    <div class="grid md:grid-cols-12 grid-cols-1 items-center">
                        <div class="lg:col-span-7 md:col-span-6">
                            <div class="w-full leading-[0] border-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style="border:0" class="w-full lg:h-[540px] md:h-[600px] h-[200px]" allowfullscreen></iframe>
                            </div>
                        </div>
                        
                        <div class="lg:col-span-5 md:col-span-6">
                            <div class="p-6">
                                <h3 class="mb-6 text-2xl leading-normal font-medium">Let's talk about your portfolio</h3>
                                <p class="text-slate-400">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                
                                <div class="flex items-center mt-6">
                                    <i data-feather="mail" class="size-4 me-4"></i>
                                    <div class="">
                                        <h5 class="title font-bold mb-0">Email</h5>
                                        <a href="mailto:contact@example.com" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>contact@example.com</a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center mt-6">
                                    <i data-feather="phone" class="size-4 me-4"></i>
                                    <div class="">
                                        <h5 class="title font-bold mb-0">Phone</h5>
                                        <a href="tel:+152534-468-854" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">+152 534-468-854</a>
                                        <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                    </div>
                                </div>
                                
                                <div class="flex items-center mt-6">
                                    <i data-feather="map-pin" class="size-4 me-4"></i>
                                    <div class="">
                                        <h5 class="title font-bold mb-0">Location</h5>
                                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" class="video-play-icon relative inline-block font-semibold tracking-wide align-middle ease-in-out text-base text-center border-none text-indigo-600 hover:text-indigo-600 duration-500 lightbox">View on Google map</a>
                                        <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                    </div>
                                </div>

                                <ul class="list-none mt-6 space-x-1">
                                    <li v-for="item in socials" :key="item" class="inline"><a href="" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i :data-feather="item" class="size-4"></i></a></li>
                                    
                                </ul>
                            </div>
                            <div class="flex justify-center text-center p-6 border-t border-gray-100 dark:border-gray-800">
                                <p class="mb-0 text-slate-400">© {{date}} Techwind. Design with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Switcher :backToTop=true />
</div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Switcher from '@/components/switcher.vue';

const date = ref(new Date().getFullYear());
const socials = ref(['facebook', 'instagram', 'twitter', 'linkedin', 'github', 'youtube', 'gitlab']);
</script>