<template>
    <div>
      <section class="relative h-screen flex justify-center items-center bg-slate-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="md:flex justify-center">
                    <div class="lg:w-2/5">
                        <div class="relative overflow-hidden rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                            <div class="px-6 py-12 bg-emerald-600 text-center">
                                <i class="uil uil-check-circle text-white text-8xl"></i>
                                <h5 class="text-white text-xl tracking-wide uppercase font-semibold mt-2">Success</h5>
                            </div>

                            <div class="px-6 py-12 text-center">
                                <p class="text-black font-semibold text-xl dark:text-white">Congratulations! 🎉</p> 
                                <p class="text-slate-400 mt-4">Your account has been successfully created. <br> Enjoy your journey. Thank you</p>
                                
                                <div class="mt-6">
                                    <router-link to="/" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigobg-indigo-700 text-white rounded-md">Continue</router-link>
                                </div>
                            </div>

                            <div class="text-center p-6 border-t border-gray-100 dark:border-gray-700">
                                <p class="mb-0 text-slate-400">© {{date}} Techwind. Design with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
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
import Switcher from '@/components/switcher.vue'
import { ref } from 'vue';

const date = ref(new Date().getFullYear());
</script>