<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="md:flex justify-center">
            <div class="lg:w-2/3 md:w-full">
                <div id="accordion-collapse" data-accordion="collapse" class="mt-6">
                    <div v-for="question in questions" :key="question" class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                        <h2 class="text-base font-semibold bg-white dark:bg-slate-900" id="accordion-collapse-heading-1">
                            <button @click="toggle(question.id)" :class="question.id === isActive ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''" type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                <span>{{question.title}}</span>
                                <svg :class="question.id === isActive ? 'rotate-180' : ''" data-accordion-icon class="size-4  shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" :class="question.id === isActive ? '' : 'hidden'" class="bg-white dark:bg-slate-900" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5">
                                <p class="text-slate-400 dark:text-gray-400">{{ question.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const isActive = ref(1);

const questions = [
  { id: 1, title: 'What is Dedicated Server?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 2, title: 'Do I need a Dedicated Server?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 3, title: 'How can I get my website transferred for free?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 4, title: 'What level of access do I get with my Dedicated Server?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 5, title: 'Which control panels are provided?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 6, title: 'Do you offer any billing panels?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 7, title: 'How long will it take for my server to be ready for use?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 8, title: 'How do I access my Dedicated Server?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
];

const toggle = (id) => {
  isActive.value = id;
};

</script>