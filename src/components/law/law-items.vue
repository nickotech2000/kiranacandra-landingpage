<template>
    <div class="container relative">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div v-for="item in datas" :key="item" :class="item.class">
                <div :class="item.class2">
                    <i :class="item.icon"></i>
                </div>
                <div class="mt-6">
                    <router-link to="#" class="text-lg font-medium group-hover:text-white duration-500">{{item.name}}</router-link>
                    <p class="text-slate-400 group-hover:text-white/75 duration-500 mt-3">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    const datas = [
        {
            icon: 'uil uil-university',
            name: 'Professional Court Service',
            title: 'Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.',
            class: 'group relative p-6 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 bg-white dark:bg-slate-900 overflow-hidden text-center',
            class2: 'size-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto'
        },
        {
            icon: 'uil uil-money-bill',
            name: 'Competitive Pricing',
            title: 'Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.',
            class: '"group relative p-6 bg-indigo-600 dark:hover:bg-indigo-600 text-white duration-500 overflow-hidden text-center',
            class2: 'size-20 bg-white text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-600 mx-auto'
        },
        {
            icon: 'uil uil-award',
            name: 'Top Expart Attorney',
            title: 'Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.',
            class: 'group relative p-6 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 bg-white dark:bg-slate-900 overflow-hidden text-center',
            class2: 'size-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto'
        },
    ]
</script>