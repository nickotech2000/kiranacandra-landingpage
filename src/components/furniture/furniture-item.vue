<template>
  <!-- Start -->
            <div class="container relative">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group relative overflow-hidden shadow-sm dark:shadow-gray-800">
                        <img :src="item.image" class="group-hover:scale-105 duration-500" alt="">

                        <div class="absolute top-1/2 -translate-y-1/2 p-6">
                            <a href="" class="font-semibold text-2xl text-slate-950 hover:text-indigo-600 duration-500">{{ item.name }}</a>

                            <p class="mt-2 text-slate-950 font-medium">{{item.title}}</p>

                            <div class="mt-6">
                                <a href="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Shop Now <i class="uil uil-arrow-right"></i></a>
                                
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
                        image: require('../../assets/images/furniture/fea1.jpg'),
                        name: 'Sofa Set for House',
                        title: 'Dispatched within a week, from $125'
                    },
                    {
                        image: require('../../assets/images/furniture/fea2.jpg'),
                        name: 'Lighting on Express',
                        title: 'Dispatched within a week, from $125'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>