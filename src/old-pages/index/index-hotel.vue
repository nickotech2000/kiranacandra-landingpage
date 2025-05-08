<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 lg:py-64 duration-700" :style="{ 'background-image': `url(${randomImage})` }">
        <div class="absolute inset-0" id="overlay"></div>
        <div class="absolute inset-0 ltr:md:bg-gradient-to-l rtl:md:bg-gradient-to-r md:from-transparent md:via-indigo-600/80 md:to-indigo-800"></div>
        <div class="container relative">
            <div class="grid grid-cols-1">
                <div class="md:text-start text-center mt-10">
                    <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Make your holidays <br> memorables</h1>
                    <p class="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <router-link to="">
                        <i class="mdi mdi-arrow-down text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 size-12 mx-auto shadow-md dark:shadow-gray-800 mt-6"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="relative">
        <div class="container relative">
            <div class="grid grid-cols-1 justify-center">
                <div class="relative -mt-28">
                    <div class="p-6 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800">
                        <div class="section-title">
                            <h4 class="text-2xl font-semibold mb-3">Search your trip</h4>
                            <p class="text-slate-400 mx-auto para-desc">We make it a priority to offer flexible services to accomodate your needs</p>
                        </div>

                        <form class="mt-4">
                            <div class="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 date2">
                                <div>
                                    <label class="font-semibold">Check in :</label>
                                    <div>
                                        <VueDatePicker v-model="date" class="dp__theme_dark mt-2 h-10" :enable-time-picker="false" placeholder="Select date :" text-input />
                                    </div>
                                </div>

                                <div>
                                    <label class="font-semibold">Check out :</label>
                                    <VueDatePicker v-model="date2" class="dp__theme_dark mt-2" :enable-time-picker="false" placeholder="Select date :" text-input />
                                </div>

                                <div>
                                    <label class="font-semibold">Adults :</label>
                                    <input type="number" min="0" autocomplete="off" id="adult" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Adults :">
                                </div>

                                <div>
                                    <label class="font-semibold">Childrens :</label>
                                    <input type="number" min="0" autocomplete="off" id="childrens" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Childrens :">
                                </div>

                                <div class="lg:mt-7">
                                    <input type="submit" id="submit" name="send" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Search Now">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative md:py-24 py-16 overflow-hidden">
        <Treeps />
        <Tours />
        <Resort />
        <div class="relative md:mt-24 mt-16">
            <Customer :customer=true />
        </div>
        <Blogs />
    </section>
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import image from '@/assets/images/hotel/bg1.jpg';
import image2 from '@/assets/images/hotel/bg2.jpg';
import image3 from '@/assets/images/hotel/bg3.jpg';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Treeps from '@/components/future-treeps.vue';
import Tours from '@/components/populer-tour.vue';
import Resort from '@/components/resort-hotel.vue';
import Customer from '@/components/users.vue';
import Blogs from '@/components/blogs/hotel-blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

const randomImage = ref('');
const backgroundImages = [image, image2, image3];
const date = ref(null);
const date2 = ref(null);

const changeBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  randomImage.value = backgroundImages[randomIndex];
};

onMounted(() => {
  changeBackground();
  setInterval(changeBackground, 4000);
});
</script>
