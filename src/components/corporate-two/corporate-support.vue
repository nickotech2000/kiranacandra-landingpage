<template>
        <section class="relative bg-indigo-600 py-10">
            <div class="container relative">
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    <div v-for="item in datas" :key="item" class="group px-6 py-8 hover:bg-indigo-700 duration-500 ease-in-out">
                        <i :data-feather="item.icon" class="size-10 stroke-1 text-white"></i>

                        <div class="content mt-6">
                            <router-link to="#" class="text-lg font-semibold text-white/80 hover:text-white">{{item.name}}</router-link>
                            <p class="text-white/50 mt-4">{{item.desc}}</p>
                            
                            <div class="mt-5">
                                <router-link to="#" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-white hover:text-white duration-500 ease-in-out">Learn More <i class="uil uil-arrow-right"></i></router-link>
                                <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-white"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script setup>
const datas = [
    {
        icon: 'codesandbox',
        name: 'User Friendly',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon: 'send',
        name: 'Super Fast',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon: 'star',
        name: 'Insightful Analytics',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon: 'bookmark',
        name: 'Highly Rated',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
]
</script>