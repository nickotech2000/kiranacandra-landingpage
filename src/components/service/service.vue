<template>
     <!-- Start -->
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Discover Area</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->
            
                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <!-- Content -->
                    <div v-for="item in datas" :key="item" class="group duration-500 text-center">
                        <div class="flex align-middle mx-auto justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl shadow-xs dark:shadow-gray-800 duration-500">
                            <i :class="item.icon"></i>
                        </div>
                        <div class="mt-4">
                            <a href="" class="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{{item.name}}</a>
                            <p class="text-slate-400 mt-2">{{item.title}}</p>
                        </div>
                    </div>
                    <!-- Content -->
                </div>
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        icon: 'uil uil-arrow-growth',
                        name: 'Business Service',
                        title: 'One advantage everything you need to generate'
                    },
                    {
                        icon: 'uil uil-dribbble',
                        name: 'Social Service',
                        title: 'One advantage everything you need to generate'
                    },
                    {
                        icon: 'uil uil-airplay',
                        name: 'Personal Service',
                        title: 'One advantage everything you need to generate'
                    },
                    {
                        icon: 'uil uil-university',
                        name: 'Banking Service',
                        title: 'One advantage everything you need to generate'
                    },
                    {
                        icon: 'uil uil-money-bill',
                        name: 'Insurance Service',
                        title: 'One advantage everything you need to generate'
                    },
                    {
                        icon: 'uil uil-truck',
                        name: 'Transportation Service',
                        title: 'One advantage everything you need to generate'
                    },
                    {
                        icon: 'uil uil-docker',
                        name: 'Warehousing Service',
                        title: 'One advantage everything you need to generate'
                    },
                    {
                        icon: 'uil uil-comments',
                        name: 'Communication Service',
                        title: 'One advantage everything you need to generate'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>