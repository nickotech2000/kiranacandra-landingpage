<template>
    <div class="container relative">
        <div class="md:flex justify-center">
            <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0 lg:w-4/5">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-[24px]">
                    <div v-for="service in services" :key="service" class="group flex p-6 md:px-4 rounded-lg shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 duration-500">
                        <div class="min-w-[64px] h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                            <i :class="service.icon"></i>
                        </div>
                        <div class="content ms-4 flex-1">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{service.name}}</router-link>
                            <p class="text-slate-400 mt-2">{{service.title}}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const services = [
        {
            icon: 'uil uil-presentation-line',
            name: 'Best Financial Advice',
            title: 'The most well-known which is said to have originated'
        },
        {
            icon: 'uil uil-bill',
            name: 'Authorised Finance Brand',
            title: 'The most well-known which is said to have originated'
        },
        {
            icon: 'uil uil-money-withdrawal',
            name: 'Compehensive Advices',
            title: 'The most well-known which is said to have originated'
        },
        {
            icon: 'uil uil-presentation-line',
            name: 'Best Tax Advantages',
            title: 'The most well-known which is said to have originated'
        },
    ]
</script>