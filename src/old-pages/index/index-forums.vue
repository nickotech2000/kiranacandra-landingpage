<template>
<div>
   <Navbar :lightlogo=true :loginButton=true />
    <section class="relative table w-full py-36 md:py-56 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid grid-cols-1 mt-10 text-center">
                <h3 class="font-bold uppercase leading-normal text-4xl mb-5">Welcome to the Techwind Forum</h3>

                <p class="text-slate-400 text-lg mx-auto">We're here to help. Get in touch and we'll get back to you as soon as we can</p>
            
                <div class="subcribe-form mt-6">
                    <form class="relative max-w-xl mx-auto">
                        <input type="text" id="SearchForumKeyword" name="text" class="pt-4 pe-14 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" placeholder="Enter your keywords :">
                        <button type="submit" class="inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] size-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i class="uil uil-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section class="relative md:pb-24 pb-16">
        <Join />
        <Post />
    </section>
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Join from '@/components/forums/forum-join.vue';
import Post from '@/components/forums/forum-post.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
</script>