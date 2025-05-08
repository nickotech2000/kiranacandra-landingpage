<template>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5">
                        <img :src="about" alt="">
                    </div>
                    
                    <div class="lg:col-span-7">
                        <div class="lg:ms-10">
                            <h6 class="text-indigo-600 text-base">Why choose us?</h6>
                            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Buy Cryptocurrency <br> with Techwind</h3>
                            <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                            <ul class="list-none text-slate-400 mt-4">
                                <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{item}}</li>
                            </ul>

                            <div class="mt-4">
                                <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"> <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span> Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">We featured on popular partners like</h3>
                </div>
                <companylogo />              
            </div>
        </section>
</template>

<script setup>
import { ref } from 'vue';
import companylogo from '@/components/company-logos.vue';
import about from '@/assets/images/crypto/01.png'

const datas = ref([
  'Digital Marketing Solutions for Tomorrow',
  'Our Talented & Experienced Marketing Agency',
  'Create your own skin to match your brand'
]);
</script>