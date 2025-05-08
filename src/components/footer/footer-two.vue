<template>
     <footer class="relative bg-slate-900 dark:bg-slate-800 text-gray-200 dark:text-gray-200">    
            <div class="container relative">
                <div class="grid grid-cols-12">
                    <div class="col-span-12">
                        <div class="py-[60px] px-0">                    
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <img :src="logo" class="block mx-auto" alt="">
                                    <p class="max-w-xl mx-auto mt-8">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                                </div>

                                <ul class="list-none text-center mt-8 space-x-1">
                                    <li v-for="socail in socials" :key="socail" class="inline mx-0.5"><a :href="socail.link" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 text-gray-400 hover:text-white rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i :class="socail.icon" title="Buy Now"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div class="container relative text-center">
                    <div class="grid md:grid-cols-1">
                        <p class="mb-0">© {{date}} Techwind. Design & develop with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                    </div>
                </div>
            </div>
        </footer>

</template>

<script setup>
import { ref } from 'vue';
import logo from '@/assets/images/logo-icon-80.png'

const date = ref(new Date().getFullYear());

const socials = [
  {
    link: 'https://1.envato.market/techwind-vue',
    icon: 'uil uil-shopping-cart align-middle'
  },
  {
    link: 'https://dribbble.com/shreethemes',
    icon: 'uil uil-dribbble align-middle'
  },
  {
    link: 'https://www.behance.net/shreethemes',
    icon: 'uil uil-behance'
  },
  {
    link: 'http://linkedin.com/company/shreethemes',
    icon: 'uil uil-linkedin'
  },
  {
    link: 'https://www.facebook.com/shreethemes',
    icon: 'uil uil-facebook-f align-middle'
  },
  {
    link: 'https://www.instagram.com/shreethemes/',
    icon: 'uil uil-instagram align-middle'
  },
  {
    link: 'https://twitter.com/shreethemes',
    icon: 'uil uil-twitter align-middle'
  },
  {
    link: 'mailto:support@shreethemes.in',
    icon: 'uil uil-envelope align-middle'
  },
  {
    link: 'https://forms.gle/QkTueCikDGqJnbky9',
    icon: 'uil uil-file align-middle'
  }
];
</script>