<template>
     <div v-if="isActive" class="cookie-popup fixed max-w-lg bottom-3 end-3 start-3 sm:start-0 mx-auto bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md py-5 px-6 z-50 block">
            <p class="text-slate-400">This website uses cookies to provide you with a great user experience. By using it, you accept our <a href="https://shreethemes.in" target="_blank" class="text-emerald-600 dark:text-emerald-500 font-semibold">use of cookies</a></p>
            <div class="cookie-popup-actions text-end">
                <span @click="isActive = false" class="absolute border-none bg-none p-0 cursor-pointer font-semibold top-2 end-2"><i  class="uil uil-times text-dark dark:text-slate-200 text-2xl"></i></span>
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);

</script>