<template>
    <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Products</h3>
                        <p class="text-slate-400 max-w-xl">Please check the below our latest or popular items</p>
                    </div>

                    <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <a href="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></a>
                        
                    </div>
                </div><!--end grid-->

                <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group">
                        <div class="relative overflow-hidden shadow-sm dark:shadow-gray-800">
                            <img :src="item.image" class="group-hover:scale-105 duration-500" alt="">

                            <div class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                <a href="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full">Add to Cart</a>
                            </div>

                            <span class="absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                                <a href="javascript:void(0)" class="text-slate-900 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i class="mdi mdi-heart"></i></a>
                            </span>
                        </div>

                        <div class="p-4 pb-0 text-center">
                            <a href="" class="text-lg font-semibold hover:text-indigo-600">{{item.name}}</a>

                            <p class="text-slate-400 font-semibold">{{item.price}}</p>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
                <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div class="md:col-span-12 text-center">
                        <a href="" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></a>
                        <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        image: require('../../assets/images/furniture/i1.jpg'),
                        name: 'Item name is #1',
                        price: '$145.00'
                    },
                    {
                        image: require('../../assets/images/furniture/i2.jpg'),
                        name: 'Item name is #2',
                        price: '$145.00'
                    },
                    {
                        image: require('../../assets/images/furniture/i3.jpg'),
                        name: 'Item name is #3',
                        price: '$145.00'
                    },
                    {
                        image: require('../../assets/images/furniture/i4.jpg'),
                        name: 'Item name is #4',
                        price: '$145.00'
                    },
                    {
                        image: require('../../assets/images/furniture/i5.jpg'),
                        name: 'Item name is #5',
                        price: '$145.00'
                    },
                    {
                        image: require('../../assets/images/furniture/i6.jpg'),
                        name: 'Item name is #6',
                        price: '$145.00'
                    },
                    {
                        image: require('../../assets/images/furniture/i7.jpg'),
                        name: 'Item name is #7',
                        price: '$145.00'
                    },
                    {
                        image: require('../../assets/images/furniture/i8.jpg'),
                        name: 'Item name is #8',
                        price: '$145.00'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>