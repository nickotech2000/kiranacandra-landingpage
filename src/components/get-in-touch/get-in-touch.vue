<template>
    <div class="container relative md:py-24 py-16">
        <div class="grid grid-cols-1 text-center">
            <h6 v-if="contact" class="text-indigo-600 text-sm font-bold uppercase mb-2">Contact Us</h6>
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have Question ? Get in touch!</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            <div class="mt-6">
                <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i class="uil uil-phone align-middle me-2"></i> Contact us</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
 defineProps({
  contact: {
    type: Boolean,
    required: true
  }
});
</script>