<template>
    <div class="container relative">
        <div v-if="blog" class="container relative ">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 v-if="name" class="text-indigo-600 text-base mb-2">Blog</h6>
                <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
        </div>

        <h3 v-else-if="name2" class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-center">Latest News & Blogs</h3>


        <div v-else class="grid md:grid-cols-12 grid-cols-1 items-center " :class="wowAnimate" data-wow-delay=".1s">
            <div class="md:col-span-6">
                <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Blogs</h6>
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Reads Our Latest <br> News & Blog</h3>
            </div>

            <div class="md:col-span-6">
                <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
            <div v-for="blog in blogs" :key="blog.id"  class="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden " :class="wowAnimate" data-wow-delay=".3s">
                <img :src="blog.image" alt="">
                <div class="content p-6">
                    <router-link :to="`/blog-detail/${blog.id}`" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{ blog.title }}</router-link>
                    <p class="text-slate-400 mt-3">{{ blog.desc }}</p>

                    <div class="mt-4">
                        <router-link :to="`/blog-detail/${blog.id}`" class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,defineProps} from 'vue';
import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
// Props
defineProps({
  wowAnimate: {
    type: String,
    required: true
  },
  blog: {
    type: Boolean,
    required: true
  },
  name: {
    type: Boolean,
    required: true
  },
  name2: {
    type: Boolean,
    required: true
  }
});

// Router

// Blog Data
const blogs = ref([
  {
    id: 1,
    image: blog1,
    title: 'Design your apps in your own way',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    id: 2,
    image: blog2,
    title: 'How apps are changing the IT world',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  },
  {
    id: 3,
    image: blog3,
    title: 'Smartest Applications for Business',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
  }
]);


</script>