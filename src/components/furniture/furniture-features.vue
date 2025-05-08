<template>
    <!-- Start -->
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Featured Collections</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group relative overflow-hidden shadow-sm dark:shadow-gray-800">
                        <img :src="item.image" class="group-hover:scale-105 duration-500" alt="">

                        <div class="absolute top-0 start-0 end-0 p-6">
                            <a href="" class="font-semibold text-2xl text-slate-950 hover:text-indigo-600 duration-500">{{item.name}}</a>

                            <p class="mt-2 text-slate-950 font-medium">{{item.desc}}</p>

                            <div class="mt-4">
                                <a href="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See Collections <i class="uil uil-arrow-right"></i></a>
                                
                            </div>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        image: require('../../assets/images/furniture/fea3.jpg'),
                        name: 'Furniture Collection #1',
                        desc: 'Free delivery + Assembly on most items'
                    },
                    {
                        image: require('../../assets/images/furniture/fea4.jpg'),
                        name: 'Furniture Collection #2',
                        desc: 'Free delivery + Assembly on most items'
                    },
                    {
                        image: require('../../assets/images/furniture/fea5.jpg'),
                        name: 'Furniture Collection #3',
                        desc: 'Free delivery + Assembly on most items'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>