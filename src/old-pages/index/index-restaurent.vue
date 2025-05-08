<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="flex md:h-screen py-36 items-center bg-[url('../../assets/images/food/bg01.jpg')] bg-no-repeat bg-fixed bg-top bg-cover">
            <div class="absolute inset-0 bg-black opacity-30"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 justify-center text-center">
                    <div class="">
                        <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl text-white mb-5">Amazing Food, Fresh <br> Products & Wine</h1>
                        <p class="text-white/70 text-lg max-w-xl mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>
                        <div class="mt-8">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer" @click="screenTop"><i class="uil uil-restaurant"></i> Book A Table</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FoodExperience/>

        <FoodItems />

        <BookTable />

        <section class="relative md:py-24 py-16 bg-indigo-600/5" >
            <Client :happy=true />
        </section>

        <FoodPost />

        <Footer />

        <Switcher />

        <Cookies />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import FoodExperience from '@/components/restaurent/food-experience.vue';
import FoodItems from '@/components/restaurent/food-items.vue';
import BookTable from '@/components/restaurent/book-table-restaurent.vue';
import Client from '@/components/users.vue';
import FoodPost from '@/components/restaurent/food-insta-post.vue';
import Footer from '@/components/footer/footer-restaurent.vue';
import Cookies from '@/components/start-cookies.vue';
import Switcher from '@/components/switcher.vue';

const screenTop = () => {
  window.scrollTo({ top: 3300, behavior: "smooth" });
};
</script>