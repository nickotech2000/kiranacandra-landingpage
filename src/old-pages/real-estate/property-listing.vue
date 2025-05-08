<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/real/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Grid View Layout</h3>
                </div>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <div class="container relative -mt-16 z-1">
            <div class="grid grid-cols-1">
                <div class="p-6 bg-white dark:bg-slate-900 rounded-md shadow-md dark:shadow-gray-800">
                    <form action="#">
                        <div class="registration-form relative text-dark text-start">
                            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                                <div class="filter-search-form relative">
                                    <i class="uil uil-search absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                    <input name="name" type="text" id="job-keyword" class="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Search your keaywords">
                                </div>

                                <div class="filter-search-form relative bg-gray-50 dark:bg-slate-800">
                                    <i class="uil uil-estate absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                    <v-select :options="options" v-model="selected" class="ms-10"></v-select>
                                </div>

                                <div class="filter-search-form relative bg-gray-50 dark:bg-slate-800">
                                    <i class="uil uil-usd-circle absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                    <v-select :options="options2" v-model="selected2" class="ms-10"></v-select>
                                </div>

                                <div class="filter-search-form relative bg-gray-50 dark:bg-slate-800">
                                    <i class="uil uil-usd-circle absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"></i>
                                    <v-select :options="options3" v-model="selected3" class="ms-10"></v-select>
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
        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group rounded-md bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        <div class="relative">
                            <img :src="item.image" alt="">

                            <div class="absolute top-6 end-6">
                                <router-link to="" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-lg text-center bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600"><i class="mdi mdi-heart"></i></router-link>
                            </div>
                        </div>

                        <div class="p-6">
                            <div class="pb-6">
                                <router-link  :to="`/property-detail/${item.id}`" class="text-lg hover:text-indigo-600 font-medium ease-in-out duration-500">{{ item.name }}</router-link>
                            </div>

                            <ul class="py-6 border-y border-gray-100 dark:border-gray-800 flex items-center list-none">
                                <li class="flex items-center me-4">
                                    <i class="uil uil-compress-arrows text-2xl me-2 text-indigo-600"></i>
                                    <span>{{ item.sqf }}</span>
                                </li>

                                <li class="flex items-center me-4">
                                    <i class="uil uil-bed-double text-2xl me-2 text-indigo-600"></i>
                                    <span>{{ item.beds }}</span>
                                </li>

                                <li class="flex items-center">
                                    <i class="uil uil-bath text-2xl me-2 text-indigo-600"></i>
                                    <span>{{ item.baths }}</span>
                                </li>
                            </ul>

                            <ul class="pt-6 flex justify-between items-center list-none">
                                <li>
                                    <span class="text-slate-400">Price</span>
                                    <p class="text-lg font-medium">{{ item.price }}</p>
                                </li>

                                <li>
                                    <span class="text-slate-400">Rating</span>
                                    <ul class="text-lg font-medium text-amber-400 list-none">
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline text-black dark:text-white">{{ item.rating }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
        </section>
        <Switcher />
        <Footer :email=true />
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Navbar from '@/components/navbar/navbar.vue';
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';
  import Switcher from '@/components/switcher.vue';
  import Pagination from '@/components/shop/shop-pagination.vue';
  import Footer from '@/components/footer/footer.vue';

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

  // Select Options
  const options = ['Houses', 'Apartment', 'Offices', 'Townhome'];
  const selected = ref('Houses');
  
  const options2 = ['Min Price', '500', '1000', '2000', '3000', '4000', '5000', '6000'];
  const selected2 = ref('Max Price');
  
  const options3 = ['Min Price', '500', '1000', '2000', '3000', '4000', '5000', '6000'];
  const selected3 = ref('Max Price');
  
  // Property Data
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
  </script>
  