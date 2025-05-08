<template>
    <div :class="bgcolor">
        <div class="container relative ">
            <div class="grid grid-cols-1 pb-8 text-center" data-wow-delay=".1s" :class="wowAnimate">
                <h6 v-if="Testimonial" class="text-indigo-600 text-base mb-2">Testimonial</h6>
                <h4 v-if="Testimonial2" class="!font-alex text-3xl">Testimonial</h4>
                <h3 v-if="customer" class="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What our customer <br> say about us</h3>
                <h3 v-if="users" class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>
                <h3 v-if="happy" class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Happy  Client's</h3>
                <h3 v-if="gym" class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Trusted by <br> Our Customers</h3>
                <h3 v-if="hospital" class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Patients Says</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
            <div class="grid relative grid-cols-1 mt-8">
                <div class="tiny-three-item">
                    <div v-for="client in clients" :key="client" class="tiny-slide text-center" data-wow-delay=".3s" :class="wowAnimate">
                        <div class="cursor-e-resize">
                            <div class="content relative rounded shadow-sm dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                            <span class="absolute start-1/2 -bottom-[4px] box-border border-8 rotate-[45deg] border-t-transparent border-e-white dark:border-e-slate-900 border-b-white dark:border-b-slate-900 border-s-transparent shadow-testi dark:shadow-gray-700 origin-top-left"></span>
                                <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                                <p class="text-slate-400">{{ client.desc }}</p>
                                <ul class="list-none mb-0 text-amber-400 mt-3">
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                </ul>
                            </div>

                            <div class="text-center mt-5">
                                <img :src="client.image" class="size-14 rounded-full shadow-md mx-auto" alt="">
                                <h6 class="mt-2 font-semibold">{{ client.name }}</h6>
                                <span class="text-slate-400 text-sm">{{ client.position }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

defineProps({
  wowAnimate: {
    type: String,
    required: true
  },
  Testimonial: {
    type: Boolean,
    required: true
  },
  bgcolor: {
    type: String,
    required: true
  },
  customer: {
    type: Boolean,
    required: true
  },
  happy: {
    type: Boolean,
    required: true
  },
  users: {
    type: Boolean,
    required: true
  },
  trusted: {
    type: Boolean,
    required: true
  },
  gym: {
    type: Boolean,
    required: true
  },
  Testimonial2: {
    type: Boolean,
    required: true
  },
  hospital: {
    type: Boolean,
    required: true
  },
});

const clients = ref([
  {
    image: client1,
    desc: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
    name: 'Thomas Israel',
    position: 'Manager'
  },
  {
    image: client2,
    desc: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
    name: 'Carl Oliver',
    position: 'Manager'
  },
  {
    image: client3,
    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
    name: 'Barbara McIntosh',
    position: 'Manager'
  },
  {
    image: client4,
    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
    name: 'Jill Webb',
    position: 'Manager'
  },
  {
    image: client5,
    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
    name: 'Barbara McIntosh',
    position: 'Manager'
  },
  {
    image: client6,
    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
    name: 'Jill Webb',
    position: 'Manager'
  }
]);

// Initialize Tiny Slider
onMounted(() => {
  tns({
    container: '.tiny-three-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 3
      },
      767: {
        items: 2
      },
      320: {
        items: 1
      },
    },
  });
});
</script>
