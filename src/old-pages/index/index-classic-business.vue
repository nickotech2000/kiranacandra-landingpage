<template>
<div>
    <Tagline />
    <Navbar class="defaultscroll is-sticky bg-white dark:bg-slate-900 tagline-height" :lightlogo=true :loginButton=true :navLight="'!justify-start'" />
    <section class="relative table w-full md:pt-72 md:pb-40 py-36 bg-[url('../../assets/images/business/bg04.jpg')] bg-no-repeat bg-center bg-cover"> 
        <div class="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 dark:via-slate-900/50 to-white dark:to-slate-900"></div>
        <div class="container relative mt-10">
            <div class="grid grid-cols-1">
                <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">We Provide Best <br> Business Solutions</h1>
                <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                <div class="mt-6">
                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More <i class="mdi mdi-arrow-right"></i></router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="relative overflow-hidden md:py-24 py-16">
        <Export />
        <Features />
        <WorldWork />
        <Powerfull :powerfull=true />
        <Effective />
    </section>
    <Users :users=true />
    <section class="relative md:py-24 py-16">
        <Blogs />
    </section>
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
    import Tagline from '@/components/tagline.vue';
    import Navbar from '@/components/navbar/navbar.vue';
    import Export from '@/components/classic-business/classic-business-export.vue';
    import Features from '@/components/classic-business/classic-business-features.vue';
    import WorldWork from '@/components/classic-business/classic-business-world-work.vue';
    import Powerfull from '@/components/powerful-digitalization.vue';
    import Effective from '@/components/fast-effective.vue';
    import Users from '@/components/users.vue';
    import Blogs from '@/components/blogs/blogs.vue';
    import Footer from '@/components/footer/footer.vue';
    import Switcher from '@/components/switcher.vue';
    import Cookies from '@/components/start-cookies.vue'
</script>
