<template>
            <div class="container relative">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span class="text-indigo-600">Insurance</span> for your <br> everyday needs</h3>
                        <p class="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                        <div class="mt-6">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Get started</router-link>
                        </div>
                    </div>

                    <div class="lg:ms-8 md:mt-0 mt-8">
                        <div id="accordion-collapseone" data-accordion="collapse">
                            <div v-for="item in datas" :key="item" class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                    <button @click="handleclick(item.id)" :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''" type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                        <span>{{item.title}}</span>
                                        <svg :class="item.id === activeIndex ? 'rotate-180' : ''" data-accordion-icon class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-1" :class="item.id === activeIndex ? '' : 'hidden'" aria-labelledby="accordion-collapse-heading-1">
                                    <div class="p-5">
                                        <p class="text-slate-400 dark:text-gray-400">{{item.desc}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script setup>

import { ref, reactive } from 'vue';

const activeIndex = ref(1);

const datas = reactive([
  {
    id: 1,
    title: 'How does it work ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 2,
    title: 'Do I need a designer to use Techwind ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 3,
    title: 'What do I need to do to start selling ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
]);

const handleclick = (id) => {
  activeIndex.value = id;
};

</script>
