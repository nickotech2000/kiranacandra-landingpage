<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h6 class="mb-4 text-base font-medium text-indigo-600">We believe in building each other and hence</h6>
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Work with some amazing partners</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid relative grid-cols-1 mt-8">
            <div  class="tiny-two-item">
                <div v-for="client in clients" :key="client" class="tiny-slide">
                    <div class="lg:flex p-6 lg:p-0 relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden m-2">
                        <img class="size-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto" :src="client.image" alt="" width="384" height="512">
                        <div class="pt-6 lg:p-6 text-center lg:text-start space-y-4">
                            <p class="text-base text-slate-400"> {{ client.desc }} </p>
                            <div>
                                <span class="text-indigo-600 block mb-1">{{ client.name }}</span>
                                <span class="text-slate-400 text-sm dark:text-white/60 block">{{ client.position }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

const clients = ref([
  {
    image: client1,
    desc: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
    name: 'Thomas Israel',
    position: 'Staff Engineer, Algolia'
  },
  {
    image: client2,
    desc: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
    name: 'Carl Oliver',
    position: 'Staff Engineer, Algolia'
  },
  {
    image: client3,
    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
    name: 'Barbara McIntosh',
    position: 'Staff Engineer, Algolia'
  },
  {
    image: client4,
    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
    name: 'Jill Webb',
    position: 'Staff Engineer, Algolia'
  },
  {
    image: client5,
    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
    name: 'Barbara McIntosh',
    position: 'Staff Engineer, Algolia'
  },
  {
    image: client6,
    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
    name: 'Jill Webb',
    position: 'Staff Engineer, Algolia'
  }
]);

onMounted(() => {
  tns({
    container: '.tiny-two-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      768: {
        items: 2
      }
    }
  });
});
</script>