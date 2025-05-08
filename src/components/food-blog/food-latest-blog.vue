<template>
    <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Blogs</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
                </div><!--end grid-->

                <div id="grid" class="lg:columns-4 md:columns-3 sm:columns-2 columns-1 gap-4 mx-3 mt-8">
                    <!-- Start Post -->
                    <div v-for="item in datas" :key="item.id"  @click="viewBlogDetail(item.id)" class="picture-item mb-5">
                        <div class="group relative">
                            <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                                <img :src="item.image" class="group-hover:scale-105 duration-500 ease-in-out" alt="">
                                <div class="absolute top-0 start-0 pt-3 ps-3">
                                    <a href="" class="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{{item.status}}</a>
                                </div>
                            </div>

                            <div class="p-3">
                                <router-link :to="{ name: 'food-recipe', params: { id: item.id } }" class="block hover:text-indigo-600 text-lg font-semibold">{{item.title}}</router-link>

                                <ul class="list-none flex items-center justify-between mt-2">
                                    <li>
                                        <span class="text-slate-400 block"><i class="uil uil-calendar-alt"></i>{{item.date}}</span>
                                    </li>

                                    <li class="">
                                        <a href="#!" class="text-red-600/20 hover:text-red-600 focus:text-red-600"><i class="mdi mdi-heart"></i></a> <span class="text-slate-400">{{item.like}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Post -->                  
                </div><!--end grid-->
       <pagination />

            </div>

</template>

<script>
import pagination from '@/components/shop/shop-pagination.vue'

    export default {
        data() {
            return {
                datas:[
                    {
                        id: 8,
                        image: require('../../assets/images/food/blog/1.jpg'),
                        status: 'Salad',
                        title: 'Giant Multi-Stuffed Soft Pretzel',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id: 9,
                        image: require('../../assets/images/food/blog/6.jpg'),
                        status: 'Cooker',
                        title: 'Slow Cooker Coconut Curry',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id: 10,
                        image: require('../../assets/images/food/blog/m3.jpg'),
                        status: 'Breads',
                        title: 'Meal Prep Breakfast For The Week',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:11,
                        image: require('../../assets/images/food/blog/5.jpg'),
                        status: 'Breakfast',
                        title: 'Romantic Breakfast for Two',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:12,
                        image: require('../../assets/images/food/blog/m2.jpg'),
                        status: 'Birthday',
                        title: 'Perfect for a Birthday Party',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:13,
                        image: require('../../assets/images/food/blog/f3.jpg'),
                        status: 'Salad',
                        title: 'Mint-Pomegranate Salad',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:14,
                        image: require('../../assets/images/food/blog/f1.jpg'),
                        status: 'Breads',
                        title: 'Macchiato Pumpkin Soup',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:15,
                        image: require('../../assets/images/food/blog/2.jpg'),
                        status: 'Breads',
                        title: 'Cinnamon Buns for Two',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:16,
                        image: require('../../assets/images/food/blog/3.jpg'),
                        status: 'Vegetarian',
                        title: 'Vegetarian Breakfast for You',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:17,
                        image: require('../../assets/images/food/blog/f4.jpg'),
                        status: 'Apple',
                        title: 'Tiny Apple Pies with Cinnamon',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:18,
                        image: require('../../assets/images/food/blog/m1.jpg'),
                        status: 'Chef',
                        title: 'Braised Pork Belly Adobo By Chef Leah Cohen',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:19,
                        image: require('../../assets/images/food/blog/f2.jpg'),
                        status: 'Eat',
                        title: '5 Recipes Almost Too Cute To Eat',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                    {
                        id:20,
                        image: require('../../assets/images/food/blog/7.jpg'),
                        status: 'Cheese',
                        title: 'Lactose Free Homemade Cheese',
                        date: ' 14th July 2022',
                        like: '22'
                    },
                ]
            }
        },
        components:{
            pagination
        },
        methods: {
        viewBlogDetail(id) {
            this.$router.push({ name: 'food-recipe', params: { id } });
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>