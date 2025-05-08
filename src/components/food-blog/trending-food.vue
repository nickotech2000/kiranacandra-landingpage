<template>
     <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trending Posts</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-2 grid-cols-1 items-center mt-8 gap-4">
                    <!-- Start Post -->
                    <div class="group relative overflow-hidden rounded-md">
                        <img src="../../assets/images/food/blog/8.jpg" class="group-hover:scale-105 duration-500 ease-in-out" alt="">
                        <div class="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                        <div class="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                            <div class="text-center">
                                <a href="" class="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Eggs</a>
                                <router-link to="/food-recipe" class="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">Spicy Cauliflower Burgers and Salad Recipe</router-link>

                                <div class="flex items-center justify-center mt-4">
                                    <img src="../../assets/images/client/01.jpg" class="size-10 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                    <a href="" class="font-medium text-white block ms-2">Calvin Carlo</a>
                                </div>
                            </div>
                        </div>

                        <div class="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            <a href="#!" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i class="mdi mdi-heart"></i></a>
                        </div>
                    </div>
                    <!-- End Post -->

                    <div>
                        <div class="grid grid-cols-1 gap-4">
                            <!-- Start Post -->
                            <div v-for="item in datas" :key="item" class="group md:flex items-center relative overflow-hidden">
                                <div class="md:w-[40%] relative overflow-hidden rounded-md">
                                    <img :src="item.image" class="group-hover:scale-105 duration-500 ease-in-out" alt="">
                                    <div class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                    <div class="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                        <a href="#!" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i class="mdi mdi-heart"></i></a>
                                    </div>
                                </div>

                                <div class="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                    <a href="" class="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{{item.name}}</a>
                                    <router-link to="/food-recipe" class="block hover:text-indigo-600 text-lg font-semibold mt-3">{{item.title}}</router-link>

                                    <span class="text-slate-400 block mt-3"><i class="uil uil-calendar-alt"></i> {{item.date}}</span>
                                </div>
                            </div>
                            <!-- End Post -->
                        </div>
                    </div>
                </div>
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas: [
                    {
                        image: require('../../assets/images/food/blog/1.jpg'),
                        name: 'Food',
                        title: 'Change Your Strategy: Find a Business Consultant',
                        date: ' 14th July 2022',
                    },
                    {
                        image: require('../../assets/images/food/blog/5.jpg'),
                        name: 'Food',
                        title: 'Creamy Garlic Parmesan Chicken Salad',
                        date: ' 14th July 2022',
                    },
                    {
                        image: require('../../assets/images/food/blog/4.jpg'),
                        name: 'Food',
                        title: 'Bourbon Street Rib-Eye Steak With Cheese',
                        date: ' 14th July 2022',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>