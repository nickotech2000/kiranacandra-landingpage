<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
            <div v-for="item in datas" :key="item" class="group relative lg:px-10 mt-4 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div class="relative overflow-hidden text-transparent -m-3">
                    <i data-feather="hexagon" class="size-32 fill-indigo-600/5 mx-auto"></i>
                    <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                        <i :class="item.icon"></i>
                    </div>
                </div>

                <div class="mt-6">
                    <router-link to="#" class="text-xl font-medium duration-500 hover:text-indigo-600">{{item.name}}</router-link>
                    <p class="text-slate-400 duration-500 mt-3">{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const datas = [
        {
            icon : 'uil uil-wifi',
            name: 'Free Internet',
            title: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon : 'uil uil-users-alt',
            name: 'Group Events',
            title: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon : 'uil uil-crop-alt-rotate-left',
            name: 'Meeting Room',
            title: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon : 'uil uil-glass-tea',
            name: 'Coffee & Tea',
            title: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon : 'uil uil-parking-circle',
            name: 'Free Parking',
            title: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon : 'uil uil-process',
            name: 'Relax Room',
            title: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
    ]
</script>