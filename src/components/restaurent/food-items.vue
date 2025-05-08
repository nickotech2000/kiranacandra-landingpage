<template>
    <section class="relative md:py-24 py-16 md:pt-12 bg-[url('../../assets/images/food/food-menu.png')] bg-no-repeat bg-top bg-cover">
        <div class="container relative">
            <div class="grid grid-cols-1 items-center gap-[30px]">
                <div class="filters-group-wrap text-center">
                    <div class="filters-group">
                        <ul class="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" data-group="all" :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" data-group="break" :class="selectedCategory == 'break' ? 'active' : ''"  @click="matchCategory('break')">Breakfast</li>
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" data-group="lunch" :class="selectedCategory == 'lunch' ? 'active' : ''" @click="matchCategory('lunch')">Lunch</li>
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" data-group="dinner" :class="selectedCategory == 'dinner' ? 'active' : ''"  @click="matchCategory('dinner')">Dinner</li>
                            <li class="inline-block text-sm uppercase font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" data-group="tea" :class="selectedCategory == 'tea' ? 'active' : ''" @click="matchCategory('tea')">Tea & Coffee</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="container relative mt-8">
            <div id="grid" class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
                <div v-for="item in filteredData" :key="item" class="group picture-item p-3 mt-6" data-groups='["break"]'>
                    <img :src="item.image" class="rounded-full size-32 mx-auto group-hover:animate-[spin_10s_linear_infinite]" alt="">
                    <div class="mt-4 text-center">
                        <router-link to="#" class="text-lg font-medium block hover:text-indigo-600 duration-500">{{ item.name }}</router-link>
                        <span class="text-slate-400 mt-2 block">{{ item.desc }}</span>
                        <h5 class="text-indigo-600 font-medium mt-4">{{ item.price }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import food1 from '@/assets/images/food/1.jpg'
import food2 from '@/assets/images/food/2.jpg'
import food3 from '@/assets/images/food/3.jpg'
import food4 from '@/assets/images/food/4.jpg'
import food5 from '@/assets/images/food/5.jpg'
import food6 from '@/assets/images/food/6.jpg'
import food7 from '@/assets/images/food/7.jpg'
import food8 from '@/assets/images/food/8.jpg'
import food9 from '@/assets/images/food/9.jpg'
import food10 from '@/assets/images/food/10.jpg'
import food11 from '@/assets/images/food/11.jpg'
import food12 from '@/assets/images/food/12.jpg'
import food13 from '@/assets/images/food/13.jpg'
import food14 from '@/assets/images/food/14.jpg'
import food15 from '@/assets/images/food/15.jpg'

const selectedCategory = ref(null);

const items = [
  {
    image: food1,
    name: 'Black bean dip',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'break',
  },
  {
    image: food2,
    name: 'Onion Pizza',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'lunch',
  },
  {
    image: food3,
    name: 'Chicken Breast',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'break',
  },
  {
    image: food4,
    name: 'Veg Pizza',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'dinner',
  },
  {
    image: food5,
    name: 'Cordon Bleu',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'break',
  },
  {
    image: food6,
    name: 'Boerewors',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'lunch',
  },
  {
    image: food7,
    name: 'Tarte Tatin',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'break',
  },
  {
    image: food8,
    name: 'Green Tea',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'tea',
  },
  {
    image: food9,
    name: 'Special Coffee',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'lunch',
  },
  {
    image: food10,
    name: 'Lemon Tea',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'dinner',
  },
  {
    image: food11,
    name: 'Pancakes',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'tea',
  },
  {
    image: food12,
    name: 'American Item',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'lunch',
  },
  {
    image: food13,
    name: 'Country side pizza',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'tea',
  },
  {
    image: food14,
    name: 'Chilly garlic potato',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'dinner',
  },
  {
    image: food15,
    name: 'Brownie with vanilla',
    price: '$25.00',
    title: 'A reader will be distracted by the readable',
    category: 'tea',
  },
];

const filteredData = computed(() =>
  selectedCategory.value
    ? items.filter((item) => item.category === selectedCategory.value)
    : items
);

const matchCategory = (category) => {
  selectedCategory.value = category;
};

onMounted(() => {
  matchCategory(selectedCategory.value);
});
</script>