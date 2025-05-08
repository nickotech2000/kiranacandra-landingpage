<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Destination</h3>
            <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
            <div class="filters-group-wrap mt-4">
                <div class="filters-group">
                    <ul class="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500 " :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == 'beach' ? 'active' : ''" @click="matchCategory('beach')">Beach</li>
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == 'park' ? 'active' : ''" @click="matchCategory('park')">Park</li>
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == 'nature' ? 'active' : ''" @click="matchCategory('nature')">Nature</li>
                        <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == 'mountain' ? 'active' : ''" @click="matchCategory('mountain')">Mountain</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="grid" class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            <div v-for="item in filterData" :key="item" class="picture-item">
                <div class="group relative overflow-hidden rounded-md">
                    <div class="relative overflow-hidden">
                        <img :src="item.image" class="roubded-md" alt="">
                        <div class="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent"></div>
                    </div>

                    <div class="absolute bottom-0 start-0 end-0 flex justify-between p-6">
                        <div>
                            <router-link to="#" class="text-white/80 hover:text-white text-lg font-semibold block">{{ item.place }}</router-link>
                            <ul class="list-none mb-0 text-amber-400">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                        <h5 class="text-white/70">{{ item.price }}</h5>
                    </div>

                    <div class="absolute end-0 top-0 m-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                        <router-link to="#" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i class="mdi mdi-heart"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import travel1 from '@/assets/images/travel/1.jpg'
import travel2 from '@/assets/images/travel/2.jpg'
import travel3 from '@/assets/images/travel/3.jpg'
import travel4 from '@/assets/images/travel/4.jpg'
import travel5 from '@/assets/images/travel/5.jpg'
import travel6 from '@/assets/images/travel/6.jpg'
import travel7 from '@/assets/images/travel/7.jpg'
import travel8 from '@/assets/images/travel/8.jpg'

const selectedCategory = ref(null);

const datas = [
  {
    image: travel1,
    place: 'Thailand',
    price: '$59/night',
    category: 'beach'
  },
  {
    image: travel2,
    place: 'Bali',
    price: '$59/night',
    category: 'park'
  },
  {
    image: travel3,
    place: 'Bangkok',
    price: '$59/night',
    category: 'nature'
  },
  {
    image: travel4,
    place: 'Pataya',
    price: '$59/night',
    category: 'mountain'
  },
  {
    image: travel5,
    place: 'Europe',
    price: '$59/night',
    category: 'beach'
  },
  {
    image: travel6,
    place: 'Maldivas',
    price: '$59/night',
    category: 'park'
  },
  {
    image: travel7,
    place: 'Dubai',
    price: '$59/night',
    category: 'nature'
  },
  {
    image: travel8,
    place: 'India',
    price: '$59/night',
    category: 'mountain'
  }
];

const filterData = computed(() =>
  selectedCategory.value
    ? datas.filter((item) => item.category === selectedCategory.value)
    : datas
);

const matchCategory = (category) => {
  selectedCategory.value = category;
};

onMounted(() => {
  matchCategory(selectedCategory.value);
});
</script>