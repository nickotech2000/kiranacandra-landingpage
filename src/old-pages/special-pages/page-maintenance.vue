<template>
    <div>
        <section class="relative h-screen flex items-center justify-center text-center bg-[url('../../assets/images/utility.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-black/25"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <img :src="logoLight" class="mx-auto" alt="">
                    <h1 class="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
                    <p class="text-white/70 text-lg max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid grid-cols-1 mt-10">
                    <div class="text-center">
                        <span id="maintenance" class="timer text-white text-[56px] tracking-[1px]"></span>
                        <span class="block text-base font-semibold uppercase text-white">Minutes</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-6">
                    <div class="text-center subcribe-form">
                        <form class="relative mx-auto max-w-xl">
                            <input type="email" id="subemail" name="name"
                                class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700"
                                placeholder="Enter your email id..">
                            <button type="submit"
                                class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe
                                Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Switcher :backToTop=true />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Switcher from '@/components/switcher.vue';
import logoLight from '@/assets/images/logo-light.png'

onMounted(() => {
  function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      if (display) {
        display.textContent = `${minutes}:${seconds}`;
      }

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  const fiveMinutes = 60 * 60;
  const display = document.querySelector('#maintenance');
  startTimer(fiveMinutes, display);
});
</script>