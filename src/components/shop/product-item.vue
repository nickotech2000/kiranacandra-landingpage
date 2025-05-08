<template>
    <section class="relative md:mt-24 mt-16">
            <div class="container">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="tiny-single-item">
                            <div v-for="item in images" :key="item" class="tiny-slide">
                                <img :src="item" class="rounded-md shadow-sm dark:shadow-gray-800" alt="">
                            </div><!--end content-->
                        </div><!--end tiny slider-->
                    </div><!--end col-->

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ms-6">
                            <h5 class="text-2xl font-semibold">{{data && data.name ? data.name : 'Branded T-Shirts'}}</h5>
                            <div class="mt-2">
                                <span class="text-slate-400 font-semibold me-1">$16USD <del class="text-red-600">$21USD</del></span>

                                <ul class="list-none inline-block text-orange-400">
                                    <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                    <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                    <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                    <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                    <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                    <li class="inline text-slate-400 font-semibold">4.8 (45)</li>
                                </ul>
                            </div>

                            <div class="mt-4">
                                <h5 class="text-lg font-semibold">Overview :</h5>
                                <p class="text-slate-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
                            
                                <ul class="list-none text-slate-400 mt-4">
                                    <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{item}}</li>
                                </ul>
                            </div>

                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-[30px] mt-4">
                                <div class="flex items-center">
                                    <h5 class="text-lg font-semibold me-2">Size:</h5>
                                    <div class="space-x-1" >
                                        <a v-for="item in size" :key="item" href="" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">{{item}}</a>
                                    </div>
                                </div><!--end content-->

                                <div class="flex items-center">
                                    <h5 class="text-lg font-semibold me-2">Quantity:</h5>
                                    <div class="qty-icons ms-3 space-x-1">
                                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 border hover:border-indigo-600 text-indigo-600 hover:text-white minus">-</button>
                                        <input min="0" name="quantity" value="0" type="number" class="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity">
                                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus">+</button>
                                    </div>
                                </div><!--end content-->
                            </div><!--end grid-->

                            <div class="mt-4">
                                <a href="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Shop Now</a>
                                <a href="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div>
        </section>
</template>

<script>
import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import image from '../../assets/images/shop/single/single-2.jpg'
import image2 from '../../assets/images/shop/single/single-3.jpg'
import image3 from '../../assets/images/shop/single/single-4.jpg'
import image4 from '../../assets/images/shop/single/single-5.jpg'
import image5 from '../../assets/images/shop/single/single-6.jpg'
    export default {
        data() {
            return {
                images:[
                    image,
                    image2,
                    image3,
                    image4,
                    image5,
                ],
                id: '',
                data: '',
                datas:['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'],
                size: ['S', 'M', 'L', 'XL'],
                datas2: [
                {
                    id: 1,
                    image: require('../../assets/images/shop/items/s1.jpg'),
                    status: 'New',
                    name: 'Branded T-Shirt',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 2,
                    image: require('../../assets/images/shop/items/s2.jpg'),
                    status: 'Featured',
                    name: 'Shopping Bag',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 3,
                    image: require('../../assets/images/shop/items/s3.jpg'),
                    status: '',
                    name: 'Elegent Watch',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 4,
                    image: require('../../assets/images/shop/items/s4.jpg'),
                    status: '',
                    name: 'Casual Shoes',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 5,
                    image: require('../../assets/images/shop/items/s5.jpg'),
                    status: 'New',
                    name: 'Earphones',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 6,
                    image: require('../../assets/images/shop/items/s6.jpg'),
                    status: '',
                    name: 'Elegent Mug',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 7,
                    image: require('../../assets/images/shop/items/s7.jpg'),
                    status: '',
                    name: 'Sony Headphones',
                    price: '$16.00',
                    price2: '$21.00'
                },
                {
                    id: 8,
                    image: require('../../assets/images/shop/items/s8.jpg'),
                    status: 'Sale',
                    name: 'Wooden Stools',
                    price: '$16.00',
                    price2: '$21.00'
                },
            ]
            }
        },
         mounted() {
        this.id = this.$route.params.id; // Accessing id query parameter
        this.data = this.datas2.find((item) => item.id === parseInt(this.id))

    },
        setup() {
        onMounted(() => {
            tns({
                container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
            });
        });
    },
    }
</script>

<style lang="scss" scoped>

</style>