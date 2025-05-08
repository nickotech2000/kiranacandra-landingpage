<template>
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Browse Online  Cource Categories</h3>
                    <p class="text-slate-400 max-w-xl">Search your future opportunity with our categories</p>
                </div>

                <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                    <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>All Categories <i class="uil uil-arrow-right align-middle"></i></router-link>
                </div>
            </div>
        </div>

        <div class="container relative">
            <div class="grid grid-cols-1 relative">
                <div class="tiny-five-item">
                    <div v-for="item in datas" :key="item" class="tiny-slide">
                        <div class="px-3 py-10 rounded-md shadow-sm dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 duration-500 m-2">
                            <div class="size-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 duration-500 mx-auto">
                                <i :class="item.icon"></i>
                            </div>

                            <div class="content mt-6">
                                <router-link to="#" class="title h5 text-lg font-medium hover:text-indigo-600">{{ item.name }}</router-link>
                                <p class="text-slate-400 mt-3">{{item.lesson}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                <div class="md:col-span-12 text-center">
                    <router-link to="#" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out">All Categories <i class="uil uil-arrow-right align-middle"></i></router-link><span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';

const datas = ref([
  {
    icon: 'uil uil-gitlab',
    name: 'UI / UX Design',
    lesson: '35 Lesson',
  },
  {
    icon: 'uil uil-book-open',
    name: 'Web Development',
    lesson: '20 Lesson',
  },
  {
    icon: 'uil uil-chart-pie-alt',
    name: 'Graphic Design',
    lesson: '35 Lesson',
  },
  {
    icon: 'uil uil-feedback',
    name: 'PHP Development',
    lesson: '46 Lesson',
  },
  {
    icon: 'uil uil-presentation-line',
    name: 'Data Science',
    lesson: '60 Lesson',
  },
  {
    icon: 'uil uil-fire',
    name: 'Digital Marketing',
    lesson: '05 Lesson',
  },
]);

onMounted(() => {
  tns({
    container: '.tiny-five-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: {
        items: 5,
      },
      992: {
        items: 4,
      },
      767: {
        items: 3,
      },
      425: {
        items: 1,
      },
    },
  });
});
</script>