<template>
    <footer class="footer relative text-gray-400 dark:text-gray-400 bg-left-top bg-[url('../../assets/images/photography/footer.jpg')]">
        <div class="absolute inset-0 bg-gradient-to-r to-transparent via-white dark:via-slate-900 from-white dark:from-slate-900"></div>
        <div class="container relative">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="py-[60px] px-0">
                        <div class="grid grid-cols-1">
                            <div>
                                <a href="mailto:contact@example.com" class="relative inline-block font-semibold tracking-wide align-middle text-center border-none text-2xl text-slate-900 dark:text-white dark:hover:text-white hover:text-indigo-600 duration-500 ease-in-out">contact@example.com</a><span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600 dark:bg-white"></span>
                            </div>
                            <p class="mt-6 max-w-2xl">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                            <ul class="list-none mt-6 space-x-1">
                                <li v-for="social in socials" :key="social" class="inline"><a :href="social.link" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i :class="social.icon" title="Buy Now"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
            <div class="container relative text-center">
                <div class="grid md:grid-cols-2 items-center">
                    <div class="md:text-start text-center">
                        <p class="mb-0">©
                           {{ date }} Techwind. Design & Develop with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

// Reactive variables using ref
const date = ref(new Date().getFullYear());
const socials = ref([
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
]);
</script>