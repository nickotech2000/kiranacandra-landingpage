<template>
  
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">How It Works</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item" class="group relative lg:px-10 duration-500 rounded-md bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div class="relative overflow-hidden text-transparent -m-3">
                    <i :data-feather="item.icon" class="size-32 fill-indigo-600/5 mx-auto"></i>
                    <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-md duration-500 text-4xl flex align-middle justify-center items-center">
                        <i :class="item.icon2"></i>
                    </div>
                </div>

                <div class="mt-6">
                    <h5 class="text-xl font-medium">{{item.name}}</h5>
                    <p class="text-slate-400 mt-3">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const datas = [
        {
            icon: 'hexagon',
            icon2: 'uil uil-estate',
            name: 'Evaluate Property',
            desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon: 'hexagon',
            icon2: 'uil uil-bag',
            name: 'Meeting with Agent',
            desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon: 'hexagon',
            icon2: 'uil uil-key-skeleton',
            name: 'Close the Deal',
            desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
    ]
</script>