<template>
        <div class="container relative">
            <div class="grid grid-cols-1 justify-center">
                <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px]">
                        <div v-for="service in services" :key="service" class="group p-6 md:px-4 rounded-lg shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500">
                            <div class="size-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                                <i :class="service.icon"></i>
                            </div>

                            <div class="content mt-7">
                                <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{service.name}}</router-link>
                                <p class="text-slate-400 mt-3">{{service.title}}</p>
                                <div class="mt-5">
                                    <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                                </div>
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