<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item" class="group p-6 rounded-lg shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 duration-500">
                <div class="size-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 duration-500">
                    <i :class="item.icon"></i>
                </div>

                <div class="content mt-7">
                    <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.name}}</router-link>
                    <p class="text-slate-400 mt-3">{{item.title}}</p>

                    <div class="mt-5">
                        <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"> <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>ReadMore <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const datas = [
        {
            name: 'Digital Marketing',
            title: 'The phrasal sequence of the is now so that many campaign and benefit',
            icon: 'uil uil-presentation-line'
        },
        {
            name: 'Investing',
            title: 'The phrasal sequence of the is now so that many campaign and benefit',
            icon: 'uil uil-bill'
        },
        {
            name: 'Mortgage Advisor',
            title: 'The phrasal sequence of the is now so that many campaign and benefit',
            icon: 'uil uil-money-withdrawal'
        },
        {
            name: 'Real Estate',
            title: 'The phrasal sequence of the is now so that many campaign and benefit',
            icon: 'uil uil-presentation-line'
        },
        {
            name: 'Payroll & Accounting',
            title: 'The phrasal sequence of the is now so that many campaign and benefit',
            icon: 'uil uil-usd-circle'
        },
        {
            name: 'Branch Registration',
            title: 'The phrasal sequence of the is now so that many campaign and benefit',
            icon: 'uil uil-invoice'
        },
    ]
</script>