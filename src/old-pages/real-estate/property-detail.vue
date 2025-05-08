<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />
        <section class="relative md:pb-24 pb-16 mt-20">
            <div class="container-fluid relative">
                <div class="md:flex mt-4">
                    <div class="lg:w-1/2 md:w-1/2 p-1">
                        <div class="group relative overflow-hidden">
                            <img  :src="blogimage" alt=""/>
                            <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <router-link to="#" @click="showLightbox(0)" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i class="uil uil-camera"></i></router-link>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 md:w-1/2">
                        <div class="flex">
                            <div class="w-1/2 p-1">
                                <div class="group relative overflow-hidden">
                                    <img :src="image2" alt="">
                                    <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out">
                                    </div>
                                    <div class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <router-link to="#" @click="showLightbox(1)" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i class="uil uil-camera"></i></router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="w-1/2 p-1">
                                <div class="group relative overflow-hidden">
                                    <img :src="image3" alt="">
                                    <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <router-link to="#" @click="showLightbox(2)" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i class="uil uil-camera"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="w-1/2 p-1">
                                <div class="group relative overflow-hidden">
                                    <img :src="image4" alt="">
                                    <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out">
                                    </div>
                                    <div
                                        class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <a @click="showLightbox(3)"
                                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i
                                                class="uil uil-camera"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="w-1/2 p-1">
                                <div class="group relative overflow-hidden">
                                    <img :src="image5" alt="">
                                    <div class="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out">
                                    </div>
                                    <div
                                        class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <a @click="showLightbox(4)"
                                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i
                                                class="uil uil-camera"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="md:flex">
                    <div class="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                        <h4 class="text-2xl font-medium"> {{ data && data.name ? data.name : '10765 Hillshire Ave, Baton Rouge, LA 70810, USA' }}</h4>

                        <ul class="py-6 flex items-center list-none">
                            <li class="flex items-center lg:me-6 me-4">
                                <i class="uil uil-compress-arrows lg:text-3xl text-2xl me-2 text-indigo-600"></i>
                                <span class="lg:text-xl">8000sqf</span>
                            </li>

                            <li class="flex items-center lg:me-6 me-4">
                                <i class="uil uil-bed-double lg:text-3xl text-2xl me-2 text-indigo-600"></i>
                                <span class="lg:text-xl">4 Beds</span>
                            </li>

                            <li class="flex items-center">
                                <i class="uil uil-bath lg:text-3xl text-2xl me-2 text-indigo-600"></i>
                                <span class="lg:text-xl">4 Baths</span>
                            </li>
                        </ul>

                        <p class="text-slate-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                            sequi nesciunt.</p>
                        <p class="text-slate-400 mt-4">But I must explain to you how all this mistaken idea of denouncing
                            pleasure and praising pain was born and I will give you a complete account of the system, and
                            expound the actual teachings of the great explorer of the truth, the master-builder of human
                            happiness.</p>
                        <p class="text-slate-400 mt-4">Nor again is there anyone who loves or pursues or desires to obtain
                            pain of itself, because it is pain, but because occasionally circumstances occur in which toil
                            and pain can procure him some great pleasure.</p>

                        <div class="w-full leading-[0] border-0 mt-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style="border:0" class="w-full h-[500px]" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                        <div class="sticky top-20">
                            <div class="rounded-md bg-slate-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800">
                                <div class="p-6">
                                    <h5 class="text-2xl font-medium">Price:</h5>

                                    <div class="flex justify-between items-center mt-4">
                                        <span class="text-xl font-medium">$ 45,231</span>

                                        <span
                                            class="bg-indigo-600/10 text-indigo-600 text-sm px-2.5 py-0.75 rounded h-6">For
                                            Sale</span>
                                    </div>

                                    <ul class="list-none mt-4">
                                        <li class="flex justify-between items-center">
                                            <span class="text-slate-400 text-sm">Days on Hously</span>
                                            <span class="font-medium text-sm">124 Days</span>
                                        </li>

                                        <li class="flex justify-between items-center mt-2">
                                            <span class="text-slate-400 text-sm">Price per sq ft</span>
                                            <span class="font-medium text-sm">$ 186</span>
                                        </li>

                                        <li class="flex justify-between items-center mt-2">
                                            <span class="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                                            <span class="font-medium text-sm">$ 1497/Monthly</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="flex">
                                    <div class="p-1 w-1/2">
                                        <router-link to="#" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Book Now</router-link>
                                    </div>
                                    <div class="p-1 w-1/2">
                                        <router-link to="#" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Offer Now</router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-12 text-center">
                                <h3 class="mb-6 text-xl leading-normal font-medium">Have Question ? Get in touch!</h3>

                                <div class="mt-6">
                                    <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border border-indigo-600 text-indigo-600 hover:text-white rounded-md"><i class="uil uil-phone align-middle"></i> Contact us</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        <Footers :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import VueEasyLightbox from 'vue-easy-lightbox';
import Navbar from '@/components/navbar/navbar.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import image from '@/assets/images/real/property/single/1.jpg';
import image2 from '@/assets/images/real/property/single/2.jpg';
import image3 from '@/assets/images/real/property/single/3.jpg';
import image4 from '@/assets/images/real/property/single/4.jpg';
import image5 from '@/assets/images/real/property/single/5.jpg';
import blogimage from '@/assets/images/real/property/single/1.jpg';

import property1 from '@/assets/images/real/property/1.jpg'
  import property2 from '@/assets/images/real/property/2.jpg'
  import property3 from '@/assets/images/real/property/3.jpg'
  import property4 from '@/assets/images/real/property/4.jpg'
  import property5 from '@/assets/images/real/property/5.jpg'
  import property6 from '@/assets/images/real/property/6.jpg'
  import property7 from '@/assets/images/real/property/7.jpg'
  import property8 from '@/assets/images/real/property/8.jpg'
  import property9 from '@/assets/images/real/property/9.jpg'
  import property10 from '@/assets/images/real/property/10.jpg'
  import property11 from '@/assets/images/real/property/11.jpg'
  import property12 from '@/assets/images/real/property/12.jpg'

const data = ref('');
const route = useRoute();
const images = [image, image2, image3, image4, image5];
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const datas = ref([
    {
      id: 1,
      image: property1,
      name: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 2,
      image: property2,
      name: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 3,
      image: property3,
      name: '3723 SANDBAR DR, Addis, LA 70710, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 4,
      image: property4,
      name: 'Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 5,
      image: property5,
      name: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 6,
      image: property6,
      name: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 7,
      image: property7,
      name: '2141 Fiero Street, Baton Rouge, LA 70808',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 8,
      image: property8,
      name: '9714 Inniswold Estates Ave, Baton Rouge, LA 70809',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 9,
      image: property9,
      name: '1433 Beckenham Dr, Baton Rouge, LA 70808, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 10,
      image: property10,
      name: '1574 Sharlo Ave, Baton Rouge, LA 70820, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 11,
      image:property11,
      name: '2528 BOCAGE LAKE DR, Baton Rouge, LA 70809, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    },
    {
      id: 12,
      image: property12,
      name: '1533 NICHOLSON DR, Baton Rouge, LA 70802, USA',
      sqf: '8000sqf',
      beds: '4 Beds',
      baths: '4 Baths',
      price: '$5000',
      rating: '5.0(30)'
    }
  ]);

onMounted(() => {
  const id = Number(route.params.id);
  data.value = datas.value.find((item) => item.id === id) || {};
});

function showLightbox(index) {
  imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
}

function onHide() {
  visibleRef.value = false;
}
</script>
