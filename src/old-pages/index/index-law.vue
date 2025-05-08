<template>
    <div>
        <Navbar :navLight="'nav-light'" />

        <section class="flex md:h-screen py-36 items-center bg-[url('../../assets/images/law/bg.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 mt-10">
                    <h5 class="text-lg text-white font-medium mb-3">Best Law Firm</h5>
                    <h3 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Unbelievable solutions <br> for all legal cases</h3>

                    <p class="text-slate-300 text-lg max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                    <div class="mt-8">
                        <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white">Get Started</router-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 overflow-hidden">
            <Items />
            <Companys />
            <Office />
        </section>

        <section class="relative md:pt-11 pt-3 md:pb-24 pb-16 overflow-hidden">
            <Expert />
            <Help />
            <Clients />
        </section>

        <Experience />

        <section class="relative md:py-24 py-16">
            <Team />
        </section>

        <Blogs :blog=true />

        <section class="relative md:mt-24 mt-16">
            <Footer :email=true />
            <Switcher />
            <Cookies />
        </section>
    </div>
</template>

<script setup>
    import Navbar from '@/components/navbar/navbar.vue';
    import Items from '@/components/law/law-items.vue';
    import Companys from '@/components/law/law-companys.vue';
    import Office from '@/components/law/law-office.vue';
    import Expert from '@/components/law/law-expert.vue';
    import Help from '@/components/law/law-help.vue';
    import Clients from '@/components/law/law-clients.vue';
    import Experience from '@/components/law/law-experience.vue';
    import Team from '@/components/law/law-teams.vue';
    import Blogs from '@/components/blogs/blogs.vue';
    import Footer from '@/components/footer/footer.vue';
    import Switcher from '@/components/switcher.vue';
    import Cookies from '@/components/switcher.vue';
</script>
