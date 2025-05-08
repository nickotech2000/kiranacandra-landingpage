<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Who We Are ?</h6>
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business strategies and top <br> permormance ideas</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>
        <div class="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item" class="group text-center">
                <i :data-feather="item.icon" class="size-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 duration-500 mx-auto"></i>
                <div class="mt-6">
                    <router-link to="#" class="text-xl font-semibold group-hover:text-indigo-600 duration-500">{{item.name}}</router-link>
                    <p class="text-slate-400 mt-4">{{ item.title }}</p>
                    <div class="mt-4">
                        <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right align-middle"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const datas = [
    {
        icon: 'pie-chart',
        name: 'Profitable Marketing',
        title: 'We develop digital strategies, products and services appreciated by clients.'
    },
    {
        icon: 'briefcase',
        name: 'SEO Specialists',
        title: 'We develop digital strategies, products and services appreciated by clients.'
    },
    {
        icon: 'target',
        name: 'Audience Analysis',
        title: 'We develop digital strategies, products and services appreciated by clients.'
    },
]
</script>