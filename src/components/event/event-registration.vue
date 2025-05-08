<template>
        <section class="relative table w-full py-36 bg-[url('../../assets/images/event/bg3.jpg')] bg-no-repeat bg-bottom bg-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <div class="pb-8">
                        <h6 class="text-white/50 text-sm font-bold uppercase mb-2">Hurry up & Register</h6>
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Not yet registered? <br> Hurry up!</h3>

                        <p class="text-white/50 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                
                    <div id="countdown">
                        <ul class="count-down list-none inline-block text-white text-center mt-8">
                            <li id="days" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">  {{ days }}<p class="count-head">Days</p></li>
                            <li id="hours" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{{ hours }}<p class="count-head">Hours</p></li>
                            <li id="mins" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{{ minutes }}<p class="count-head">Minutes</p></li>
                            <li id="secs" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{{ seconds }}<p class="count-head">Seconds</p></li>
                            <li id="end" class="h1"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const now = ref('');
const countDownToTime = new Date('Sep 26, 2026 00:00:00').getTime();
const difference = ref('');
const days = ref('');
const hours = ref('');
const minutes = ref('');
const seconds = ref('');
let intervalId;

const tickTock = () => {
  const currentDate = new Date();
  now.value = currentDate.getTime();
  const timeDiff = countDownToTime - now.value;
  difference.value = timeDiff / (1000 * 60 * 60 * 24);
  days.value = Math.floor(difference.value);
  hours.value = 23 - currentDate.getHours();
  minutes.value = 60 - currentDate.getMinutes();
  seconds.value = 60 - currentDate.getSeconds();
};

onMounted(() => {
  intervalId = setInterval(() => {
    tickTock();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>