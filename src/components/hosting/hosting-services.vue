<template>
            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 items-end">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Hosting Services</h3>
                    <p class="text-slate-400 max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="service in services" :key="service" class="group relative p-6 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                        <div class="relative overflow-hidden text-transparent -m-3">
                            <i data-feather="hexagon" class="size-24 fill-indigo-600/5 group-hover:fill-white/10"></i>
                            <div class="absolute top-2/4 -translate-y-2/4 start-8 text-indigo-600 rounded-xl group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
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
import { ref } from 'vue';

// Reactive services data using ref
const services = ref([
  {
    icon: 'uil uil-server',
    title: 'Web Hosting',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-cloud-heart',
    title: 'Domains',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-envelope-check',
    title: 'Emails',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Supported',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-tachometer-fast-alt',
    title: 'Speedy',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-compact-disc',
    title: 'Reliable',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-weight',
    title: 'Scalable',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    icon: 'uil uil-invoice',
    title: 'Easy Upgrade',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
]);
</script>