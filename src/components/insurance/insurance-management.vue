<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div class="lg:col-span-4 md:col-span-5">
                <div class="sticky top-20">
                    <ul class="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md"
                        id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li v-for="item in datas" :key="item" role="presentation" class="mt-4 first:mt-0">
                            <button @click="handleclick(item.id)" :class="item.id === active ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-2 text-base font-semibold rounded-md w-full duration-500" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">{{item.name}}</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="lg:col-span-8 md:col-span-7">
                <div id="myTabContent" class="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                    <div :class="active === 1 ? '' : 'hidden'" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <img :src="cowork1" class="shadow-sm rounded-md" alt="">
                        <div class="mt-6">
                            <h5 class="text-lg font-semibold mb-4">Wealth Management</h5>
                            <p class="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                            <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                        </div>
                    </div>
                    <div :class="active === 2 ? '' : 'hidden'" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <img :src="cowork2" class="shadow-sm rounded-md" alt="">
                        <div class="mt-6">
                            <h5 class="text-lg font-semibold mb-4">Retirement Planning</h5>
                            <p class="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                            <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                        </div>
                    </div>
                    <div :class="active === 3 ? '' : 'hidden'" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        <img :src="cowork3" class="shadow-sm rounded-md" alt="">
                        <div class="mt-6">
                            <h5 class="text-lg font-semibold mb-4">Business Insurance</h5>
                            <p class="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                            <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                        </div>
                    </div>
                    <div :class="active === 4 ? '' : 'hidden'" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                        <img :src="cowork4" class="shadow-sm rounded-md" alt="">
                        <div class="mt-6">
                            <h5 class="text-lg font-semibold mb-4">Life Insurance</h5>
                            <p class="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                            <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import cowork1 from '@/assets/images/cowork/7.jpg'
import cowork2 from '@/assets/images/cowork/8.jpg'
import cowork3 from '@/assets/images/cowork/9.jpg'
import cowork4 from '@/assets/images/cowork/10.jpg'

const active = ref(1);
const datas = reactive([
  {
    id: 1,
    name: 'Wealth Management'
  },
  {
    id: 2,
    name: 'Retirement Planning'
  },
  {
    id: 3,
    name: 'Business Insurance'
  },
  {
    id: 4,
    name: 'Life Insurance'
  }
]);

const handleclick = (id) => {
  active.value = id;
};
</script>