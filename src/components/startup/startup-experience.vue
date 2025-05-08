<template>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="grid grid-cols-12 gap-6 items-center">
                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img :src="about3" class="shadow-sm rounded-md" alt="">
                                    <img :src="about2" class="shadow-sm rounded-md" alt="">
                                </div>
                            </div>

                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img :src="about1" class="shadow-sm rounded-md" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ms-5">
                            <h3 v-if="team" class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">We are a startup</h3>
                            <p class="text-slate-400 max-w-xl">Kirana is next-gen hospitality platform where real-world assets meet digital innovation. We’re transforming how hospitality properties are financed, operated, and experienced—leveraging the power of blockchain (Web3), and AI-driven guest intelligence.</p>
                            <div class="mt-6">
                                <a href="mailto:support@kiranacandratech.com" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i class="uil uil-envelope"></i> Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import {defineProps} from 'vue'
import about1 from '@/assets/images/about/ab01.jpg'
import about2 from '@/assets/images/about/ab02.jpg'
import about3 from '@/assets/images/about/ab03.jpg'

defineProps({
  video: {
    type: Boolean,
    required: true
  },
  who: {
    type: Boolean,
    required: true
  },
  team: {
    type: Boolean,
    required: true
  }
});
</script>