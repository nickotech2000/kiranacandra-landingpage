<template>
    <div>

        <div v-if="backToTop" class="fixed bottom-3 end-3">
            <router-link to="/" class="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i data-feather="arrow-left" class="size-4"></i></router-link>
        </div>
        <div v-if="Video" class="fixed bottom-3 end-3">
            <router-link to="/index-video" class="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i data-feather="arrow-left" class="size-4"></i></router-link>
        </div>

        <router-link to="#" v-else @click="scrollToTop" v-show="showTopButton" id="back-to-top" class="fixed text-lg cursor-pointer rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"><i class="uil uil-arrow-up"></i></router-link>

        <div class="fixed top-[30%] -right-2 z-50">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" @change="changeMode($event)" />
                <label class="label bg-slate-900 dark:bg-white shadow-sm dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i class="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i class="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>

        <div class="fixed top-[40%] -right-3 z-50">
            <router-link to="#" id="switchRtl" @click="decrement">
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-800 font-bold rtl:block ltr:hidden" @click="changeThem($event)">LTR</span>
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-800 font-bold ltr:block rtl:hidden" @click="changeThem($event)">RTL</span>
            </router-link>
        </div>

    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount,defineProps } from 'vue';
import feather from 'feather-icons';

// Props
defineProps({
  backToTop: {
    type: Boolean,
    required: true,
  },
  Video: {
    type: Boolean,
    required: true,
  },
});

// Reactive Variables
const htmlTag = document.getElementsByTagName('html')[0];
const showTopButton = ref(false);

// Lifecycle Hooks
onMounted(() => {
  feather.replace();
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Methods
const handleScroll = () => {
  showTopButton.value = document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400;
};

const changeThem = (event) => {
  htmlTag.dir = event.target.innerText === 'LTR' ? 'ltr' : 'rtl';
};

const changeMode = () => {
  htmlTag.className = htmlTag.className.includes('dark') ? 'light' : 'dark';
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style lang="scss" scoped></style>