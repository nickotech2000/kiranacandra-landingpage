<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan </h3>

            <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid grid-cols-1">
            <ul class="inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full space-x-1" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                <li role="presentation" class="inline-block">
                    <button @click="toggle(1)" :class="isActive === 1 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-full w-full hover:text-indigo-600 duration-500" id="start-month-tab" data-tabs-target="#start-month" type="button" role="tab" aria-controls="start-month" aria-selected="true">Monthly</button>
                </li>
                <li role="presentation" class="inline-block">
                    <button @click="toggle(2)" :class="isActive === 2 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-full w-full duration-500" id="start-year-tab" data-tabs-target="#start-year" type="button" role="tab" aria-controls="start-year" aria-selected="false">Yearly <span class="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">Save  25%</span></button>
                </li>
            </ul>

            <div id="StarterContent" class="mt-6">
                <div :class="isActive === 1 ? '' : 'hidden'" id="start-month" role="tabpanel" aria-labelledby="start-month-tab">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                        <div class="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                            <h6 class="font-bold uppercase mb-5 text-indigo-600">Free</h6>

                            <div class="flex mb-5">
                                <span class="text-xl font-semibold">$</span>
                                <span class="price text-4xl font-semibold mb-0">0</span>
                                <span class="text-xl font-semibold self-end mb-1">/mo</span>
                            </div>

                            <ul class="list-none text-slate-400">
                                <li v-for="item in datas.slice(0, 2)" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            </ul>
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Signup</router-link>
                        </div>

                        <div class="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                            <h6 class="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                            <div class="flex mb-5">
                                <span class="text-xl font-semibold">$</span>
                                <span class="price text-4xl font-semibold mb-0">9</span>
                                <span class="text-xl font-semibold self-end mb-1">/mo</span>
                            </div>

                            <ul class="list-none text-slate-400">
                                <li v-for="item in datas.slice(0, 3)" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            </ul>

                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</router-link>
                        </div>

                        <div class="group border-b-[3px] border-indigo-600 p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                            <span class="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                            <h6 class="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                            <div class="flex mb-5">
                                <span class="text-xl font-semibold">$</span>
                                <span class="price text-4xl font-semibold mb-0">74</span>
                                <span class="text-xl font-semibold self-end mb-1">/mo</span>
                            </div>

                            <ul class="list-none text-slate-400">
                                <li v-for="item in datas.slice(0, 4)" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            </ul>

                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</router-link>
                        </div>

                        <div class="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                            <h6 class="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                            <div class="flex mb-5">
                                <span class="text-xl font-semibold">$</span>
                                <span class="price text-4xl font-semibold mb-0">99</span>
                                <span class="text-xl font-semibold self-end mb-1">/mo</span>
                            </div>

                            <ul class="list-none text-slate-400">
                                <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            </ul>
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</router-link>
                        </div>
                    </div>
                </div>

                <div :class="isActive === 2 ? '' : 'hidden'" id="start-year" role="tabpanel" aria-labelledby="start-year-tab">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                        <div class="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                            <h6 class="font-bold uppercase mb-5 text-indigo-600">Free</h6>

                            <div class="flex mb-5">
                                <span class="text-xl font-semibold">$</span>
                                <span class="price text-4xl font-semibold mb-0">0</span>
                                <span class="text-xl font-semibold self-end mb-1">/mo</span>
                            </div>

                            <ul class="list-none text-slate-400">
                                <li v-for="item in datas.slice(0, 2)" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            </ul>
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Signup</router-link>
                        </div>

                        <div class="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                            <h6 class="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                            <div class="flex mb-5">
                                <span class="text-xl font-semibold">$</span>
                                <span class="price text-4xl font-semibold mb-0">39</span>
                                <span class="text-xl font-semibold self-end mb-1">/mo</span>
                            </div>

                            <ul class="list-none text-slate-400">
                                <li v-for="item in datas.slice(0, 3)" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            </ul>
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Buy Now</router-link>
                        </div>

                        <div class="group border-b-[3px] border-indigo-600 p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                            <span
                                class="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                            <h6 class="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                            <div class="flex mb-5">
                                <span class="text-xl font-semibold">$</span>
                                <span class="price text-4xl font-semibold mb-0">274</span>
                                <span class="text-xl font-semibold self-end mb-1">/mo</span>
                            </div>

                            <ul class="list-none text-slate-400">
                                <li v-for="item in datas.slice(0, 4)" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            </ul>
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</router-link>
                        </div>

                        <div class="group border-b-[3px] border-gray-200 dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                            <h6 class="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                            <div class="flex mb-5">
                                <span class="text-xl font-semibold">$</span>
                                <span class="price text-4xl font-semibold mb-0">599</span>
                                <span class="text-xl font-semibold self-end mb-1">/mo</span>
                            </div>

                            <ul class="list-none text-slate-400">
                                <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            </ul>
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Started Now</router-link>
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
    const datas = ['Full Access', 'Source Files', 'Enhanced Security', 'Free Appointments', 'Free Installment'];

    const toggle = (number) => {
    isActive.value = number;
    };
</script>