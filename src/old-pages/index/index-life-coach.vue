<template>
    <div>
        <navbar :navLight="'nav-light !justify-end'" />

        <section class="relative flex md:h-screen md:py-0 py-36 items-center  bg-[url('../../assets/images/coach/bg.jpg')] lg:bg-left-top bg-center bg-no-repeat bg-cover">
            <div class="container relative z-3">
                <div class="grid grid-cols-1 mt-10">
                    <div class="md:text-start text-center">
                        <span class="bg-indigo-600 inline-block text-white text-sm font-semibold px-2.5 rounded mb-4">Life Coach</span>
                        <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Unleash Your Real <br> Potential and Live <br> Limitless!</h1>
                        <p class="text-white/70 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>

                        <div class="mt-8">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us <i class="mdi mdi-arrow-right align-middle"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <services />

        <section class="relative md:py-24 py-16" id="about">
            <about />
        </section>

        <users :users=true />
        <courses />
        <blogs />

        <section class="md:mt-24 mt-16" >
            <Footer :email=true />
            <switcher />
            <cookies />
        </section>
    </div>
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import services from '@/components/life-coach/services-client.vue';
import about from '@/components/life-coach/about-me.vue';
import users from '@/components/users.vue';
import courses from '@/components/life-coach/populer-courses.vue';
import blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import cookies from '@/components/start-cookies.vue';
</script>