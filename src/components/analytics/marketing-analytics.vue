<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div class="md:col-span-6 order-1 md:order-2">
                <div class="lg:ms-8">
                    <img :src="seo" alt="">
                </div>
            </div>

            <div class="md:col-span-6 order2 md:order-1">
                <div class="lg:me-5">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Easy To Track</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Techwind Marketing <br> Analytics For All Expenses</h3>

                    <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                    <ul class="list-none text-slate-400 my-6">
                        <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ item }}</li>
                    </ul>

                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full">Get Started</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import seo from '@/assets/images/illustrator/SEO_SVG.svg'

const datas = ref([
  'Digital Marketing Solutions for Tomorrow',
  'Our Talented & Experienced Marketing Agency',
  'Create your own skin to match your brand'
]);
</script>