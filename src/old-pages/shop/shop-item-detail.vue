<template>
        <div>
            <Navbar />
            <section class="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
                <div class="container relative">
                    <div class="grid grid-cols-1 mt-14">
                        <h3 class="text-3xl leading-normal font-semibold">Product / Item Detail</h3>
                    </div>

                    <div class="relative mt-3">
                        <ul class="tracking-[0.5px] mb-0 inline-block">
                            <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><router-link to="/index-shop">Techwind</router-link></li>
                            <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                            <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Item Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Product />
            <ProductTab />
            <Recentproduct />
            <MobileApp />
            <Switcher />
            <Footer />
        </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Navbar from '@/components/navbar/navbar-shop.vue';
import Product from '@/components/shop/product-item.vue';
import ProductTab from '@/components/shop/product-tab.vue';
import Switcher from '@/components/switcher.vue';
import Recentproduct from '@/components/shop/recent-product.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footer from '@/components/footer/footer-shop.vue';

import s1 from '@/assets/images/shop/items/s1.jpg'
import s2 from '@/assets/images/shop/items/s2.jpg'
import s3 from '@/assets/images/shop/items/s3.jpg'
import s4 from '@/assets/images/shop/items/s4.jpg'
import s5 from '@/assets/images/shop/items/s5.jpg'
import s6 from '@/assets/images/shop/items/s6.jpg'
import s7 from '@/assets/images/shop/items/s7.jpg'
import s8 from '@/assets/images/shop/items/s8.jpg'

const route = useRoute();
const id = ref(null);
const data = ref(null);

const datas = [
  {
    id: 1,
    image: s1,
    status: 'New',
    name: 'Branded T-Shirt',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 2,
    image: s2,
    status: 'Featured',
    name: 'Shopping Bag',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 3,
    image: s3,
    status: '',
    name: 'Elegent Watch',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 4,
    image: s4,
    status: '',
    name: 'Casual Shoes',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 5,
    image: s5,
    status: 'New',
    name: 'Earphones',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 6,
    image: s6,
    status: '',
    name: 'Elegent Mug',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 7,
    image: s7,
    status: '',
    name: 'Sony Headphones',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 8,
    image: s8,
    status: 'Sale',
    name: 'Wooden Stools',
    price: '$16.00',
    price2: '$21.00'
  },
];

onMounted(() => {
  id.value = parseInt(route.params.id);
  data.value = datas.find((item) => item.id === id.value);
});
</script>