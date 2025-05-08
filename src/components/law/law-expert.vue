<template>
    <div>
        <section class="pt-20 pb-32 w-full table relative bg-[url('../../assets/images/business/bg02.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-4 md:text-3xl text-2xl text-white font-medium">Speak With Our Expert <br> Lawyers Today!</h3>
                    <p class="text-white/80 max-w-xl mx-auto mb-0">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <div class="mt-6">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Free Consultation</router-link>
                    </div>
                </div>
            </div>
        </section>

         <div class="container relative">
            <div class="grid grid-cols-1">
                <div class="relative -top-[52px] shadow-sm dark:shadow-gray-800 py-6 bg-white dark:bg-slate-900">
                  <companylogo />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import companylogo from '@/components/company-logos.vue'
</script>
