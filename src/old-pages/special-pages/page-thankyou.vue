<template>
    <div>
        <section class="relative h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <div class="title-heading text-center my-auto">
                        <div class="size-24 bg-indigo-600/5 text-indigo-600 rounded-full text-5xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-thumbs-up"></i>
                        </div>
                        <h1 class="mt-6 mb-8 md:text-5xl text-3xl font-bold">Thank You</h1>
                        <p class="text-slate-400 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind x3 html page.</p>
                        
                        <div class="mt-6">
                            <router-link to="/" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Back to Home</router-link>
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
    
</script>