<template>
    <div>
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-col-1 items-center gap-[30px]">
                <div class="lg:col-span-5 md:col-span-6 order-2 md:order-1">
                    <div class="shadow-sm dark:shadow-gray-800 rounded-md p-6 bg-gray-50 dark:bg-slate-800 overflow-hidden">
                        <img :src="logo" class="mx-auto" alt="">
                        <h5 class="text-center font-semibold text-2xl mt-3">Techwind Token Sale</h5>
                        <div class="grid grid-col-1">
                            <div class="text-center">
                                <div id="token-sale">
                                    <div class="flex">
                                        <div id="days" class="md:w-1/4 w-1/2 count-number lg:text-[40px] md:text-[32px] text-[28px] leading-[95px] font-semibold">{{ days }}<p class="count-head">Days</p></div>
                                        <div id="hours" class="md:w-1/4 w-1/2 count-number lg:text-[40px] md:text-[32px] text-[28px] leading-[95px] font-semibold">{{ hours }}<p class="count-head">Hours</p></div>
                                        <div id="mins" class="md:w-1/4 w-1/2 count-number lg:text-[40px] md:text-[32px] text-[28px] leading-[95px] font-semibold">{{ minutes }}<p class="count-head">minutes</p></div>
                                        <div id="secs" class="md:w-1/4 w-1/2 count-number lg:text-[40px] md:text-[32px] text-[28px] leading-[95px] font-semibold"> {{ seconds }}<p class="count-head">seconds</p></div>
                                        <div id="end" class="h1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p class="text-slate-400 text-center mt-8">Token sale ends <span class="text-slate-900 dark:text-white font-semibold ">August 25th 2022</span></p>

                        <div class="mt-6">
                            <div class="flex justify-end mb-2"><span class="text-slate-400">Funded 60% = $ 600000</span></div>
                            <div class="w-full bg-gray-100 dark:bg-slate-900 rounded-full h-3"><div class="bg-indigo-600 h-3 rounded-full" style="width: 60%"></div></div>
                            <div class="flex justify-between mt-2">
                                <span class="text-slate-400">$ 1000</span>
                                <span class="text-slate-400">$ 1000000</span>
                            </div>
                        </div>

                        <ul class="list-none mt-4">
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> <span class="text-slate-400">Soft Cap:</span> &nbsp;10000 USD</li>
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> <span class="text-slate-400">Min. transaction Amount:</span> &nbsp;1000 USD</li>
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> <span class="text-slate-400">Target:</span> &nbsp;900000 USD</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="#" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Join Now</router-link>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-7 md:col-span-6 order-1 md:order-2">
                    <div class="lg:ms-10">
                        <span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Sale tokens</span>
                        <h4 class="my-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">The token sale is live!</h4>
                        <p class="text-slate-400 para-desc mx-auto mb-3">With Techwind Trade, you can be sure your trading skills are matched with excellent service.</p>
                        <p class="text-slate-400 para-desc mx-auto">Techwind Institutional Markets is a full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending, trading, and custody solutions tailored to your needs.</p>
                        <div class="mt-4">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Token sale</router-link>
                            <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white m-1 lightbox cursor-pointer"><i data-feather="video" class="size-4"></i></router-link><span class="font-semibold ms-1 align-middle">Watch Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500"  frameborder="0"></iframe>
            </div>
            <button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/images/logo-icon-64.png'

const isActive = ref(false);
const now = ref('');
const countDownToTime = new Date("Dec 26, 2026 00:00:00").getTime();
const days = ref('');
const hours = ref('');
const minutes = ref('');
const seconds = ref('');
let intervalId;

const toggle = () => {
  isActive.value = !isActive.value;
};

// Countdown function
const tickTock = () => {
  const currentDate = new Date();
  now.value = currentDate.getTime();
  const timeDifference = countDownToTime - now.value;

  days.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  hours.value = 23 - currentDate.getHours();
  minutes.value = 59 - currentDate.getMinutes();
  seconds.value = 59 - currentDate.getSeconds();
};

// Start countdown on mount
onMounted(() => {
  intervalId = setInterval(() => {
    tickTock();
  }, 1000);
});

// Cleanup on unmount
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>