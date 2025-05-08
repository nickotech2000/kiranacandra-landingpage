<template>
    <div class="container relative">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div v-for="service in services" :key="service" class="group relative px-6 py-10 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div class="relative overflow-hidden text-transparent -m-3">
                    <i data-feather="hexagon" class="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></i>
                    <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                        <i :class="service.icon"></i>
                    </div>
                </div>

                <div class="mt-6">
                    <router-link to="#" class="text-lg font-medium group-hover:text-white duration-500">{{ service.title }}</router-link>
                    <p class="text-slate-400 group-hover:text-white/50 duration-500 mt-3">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import feather from 'feather-icons';

const services = [
  {
    icon: 'uil uil-wallet',
    title: 'Connect your wallet',
    desc: 'Use Trust Wallet, Metamask or any wallet to connect to the app.',
  },
  {
    icon: 'uil uil-image-plus',
    title: 'Create your NFT Item',
    desc: 'Upload your NFTs and set a title, description and price.',
  },
  {
    icon: 'uil uil-save',
    title: 'List them for sale',
    desc: 'Earn ETH and BIT for all your NFTs that you sell on our marketplace.',
  },
];

onMounted(() => {
  feather.replace();
});
</script>