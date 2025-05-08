<template>
    <div>
        <Navbar />
        <section class="relative md:pb-24 pb-16 lg:mt-24 mt-[74px]">
            <div class="container relative lg:!px-3 !px-0">
                <div class="group profile-banner relative overflow-hidden text-transparent lg:rounded-xl shadow-sm dark:shadow-gray-700">
                    <input id="pro-banner" name="profile-banner" type="file" class="hidden"  @change="loadFile2" />
                    <div class="relative shrink-0">
                        <img :src="imageSrc2" class="h-80 w-full object-cover" id="profile-banner" alt="">
                        <div class="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/10 duration-500"></div>
                        <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                    </div>
                </div>

                <div class="md:flex justify-center">
                    <div class="md:w-full">
                        <div class="relative -mt-[60px] text-center">
                            <div class="group profile-pic w-[112px] mx-auto">
                                <input id="pro-img" name="profile-image" type="file" class="hidden"  @change="loadFile" />
                                <div>
                                    <div class="relative size-28 mx-auto rounded-full shadow-sm dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                                        <img :src="imageSrc" class="rounded-full" id="profile-image" alt="">
                                        <div class="absolute inset-0 group-hover:bg-slate-900/10 duration-500"></div>
                                        <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6">
                                <h5 class="text-xl font-semibold">Cristina Murfy <i class="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i></h5>
                                <p class="text-slate-400 text-[16px] mt-1">Created by <router-link to="#" class="text-indigo-600 font-semibold">1x5484dcdvcdscds56c4</router-link></p>

                                <div class="mt-4 space-x-1">
                                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-plus"></i> Follow me</router-link>
                                    <router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-account-plus"></i></router-link>
                                    <router-link to="/nft-creator-profile-edit" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i class="mdi mdi-cog"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="relative mt-16">
            <Products :pagination=true />
            </section>
        </section>
        <Footer :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar-nft.vue';
import Products from '@/components/nft/nft-all-products.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import image1 from '@/assets/images/blog/slide02.jpg'
import user from '@/assets/images/client/06.jpg'

const imageSrc2 = ref(image1);
const imageSrc = ref(user);
const image = ref('');
const image2 = ref('');

const loadFile = (event) => {
  image.value = document.getElementById(event.target.name);
  imageSrc.value = URL.createObjectURL(event.target.files[0]);
};

const loadFile2 = (event) => {
  image2.value = document.getElementById(event.target.name);
  imageSrc2.value = URL.createObjectURL(event.target.files[0]);
};
</script>