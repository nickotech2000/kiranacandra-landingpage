<template>
<div>
    <navbar :lightlogo=true :loginButton=true />

     <!-- Start Hero -->
    <section class="relative mt-[74px]">
        <div class="container-fluid relative">
            <div class="grid grid-cols-1">
                <div class="tiny-six-item">
                    <div v-for="item in datas" :key="item.id"  @click="viewBlogDetail(item.id)" class="tiny-slide">
                        <div class="group relative overflow-hidden">
                            <img :src="item.image" class="group-hover:scale-105 duration-500 ease-in-out" alt="">
                            <div class="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                            <div class="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                                <div class="text-center">
                                    <a href="" class="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{{item.title}}</a>
                                    <router-link :to="{ name: 'food-recipe', params: { id: item.id } }" class="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">{{item.desc}}</router-link>

                                    <div class="flex items-center justify-center mt-4">
                                        <img :src="item.image2" class="size-10 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                        <a href="" class="font-medium text-white block ms-2">{{item.name}}</a>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <a href="#!" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i class="mdi mdi-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end tiny slide-->
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Hero -->
        <!-- Start -->
        <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 justify-center">
                <!-- Category -->
                <div v-for="item in datas2" :key="item" class="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                    <img :src="item.image" class="group-hover:scale-105 duration-500 ease-in-out" alt="">
                    <div class="absolute inset-0 bg-slate-900/60"></div>

                    <div class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                        <a href="#!" class="text-white font-semibold text-xl mb-0">{{item.name}}</a>
                    </div>
                </div>
                <!-- Category -->
            </div>
        </div><!--end container-->
    <latestblog />
    <trending />
    </section>
    <foodpost />
    <Footer  />
    <switcher />
    <cookies />
</div>
</template>

<script>
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import navbar from '@/components/navbar/navbar.vue';
import latestblog from '@/components/food-blog/food-latest-blog.vue';
import trending from '@/components/food-blog/trending-food.vue';
import foodpost from '@/components/food-blog/insta-post-food.vue';
import Footer from '@/components/footer/footer-small.vue';
import switcher from '@/components/switcher.vue';
import cookies from '@/components/start-cookies.vue'
    export default {
        data() {
            return {
                datas:[
                    {
                        id: 1,
                        image: require('../../assets/images/food/blog/m1.jpg'),
                        title: 'Eggs',
                        desc: 'Spicy Cauliflower Burgers and Salad Recipe',
                        image2: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo'
                    },
                    {
                        id: 2,
                        image: require('../../assets/images/food/blog/m6.jpg'),
                        title: 'Rice and Tomatos',
                        desc: 'Awesome Cake with Cream Cheese Frosting',
                        image2: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo'
                    },
                    {
                        id: 3,
                        image: require('../../assets/images/food/blog/m3.jpg'),
                        title: 'Chiken',
                        desc: 'Make Asian-Style Recipe ( Video and Gallery )',
                        image2: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo'
                    },
                    {
                        id: 4,
                        image: require('../../assets/images/food/blog/m4.jpg'),
                        title: 'Pizzas',
                        desc: 'Chocolate Mint Dessert Brownies Recipe',
                        image2: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo'
                    },
                     {
                        id: 5,
                        image: require('../../assets/images/food/blog/m5.jpg'),
                        title: 'Noodles',
                        desc: 'Healthy Homemade Pizza with a glass of wine',
                        image2: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo'
                    },
                    {
                        id: 6,
                        image: require('../../assets/images/food/blog/m2.jpg'),
                        title: 'Breads',
                        desc: 'Strawberry, Kiwi and Spinach Salad Recipe',
                        image2: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo'
                    },
                    {
                        id: 7,
                        image: require('../../assets/images/food/blog/m6.jpg'),
                        title: 'Rice and Tomatos',
                        desc: 'Healthy Homemade Pizza with a glass of wine',
                        image2: require('../../assets/images/client/01.jpg'),
                        name: 'Calvin Carlo'
                    }
                ],
                datas2:[
                    {
                     image: require('../../assets/images/food/blog/f1.jpg'),
                     name: 'Food'   
                    },
                    {
                     image: require('../../assets/images/food/blog/f2.jpg'),
                     name: 'Healthy'   
                    },
                    {
                     image: require('../../assets/images/food/blog/f3.jpg'),
                     name: 'Dinner'   
                    },
                    {
                     image: require('../../assets/images/food/blog/f4.jpg'),
                     name: 'Holiday'   
                    },
                    {
                     image: require('../../assets/images/food/blog/f5.jpg'),
                     name: 'Coffee'   
                    },
                ]
            }
        },
        components:{
            navbar,
            latestblog,
            trending,
            foodpost,
            Footer,
            switcher,
            cookies
        },
        setup() {
        onMounted(() => {
            tns({
                container: '.tiny-six-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 6
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            320: {
                items: 1
            },
        },
         });
        });
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