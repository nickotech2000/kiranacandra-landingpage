<template>
    <section class="py-28 w-full table relative bg-[url('../../assets/images/shop/cta.jpg')] bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
        <div class="absolute inset-0 bg-slate-900/30"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 text-center">
                <h3 class="mb-4 md:text-4xl text-3xl text-white font-bold">End of Season Clearance <br> Sale upto 30%</h3>

                <p class="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                <div class="mt-6">
                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><i class="mdi mdi-cart-outline"></i> Shop Now</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';

onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
});
</script>