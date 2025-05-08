<template>
<div>
    <Navbar />
    <section class="relative mt-20">
        <div class="container-fluid relative md:mx-4 mx-2">
            <div class="relative pt-48 pb-60 table w-full rounded-2xl shadow-md overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="image-wrap absolute -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto duration-500" :style="{ 'background-image': `url(${randomImage})` }"></div>
                </div>
                <div class="absolute inset-0 bg-slate-900/60"></div>
                <div class="container relative">
                    <div class="grid grid-cols-1">
                        <div class="md:text-start text-center">
                            <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Discover Most Suitable <br> Properties</h1>
                            <p class="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="relative md:pb-24 pb-16">
        <div class="container relative">
            <div class="grid grid-cols-1 justify-center">
                <div class="relative -mt-32">
                    <div class="grid grid-cols-1">
                        <div class="p-6 bg-white dark:bg-slate-900 rounded-md shadow-md dark:shadow-gray-800">
                            <form action="#">
                                <div class="registration-form relative text-dark text-start">
                                    <div
                                        class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                        <div class="filter-search-form relative">
                                            <i class="uil uil-search absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <input name="name" type="text" id="job-keyword" class="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Search your keaywords">
                                        </div>

                                        <div class="filter-search-form relative flex bg-gray-50 dark:bg-slate-800">
                                            <i class="uil uil-estate absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <select class="form-select ms-10 w-full bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 outline-none text-slate-400" data-trigger name="choices-catagory" id="choices-catagory" aria-label="Default select example">
                                                <option>Houses</option>
                                                <option>Apartment</option>
                                                <option>Offices</option>
                                                <option>Townhome</option>
                                            </select>
                                        </div>

                                        <div class="filter-search-form relative flex bg-gray-50 dark:bg-slate-800">
                                            <i class="uil uil-usd-circle absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <select class="form-select ms-10 w-full bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 outline-none text-slate-400" data-trigger name="choices-min-price" id="choices-min-price" aria-label="Default select example">
                                                <option>Min Price</option>
                                                <option>500</option>
                                                <option>1000</option>
                                                <option>2000</option>
                                                <option>3000</option>
                                                <option>4000</option>
                                                <option>5000</option>
                                                <option>6000</option>
                                            </select>
                                        </div>

                                        <div class="filter-search-form relative flex bg-gray-50 dark:bg-slate-800">
                                            <i class="uil uil-usd-circle absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                            <select class="form-select ms-10 w-full bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 outline-none text-slate-400" data-trigger name="choices-max-price" id="choices-max-price" aria-label="Default select example">
                                                <option>Max Price</option>
                                                <option>500</option>
                                                <option>1000</option>
                                                <option>2000</option>
                                                <option>3000</option>
                                                <option>4000</option>
                                                <option>5000</option>
                                                <option>6000</option>
                                            </select>
                                        </div>

                                        <div class="lg:mt-6">
                                            <input type="submit" id="search" name="search" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn w-full !h-12 rounded" value="Search">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Control />
        <Work />
        <Features />
        <Trusted />
    </section>

    <Users :users=true />
    <GetInTouch />
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Control from '@/components/real-estate/estate-control.vue';
import Work from '@/components/real-estate/estate-work.vue';
import Features from '@/components/real-estate/estate-feature.vue';
import Trusted from '@/components/real-estate/estate-trusted.vue';
import Users from '@/components/users.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import image from '@/assets/images/real/bg/01.jpg';
import image2 from '@/assets/images/real/bg/02.jpg';
import image3 from '@/assets/images/real/bg/03.jpg';

const randomImage = ref('');
const backgroundImages = [image, image2, image3];

const changeBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  randomImage.value = backgroundImages[randomIndex];
};

onMounted(() => {
  changeBackground();
  setInterval(changeBackground, 4000);
});
</script>
