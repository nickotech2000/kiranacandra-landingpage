<template>
    <div class="container relative">
        <div class="grid grid-cols-1">
            <div class="relative -mt-12 rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-white dark:bg-slate-900">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div class="md:col-span-6">
                        <div class="w-full py-52 bg-slate-400 bg-[url('../../assets/images/saas/cta.jpg')] bg-no-repeat bg-top bg-cover jarallax" data-jarallax data-speed="0.5"></div>
                    </div>
                    <div class="md:col-span-6">
                        <div class="p-6">
                            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Join Our Forum</h3>
                            <p class="text-slate-400 max-w-xl">Talk about anything that's on your mind and see what others think. As a guest to our forum you are only able to view posts. When you register with the Forumix forum you can join in with topics, start new topics and generally be a part of the first level of our community.</p>
                            <div class="mt-6">
                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded me-2 mt-2">Register Now!</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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