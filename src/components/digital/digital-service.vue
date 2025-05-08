<template>
        <section class="relative md:pt-24 pt-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="text-center md:px-6">
                        <div class="size-28 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto" :class="item.class">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium" :class="item.class2">{{item.title}}</router-link>
                            <p class="text-slate-400 mt-3">{{item.desc }}</p>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
  {
    icon: 'uil uil-airplay',
    class: 'bg-indigo-600/5 text-indigo-600',
    class2: 'hover:text-indigo-600',
    title: 'Digital Marketing',
    desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
  },
  {
    icon: 'uil uil-presentation-play',
    class: 'bg-red-600/5 text-red-600',
    class2: 'hover:text-red-600',
    title: 'Video Production',
    desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
  },
  {
    icon: 'uil uil-mobile-android',
    class: 'bg-emerald-600/5 text-emerald-600',
    class2: 'hover:text-emerald-600',
    title: 'Web & Mobile',
    desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
  },
  {
    icon: 'uil uil-crop-alt',
    class: 'bg-amber-600/5 text-amber-600',
    class2: 'hover:text-amber-600',
    title: 'UX / UI Design',
    desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
  }
]);
</script>