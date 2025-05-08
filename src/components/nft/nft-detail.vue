<template>
    <div>
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-6 md:col-span-5">
                    <div class="sticky top-20">
                        <img :src="data && data.image ? data.image : blogimage" class="rounded-md shadow-md dark:shadow-gray-800" alt="">
                    </div>
                </div>

                <div class="lg:col-span-6 md:col-span-7">
                    <div class="">
                        <h5 class="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">Wolf with Skull <span class="bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Orange <br> Illustration</span> T-shirt Tattoo </h5>

                        <div class="grid md:grid-cols-2 grid-cols-1 mt-6">
                            <div>
                                <h6 class="text-lg font-semibold">Current Bid:</h6>
                                <h6 class="text-2xl font-semibold mt-2">4.85 ETH</h6>
                                <h6 class="text-slate-400 mt-2">$450.48USD</h6>
                            </div>

                            <div>
                                <h6 class="text-lg font-semibold">Auction Ending In:</h6>
                                <span id="auction-item-1" class="text-2xl font-semibold mt-2">{{days + " : " + hours + " : " + minutes + " : " + seconds }}</span>
                            </div>
                        </div>

                        <div class="mt-6">
                            <router-link to="#" @click="show = !show" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2"><i class="mdi mdi-gavel fs-5 me-2"></i> Place a Bid</router-link>
                            <router-link to="#" @click="show2 = !show2" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i class="mdi mdi-cart fs-5 me-2"></i> Buy Now</router-link>
                        </div>

                        <div class="grid grid-cols-1 mt-8">
                            <ul class="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md space-x-1" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                <li v-for="item in datas" :key="item" role="presentation" class="md:inline-block block md:w-fit w-full">
                                    <button @click="handleclick(item.id)" :class="item.id === activeIndex ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50 dark:hover:text-white'" class="px-6 py-2 font-semibold rounded-md w-full duration-500" id="tuesday-tab" data-tabs-target="#tuesday" type="button" role="tab" aria-controls="tuesday" aria-selected="true">{{item.name}}</button>
                                </li>
                            </ul>

                            <div id="StarterContent" class="mt-6">
                                <div :class="activeIndex === 1 ? '' : 'hidden'" class="" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                                    <div class="grid grid-cols-1">
                                        <p  class="text-slate-400 mb-4">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
                                        <p class="text-slate-400 mb-4">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
                                        <h6 class="text-xl font-semibold">Owner</h6>
        
                                        <div class="flex items-center mt-3">
                                            <img :src="client1" class="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="">
            
                                            <div class="ms-3">
                                                <h6 class="text-lg font-semibold"><a href="" class="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div :class="activeIndex === 2 ? '' : 'hidden'" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                                    <div class="grid grid-cols-1">
                                        <div class="flex items-center">
                                            <div class="relative">
                                                <img :src="client2" class="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                            </div>
            
                                            <div class="ms-3">
                                                <h6 class="text-lg font-semibold">2 WETH <span class="text-slate-400">by</span> <a href="" class="hover:text-indigo-600 duration-500 ease-in-out">0xe849fa28a...ea14</a></h6>
                                                <span class="text-slate-400">6 hours ago</span>
                                            </div>
                                        </div>
        
                                        <div class="flex items-center mt-4">
                                            <div class="relative">
                                                <img :src="client3" class="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                            </div>
            
                                            <div class="ms-3">
                                                <h6 class="text-lg font-semibold">0.001 WETH <span class="text-slate-400">by</span> <a href="" class="hover:text-indigo-600 duration-500 ease-in-out">VOTwear</a></h6>
                                                <span class="text-slate-400">6 hours ago</span>
                                            </div>
                                        </div>
        
                                        <div class="flex items-center mt-4">
                                            <div class="relative">
                                                <img :src="client4" class="size-16 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                            </div>
            
                                            <div class="ms-3">
                                                <h6 class="text-lg font-semibold">1.225 WETH <span class="text-slate-400">by</span> <a href="" class="hover:text-indigo-600 duration-500 ease-in-out">PandaOne</a></h6>
                                                <span class="text-slate-400">6 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div :class="activeIndex === 3 ? '' : 'hidden'" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                                    <div class="grid grid-cols-1">
                                        <div class="rounded-md shadow-sm dark:shadow-gray-800 p-6">
                                            <div class="flex items-center">
                                                <div class="relative">
                                                    <img :src="item1" class="size-20 rounded-md shadow-md dark:shadow-gray-800" alt="">
    
                                                    <div class="absolute top-0 start-0 translate-middle px-1 rounded-md shadow-md bg-white">
                                                        <i class="mdi mdi-account-check mdi-18px text-green-600"></i>
                                                    </div>
                                                </div>
                                                    
                                                <span class="content ms-3">
                                                    <router-link to="#" class="hover:text-indigo-600 text-lg block">Digital Art Collection</router-link>
                                                    <span class="text-slate-400 block mt-1">Started Following <a href="" class="link font-semibold">@Panda</a></span>
                                                    <span class="text-slate-400 block mt-1">1 hours ago</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="show" class="fixed inset-0 w-full h-screen bg-slate-900/75 flex items-center justify-center z-999">
            <div id="NftBid" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white inline-block">
                <div class="relative h-auto md:w-[480px] w-300px">
                    <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="font-bold text-lg">Place a Bid</h3>
                        <form>
                            <button @click="show = !show" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                        </form>
                    </div>
                    <div class="p-6">
                        <form class="text-start">
                            <div class="grid grid-cols-1">
                                <div class="mb-4">
                                    <label class="font-semibold" for="number">Your Bid Price:</label>
                                    <input name="etherium" id="number" type="number" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="00.00 ETH">
                                </div>
    
                                <div class="mb-4">
                                    <label class="font-semibold" for="number2">Enter Your QTY:</label>
                                    <input name="quantity" id="number2" type="number" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="0">
                                    <span class="text-slate-400 text-sm"><span class="text-slate-900 dark:text-white mt-1">Note:</span> Max. Qty 5</span>
                                </div>
                            </div>
                        </form>
    
                        <div class="pt-4 border-t dark:border-t-gray-800">
                            <div class="flex justify-between">
                                <p class="font-semibold text-sm"> You must bid at least:</p>
                                <p class="text-sm text-indigo-600 font-semibold"> 1.22 ETH </p>
                            </div>
                            <div class="flex justify-between mt-1">
                                <p class="font-semibold text-sm"> Service free:</p>
                                <p class="text-sm text-indigo-600 font-semibold"> 0.05 ETH </p>
                            </div>
                            <div class="flex justify-between mt-1">
                                <p class="font-semibold text-sm"> Total bid amount:</p>
                                <p class="text-sm text-indigo-600 font-semibold"> 1.27 ETH </p>
                            </div>
                        </div>
    
                        <div class="mt-4">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i class="mdi mdi-gavel"></i> Place a Bid</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="show2" class="fixed inset-0 w-full h-screen bg-slate-900/75 flex items-center justify-center z-999">
            <div id="NftBuynow" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white inline-block">
                <div class="relative h-auto md:w-[480px] w-300px">
                    <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="font-bold text-lg">Checkout</h3>
                        <form method="dialog">
                            <button @click="show2 = !show2" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                        </form>
                    </div>
                    <div class="p-6">
                        <form class="text-start">
                            <div class="grid grid-cols-1">
                                <div class="mb-4">
                                    <label class="font-semibold" for="number3">Your Price:</label>
                                    <input name="etherium" id="number3" type="number" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="00.00 ETH">
                                </div>
                            </div>
                        </form>
    
                        <div class="pt-4 border-t dark:border-t-gray-800">
                            <div class="flex justify-between">
                                <p class="font-semibold text-sm"> You must bid at least:</p>
                                <p class="text-sm text-indigo-600 font-semibold"> 1.22 ETH </p>
                            </div>
                            <div class="flex justify-between mt-1">
                                <p class="font-semibold text-sm"> Service free:</p>
                                <p class="text-sm text-indigo-600 font-semibold"> 0.05 ETH </p>
                            </div>
                            <div class="flex justify-between mt-1">
                                <p class="font-semibold text-sm"> Total bid amount:</p>
                                <p class="text-sm text-indigo-600 font-semibold"> 1.27 ETH </p>
                            </div>
                        </div>
    
                        <div class="flex items-center p-4 bg-red-600/10 text-red-600 mt-4 rounded-lg">
                            <i class="uil uil-exclamation-octagon text-3xl"></i>
    
                            <div class="ms-2">
                                <span class="block font-semibold">This creator is not verified</span>
                                <span class="block">Purchase this item at your own risk</span>
                            </div>
                        </div>
    
                        <div class="mt-4">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i class="mdi mdi-lightning-bolt"></i> Buy Now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import feather from 'feather-icons';
import blogimage from '@/assets/images/nft/items/item-detail-1.jpg';
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import item1 from '@/assets/images/nft/items/1.jpg'
import item2 from '@/assets/images/nft/items/2.jpg'
import item3 from '@/assets/images/nft/items/3.jpg'
import item4 from '@/assets/images/nft/items/4.jpg'
import item5 from '@/assets/images/nft/items/5.jpg'
import item6 from '@/assets/images/nft/items/6.jpg'
import item7 from '@/assets/images/nft/items/7.jpg'
import item8 from '@/assets/images/nft/items/8.jpg'
import item9 from '@/assets/images/nft/items/9.jpg'
import item10 from '@/assets/images/nft/items/10.jpg'
import item11 from '@/assets/images/nft/items/11.jpg'
import item12 from '@/assets/images/nft/items/12.jpg'

const route = useRoute();
const id = ref(null);
const data = ref(null);
const activeIndex = ref(1);

const show = ref(false)
const show2 = ref(false)

const products = [
    {
        id: 1,
        image: item1,
        name: 'Deep Sea Phantasy',
        eth: '20.5 ETH',
        like: '22',
        category: 'branding',
        date: 'January 29, 2026 6:0:0',
        showdate: true
    },
    {
        id: 2,
        image: item2,
        name: 'CyberPrimal 042 LAN',
        eth: '20.5 ETH',
        like: '22',
        category: 'designing',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 3,
        image: item3,
        name: 'Crypto Egg Stamp #5',
        eth: '20.5 ETH',
        like: '22',
        category: 'photography',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 4,
        image: item4,
        name: 'Color Abstract Painting',
        eth: '20.5 ETH',
        like: '22',
        category: 'development',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 5,
        image: item5,
        name: 'Liquid Forest Princess',
        eth: '20.5 ETH',
        like: '22',
        category: 'branding',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 6,
        image: item6,
        name: 'Spider Eyes Modern Art',
        eth: '20.5 ETH',
        like: '22',
        category: 'branding',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 7,
        image: item7,
        name: 'Synthwave Painting',
        eth: '20.5 ETH',
        like: '22',
        category: 'designing',
        date: 'January 29, 2026 6:0:0',
        showdate: true
    },
    {
        id: 8,
        image: item8,
        name: 'Contemporary Abstract',
        eth: '20.5 ETH',
        like: '22',
        category: 'development',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 9,
        image: item9,
        name: 'CyberPrimal 042 LAN',
        eth: '20.5 ETH',
        like: '22',
        category: 'designing',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 10,
        image: item10,
        name: 'Crypto Egg Stamp #5',
        eth: '20.5 ETH',
        like: '22',
        category: 'photography',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 11,
        image: item11,
        name: 'Color Abstract Painting',
        eth: '20.5 ETH',
        like: '22',
        category: 'development',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
    {
        id: 12,
        image: item12,
        name: 'Liquid Forest Princess',
        eth: '20.5 ETH',
        like: '22',
        category: 'branding',
        date: 'January 29, 2026 6:0:0',
        showdate: false
    },
]

const datas = [
  { id: 1, name: 'Details' },
  { id: 2, name: 'Bids' },
  { id: 3, name: 'Activity' },
];

const countDownToTime = new Date('Sep 26, 2026 00:00:00').getTime();
const now = ref('');
const difference = ref('');
const days = ref('');
const hours = ref('');
const minutes = ref('');
const seconds = ref('');
let intervalId;

// Countdown logic
const tickTock = () => {
  const date = new Date();
  now.value = date.getTime();
  difference.value = countDownToTime - now.value;
  days.value = Math.floor(difference.value / (1000 * 60 * 60 * 24));
  hours.value = 23 - date.getHours();
  minutes.value = 60 - date.getMinutes();
  seconds.value = 60 - date.getSeconds();
};

onMounted(() => {
  id.value = parseInt(route.params.id);
  data.value = products.find((item) => item.id === id.value);
  intervalId = setInterval(tickTock, 100);
  feather.replace();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const handleclick = (index) => {
  activeIndex.value = index;
};
</script>