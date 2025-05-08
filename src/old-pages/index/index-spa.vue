<template>
<div class="spa-css">
    <Navbar :navLight="'nav-light'" />
    <section class="relative md:py-60 py-36 bg-[url('../../assets/images/spa/bg.jpg')] bg-center bg-fixed bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-slate-900/10"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent"></div>

        <div class="container relative">
            <div class="grid grid-cols-1 text-center mt-10">
                <h5 class="!font-ebgaramond text-white text-xl font-medium wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Discover a truly relaxing experience</h5>
                <h4 class="!font-alex lg:text-9xl lg:leading-tight text-7xl text-white mt-4 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Beauty spa and wellness</h4>
                <p class="text-white/70 max-w-xl mx-auto mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>

                <div class="mt-8">
                    <router-link to="#" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-white border-white text-white hover:text-slate-900 font-normal wow animate__animated animate__fadeInUp" data-wow-delay=".5s">Explore Now</router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="relative md:py-24 py-16">
        <SpaItems />
        <Experience />
        <Services />
    </section>

    <SpaCta />

    <section class="relative md:mt-24 mt-16" >
        <Users :users=true :Testimonial2=true />
        <Teams />
        <Blogs />
    </section>

    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
    import Navbar from '@/components/navbar/navbar.vue';
    import SpaItems from '@/components/spa/spa-item.vue';
    import Experience from '@/components/spa/spa-experience.vue';
    import Services from '@/components/spa/spa-services.vue';
    import SpaCta from '@/components/spa/spa-cta.vue';
    import Users  from '@/components/users.vue';
    import Teams from '@/components/spa/spa-team.vue';
    import Blogs from '@/components/spa/spa-blogs.vue';
    import Footer from '@/components/footer/footer.vue';
    import Switcher from '@/components/switcher.vue';
    import Cookies from '@/components/start-cookies.vue'
</script>
