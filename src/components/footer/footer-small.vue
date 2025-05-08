<template>
    <footer class="relative bg-slate-900 dark:bg-slate-800 text-gray-200 dark:text-gray-200">
        <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
            <div class="container relative text-center">
                <div class="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                    <!-- <div class="lg:col-span-2 md:text-start text-center">
                        <router-link to="#" class="text-[22px] focus:outline-none">
                            <img :src="logo" class="mx-auto md:me-auto md:ms-0" alt=""/>
                        </router-link>
                    </div> -->

                    <div class="lg:col-span-6 text-center mt-6 md:mt-0">
                        <p class="mb-0">© {{ date }} Kirana Candra Technology with heart</p>
                    </div>

                    <ul class="lg:col-span-4 list-none space-x-1 md:text-end text-center mt-6 md:mt-0">
                        <li v-for="socail in socials" :key="socail" class="inline mx-0.5"><a :href="socail.link" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 text-gray-400 hover:text-white rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i :class="socail.icon" title="Buy Now"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';



const date = ref(new Date().getFullYear());

const socials = [
  {
    link: 'http://linkedin.com/company/kirana-candra-teknologi',
    icon: 'uil uil-linkedin'
  },
  // {
  //   link: 'https://www.facebook.com/shreethemes',
  //   icon: 'uil uil-facebook-f align-middle'
  // },
  // {
  //   link: 'https://www.instagram.com/shreethemes/',
  //   icon: 'uil uil-instagram align-middle'
  // },
  // {
  //   link: 'https://twitter.com/shreethemes',
  //   icon: 'uil uil-twitter align-middle'
  // },
  {
    link: 'mailto:customer@kiranacandratech.com',
    icon: 'uil uil-envelope align-middle'
  },
  // {
  //   link: 'https://forms.gle/QkTueCikDGqJnbky9',
  //   icon: 'uil uil-file align-middle'
  // }
];
</script>