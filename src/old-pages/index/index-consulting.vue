<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative md:py-60 py-36 bg-[url('../../assets/images/consulting/bg.jpg')] bg-right bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-slate-900/70"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 items-center mt-10">
                <span class="text-white/80 font-semibold mb-4 text-lg">Turn Your Skills And Expertise Into A Successful Business</span>
                <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Grow your business <br> with focus & clarity.</h4>
                <p class="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                <div class="mt-8">
                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Learn More <i class="uil uil-arrow-right"></i></router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div class="container relative">
            <Companylogo />
        </div>
    </section>

    <Services />
    <BusinessGrowth />

    <section class="relative md:py-24 py-16">
         <Products />
         <Trusted />
         <Users />
         <Team />
    </section>

    <Blogs :blog=true />

    <section class="md:mt-24 mt-16" >
        <Footer :email=true />
        <Switcher />
        <Cookies />
    </section>
</div>
</template>

<script setup>
    import Navbar from '@/components/navbar/navbar.vue';
    import Companylogo from '@/components/company-logos.vue';
    import Services from '@/components/consulting/consulting-services.vue';
    import BusinessGrowth from '@/components/consulting/business-growth.vue'
    import Products from '@/components/consulting/digital-products.vue';
    import Trusted from '@/components/real-estate/estate-trusted.vue';
    import Users from '@/components/software-client.vue';
    import Team from '@/components/startup/startup-team.vue';
    import Blogs from '@/components/blogs/blogs.vue';
    import Footer from '@/components/footer/footer.vue';
    import Switcher from '@/components/switcher.vue';
    import Cookies from '@/components/start-cookies.vue'
</script>
