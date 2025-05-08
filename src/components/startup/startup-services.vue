<template>
        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">We have various services for your travel, stay and engage</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group p-6 rounded-lg shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 duration-500">
                        <div class="size-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 duration-500">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{ item.title }}</router-link>
                            <p class="text-slate-400 mt-3">{{ item.desc }}</p>
                            <div class="mt-5">
                                <!-- <router-link to="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
  {
    icon: 'uil uil-presentation-line',
    title: 'AI Travel Agent',
    desc: 'All guides in AI. Support English and Bahasa Indonesia. In the future support multiple language'
  },
  {
    icon: 'uil uil-bill',
    title: 'B2B2C',
    desc: 'We are working with various partners and customers to enhanced our platform '
  },
  {
    icon: 'uil uil-money-withdrawal',
    title: 'Fiat and Crypto Payment',
    desc: 'Support cross border payment and easy settlement'
  },
  {
    icon: 'uil uil-presentation-line',
    title: 'NFT Marketplace',
    desc: 'Share your beautiful journey with the world'
  },
  {
    icon: 'uil uil-usd-circle',
    title: 'Events and Partner Collaborations',
    desc: 'We are welcome partner in Indonesia and worldwide to use our platform'
  },
  {
    icon: 'uil uil-invoice',
    title: 'Data Analytics',
    desc: 'Provide travel data analytics with embracing high privacy'
  }
]);
</script>