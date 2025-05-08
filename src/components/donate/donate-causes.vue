<template>
  
<div>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Causes</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item" class="group relative rounded hover:-mt-1 shadow-sm hover:shadow-md dark:shadow-gray-800 overflow-hidden duration-300">
                <div class="relative overflow-hidden">
                    <img :src="item.image" alt="">
                    <div class="absolute p-4 start-0 end-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 duration-300">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Donate Now</router-link>
                    </div>
                </div>
                
                <div class="p-6">
                    <router-link to="#" class="hover:text-indigo-600 text-lg font-semibold">{{item.title}}</router-link>
                    <p class="text-slate-400 mt-2">{{ item.desc }}</p>

                    <div class="mt-3">
                        <div class="flex justify-between mb-2">
                            <span class="text-slate-400">{{item.progress}}</span>
                            <span class="text-slate-400">{{item.percentage}}</span>
                        </div>
                        <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                            <div class="bg-indigo-600 h-[6px] rounded-full" style="width: 45%"></div>
                        </div>
                        <ul class="flex list-none justify-between mt-3 mb-2">
                            <li class="font-semibold">
                                <span class="text-indigo-600">{{item.raised}} </span>
                                <span>{{item.value}}</span>
                            </li>
                            <li class="text-indigo-600 font-semibold">
                                <span>{{item.goal}} </span>
                                <span>{{ item.target }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="py-20 w-full table relative bg-[url('../../assets/images/charity/cta.jpg')] bg-top bg-no-repeat bg-cover md:mt-24 mt-16">
        <div class="absolute inset-0 bg-slate-900/70"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 text-center">
                <h3 class="mb-4 md:text-3xl text-2xl text-white font-medium">Senior Citizen Program</h3>

                <p class="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
            
                <router-link @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white cursor-pointer dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </router-link>
            </div>
        </div>
    </section>

    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
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
import { ref } from 'vue';
import cause1 from '@/assets/images/charity/cause01.jpg'
import cause2 from '@/assets/images/charity/cause02.jpg'
import cause3 from '@/assets/images/charity/cause03.jpg'
import cause4 from '@/assets/images/charity/cause04.jpg'
import cause5 from '@/assets/images/charity/cause05.jpg'
import cause6 from '@/assets/images/charity/cause06.jpg'

const isActive = ref(false);

const datas = ref([
  {
    image: cause1,
    title: 'Donate For Food',
    desc: 'If you use this site regularly and would like to help keep the site on the Internet',
    progress: 'Progress',
    percentage: '45%',
    raised: 'Raised:',
    value: '$4500',
    goal: 'Goal:',
    target: '$10000'
  },
  {
    image: cause2,
    title: 'Food For Orphan',
    desc: 'If you use this site regularly and would like to help keep the site on the Internet',
    progress: 'Progress',
    percentage: '45%',
    raised: 'Raised:',
    value: '$4500',
    goal: 'Goal:',
    target: '$10000'
  },
  {
    image: cause3,
    title: 'Home For Homeless',
    desc: 'If you use this site regularly and would like to help keep the site on the Internet',
    progress: 'Progress',
    percentage: '45%',
    raised: 'Raised:',
    value: '$4500',
    goal: 'Goal:',
    target: '$10000'
  },
  {
    image: cause4,
    title: 'Holyday Gifts In Kind',
    desc: 'If you use this site regularly and would like to help keep the site on the Internet',
    progress: 'Progress',
    percentage: '45%',
    raised: 'Raised:',
    value: '$4500',
    goal: 'Goal:',
    target: '$10000'
  },
  {
    image: cause5,
    title: 'For clean Water in Africa',
    desc: 'If you use this site regularly and would like to help keep the site on the Internet',
    progress: 'Progress',
    percentage: '45%',
    raised: 'Raised:',
    value: '$4500',
    goal: 'Goal:',
    target: '$10000'
  },
  {
    image: cause6,
    title: 'Health and Rights',
    desc: 'If you use this site regularly and would like to help keep the site on the Internet',
    progress: 'Progress',
    percentage: '45%',
    raised: 'Raised:',
    value: '$4500',
    goal: 'Goal:',
    target: '$10000'
  },
]);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>