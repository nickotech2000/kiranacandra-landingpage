<template>
    <div class="container relative">
        <div class="grid grid-cols-1 justify-center">
            <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0">
                <div class="relative bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden">
                    <div class="grid lg:grid-cols-12 grid-cols-1">
                        <div class="lg:col-span-4 order-1 lg:order-2 bg-indigo-600">
                            <div class="p-[30px] lg:text-start text-center">
                                <span class="text-xl text-white/75">Our proud</span>
                                <h4 class="text-2xl font-semibold text-white my-3">25 years of undefeated success</h4>
                                <p class="text-white/75 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <div class="mt-6">
                                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">About us</router-link>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-8 order-2 lg:order-1">
                            <div class="grid md:grid-cols-2 grid-cols-1 p-[30px] gap-[30px]">
                                <div v-for="item in datas" :key="item" class="group flex duration-500">
                                    <div class="flex align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-xs dark:shadow-gray-800 duration-500">
                                        <i :class="item.icon"></i>
                                    </div>
                                    <div class="flex-1 ms-4">
                                        <h4 class="mb-0 text-lg font-medium">{{item.name}}</h4>
                                        <p class="text-slate-400 mt-3">{{item.title}}</p>
                                    </div>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const datas = [
        {
            icon: 'uil uil-ruler-combined',
            name: 'Project Planning',
            title: 'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
        },
        {
            icon: 'uil uil-constructor',
            name: 'Qualified Specialists',
            title: 'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
        },
        {
            icon: 'uil uil-no-entry',
            name: 'Constant Maintenance',
            title: 'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
        },
        {
            icon: 'uil uil-cog',
            name: 'Warranty Service',
            title: 'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
        },
    ]
</script>