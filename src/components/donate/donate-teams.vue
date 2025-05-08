<template>
      <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 v-if="Instructor" class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Instructor</h3>
                    <h3 v-else class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Meet Our Volunteers</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="lg:col-span-3 md:col-span-6">
                        <div class="group text-center">
                            <div  class="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                <img :src="item.image" class="" alt="">
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                                <ul class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                                    <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" class="size-4"></i></router-link></li>
                                    <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" class="size-4"></i></router-link></li>
                                    <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" class="size-4"></i></router-link></li>
                                </ul>
                            </div>

                            <div class="content mt-3">
                                <router-link to="#" class="text-lg font-semibold hover:text-indigo-600 duration-500">{{ item.name }}</router-link>
                                <p class="text-slate-400">{{ item.position }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'
import client7 from '@/assets/images/client/07.jpg'

defineProps({
  Instructor: {
    type: Boolean,
    required: true
  }
});

const datas = ref([
  {
    image: client4,
    name: 'Jack John',
    position: 'Volunteer'
  },
  {
    image: client5,
    name: 'Krista John',
    position: 'Volunteer'
  },
  {
    image:client6,
    name: 'Roger Jackson',
    position: 'Volunteer'
  },
  {
    image: client7,
    name: 'Johnny English',
    position: 'Volunteer'
  },
]);
</script>