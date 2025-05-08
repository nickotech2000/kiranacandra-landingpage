<template>
    <div>
        <Navbar />
        <section class="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 mt-14">
                    <h3 class="text-3xl leading-normal font-semibold">Cart</h3>
                </div>

                <div class="relative mt-3">
                    <ul class="tracking-[0.5px] mb-0 inline-block">
                        <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><router-link to="/index-shop">Techwind</router-link></li>
                        <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                        <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Cart</li>
                    </ul>
                </div>
            </div>
        </section>
       <Shopcart />
       <MobileApp />
       <Footer />
       <Switcher />
    </div>
</template>

<script setup>
    import Navbar from '@/components/navbar/navbar-shop.vue';
    import Shopcart from '@/components/shop/shop-cart.vue';
    import MobileApp from '@/components/mobile-app.vue';
    import Footer from '@/components/footer/footer-shop.vue';
    import Switcher from '@/components/switcher.vue'
</script>
