<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative lg:pb-24 pb-16">
        <div class="container-fluid relative">
            <div class="profile-banner relative text-transparent">
                <input id="pro-banner" name="profile-banner" type="file" class="hidden" />
                <div class="relative shrink-0">
                    <img :src="bg" class="h-80 w-full object-cover" id="profile-banner" alt="">
                    <div class="absolute inset-0 bg-slate-900/70"></div>
                    <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                </div>
            </div>
        </div>
        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex">
                <AccouTab />
                <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                    <div class="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h6 class="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                        <div class="md:flex mt-6">
                            <div class="md:w-1/2 md:px-3">
                                <div class="flex items-center mb-4 justify-between">
                                    <h5 class="text-xl font-semibold">Billing Address:</h5>
                                    <router-link to="#" class="text-indigo-600 text-lg"><i class="uil uil-edit align-middle"></i></router-link>
                                </div>
                                <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <p class="text-lg font-semibold mb-2">Jenny Jimenez</p>

                                    <ul class="list-none">
                                        <li class="flex">
                                            <i class="uil uil-map-marker text-lg me-2"></i>
                                            <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br> Houston, USA 485</p>
                                        </li>

                                        <li class="flex mt-1">
                                            <i class="uil uil-phone text-lg me-2"></i>
                                            <p class="text-slate-400">+123 897 5468</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                                <div class="flex items-center mb-4 justify-between">
                                    <h5 class="text-xl font-semibold">Shipping Address:</h5>
                                    <router-link to="#" class="text-indigo-600 text-lg"><i class="uil uil-edit align-middle"></i></router-link>
                                </div>
                                <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <p class="text-lg font-semibold mb-2">Jenny Jimenez</p>

                                    <ul class="list-none">
                                        <li class="flex">
                                            <i class="uil uil-map-marker text-lg me-2"></i>
                                            <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br> Houston, USA 485</p>
                                        </li>

                                        <li class="flex mt-1">
                                            <i class="uil uil-phone text-lg me-2"></i>
                                            <p class="text-slate-400">+123 897 5468</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer :email=true />
    <Switcher />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import AccouTab from '@/components/users-tab.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'
import bg from '@/assets/images/blog/bg.jpg'
</script>
