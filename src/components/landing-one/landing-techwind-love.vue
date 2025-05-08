<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-center">
                <div class="md:col-span-6 md:text-start text-center">
                    <h3 class="md:mb-0 mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Why Everyone Loves <br> Techwind</h3>
                </div>

                <div class="md:col-span-6">
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
                <div class="relative">
                    <img :src="classic2" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                </div>

                <div class="lg:ms-8">
                    <h4 class="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br> With Real Problem</h4>
                    <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                    <ul class="list-none text-slate-400 mt-4">
                        <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                    </ul>

                    <div class="mt-4">
                        <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div class="relative order-1 md:order-2">
                    <img :src="classic3" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                </div>

                <div class="lg:me-8 order-2 md:order-1">
                    <h4 class="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                    <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                    <ul class="list-none text-slate-400 mt-4">
                        <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                    </ul>

                    <div class="mt-4">
                        <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import classic2 from '@/assets/images/saas/classic02.png'
import classic3 from '@/assets/images/saas/classic03.png'

const datas = ref([
  'Digital Marketing Solutions for Tomorrow',
  'Our Talented & Experienced Marketing Agency',
  'Create your own skin to match your brand'
]);
</script>