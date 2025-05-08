<template>
        <footer class="relative bg-slate-900 dark:bg-slate-800 text-gray-200 dark:text-gray-200" :class="footerTransparent">    
            <div class="container relative">
                <div class="grid grid-cols-12">
                    <div class="col-span-12">
                        <div class="py-[60px] px-0">
                            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div class="lg:col-span-4 md:col-span-12">
                                    <router-link to="#" class="text-[22px] focus:outline-none">
                                        <img :src="logo" alt=""/>
                                    </router-link>
                                    <p class="mt-6 text-gray-300">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul class="list-none mt-6 space-x-1">
                                        <li v-for="social in socials" :key="social" class="inline"><a :href="social.link" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 text-gray-400 hover:text-white rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i :class="social.icon" title="Buy Now"></i></a></li>
                                    </ul>
                                </div>
                        
                                <div class="lg:col-span-2 md:col-span-4">
                                    <h5 class="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                    <ul class="list-none footer-list mt-6">
                                        <li v-for="company in companys" :key="company" class="mt-[10px]" ><router-link :to="company.link" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b"></i> {{ company.title }}</router-link></li>
                                    </ul>
                                </div>
                        
                                <div class="lg:col-span-3 md:col-span-4">
                                    <h5 class="tracking-[1px] text-gray-100 font-semibold">Usefull Links</h5>
                                    <ul class="list-none footer-list mt-6">
                                        <li v-for="usefull in usefulls" :key="usefull" class="mt-[10px]"><router-link :to="usefull.link" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b"></i> {{ usefull.title }}</router-link></li>
                                    </ul>
                                </div>
    
                                <div class="lg:col-span-3 md:col-span-4">
                                    <h5 class="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                    <p class="mt-6">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div class="grid grid-cols-1">
                                            <div class="my-3">
                                                <label class="form-label">Write your email <span class="text-red-600">*</span></label>
                                                <div v-if="email" class="form-icon relative mt-2">
                                                    <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                                    <input type="email" class="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 dark:bg-gray-700 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none" placeholder="Email" name="email" required="">
                                                </div>
                                                <div v-else class="form-icon relative mt-2">
                                                    <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                                    <input type="email" class="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 dark:bg-gray-700 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none" placeholder="Email" name="email" required="">
                                                </div>
                                            </div>
                                        
                                            <button type="submit" id="submitsubscribe" name="send" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div class="container relative text-center">
                    <div class="grid md:grid-cols-2 items-center">
                        <div class="md:text-start text-center">
                            <p class="mb-0">© {{ date }} Techwind. Design & Develop with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>

                        <ul class="list-none md:text-end text-center mt-6 md:mt-0 space-x-1">
                            <li v-for="image in cards" :key="image" class="inline"><a href=""><img :src="image" class="max-h-6 inline" title="American Express" alt=""></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import image from '@/assets/images/payments/american-ex.png';
import image2 from '@/assets/images/payments/discover.png';
import image3 from '@/assets/images/payments/master-card.png';
import image4 from '@/assets/images/payments/paypal.png';
import image5 from '@/assets/images/payments/visa.png';
import logo from '@/assets/images/logo-light.png'

defineProps({
  footerTransparent: {
    type: String,
    required: true
  },
  email: {
    type: Boolean,
    required: true
  }
});

const date = ref(new Date().getFullYear());

const socials = ref([
  { link: 'https://1.envato.market/techwind-vue', icon: 'uil uil-shopping-cart align-middle' },
  { link: 'https://dribbble.com/shreethemes', icon: 'uil uil-dribbble align-middle' },
  { link: 'https://www.behance.net/shreethemes', icon: 'uil uil-behance' },
  { link: 'http://linkedin.com/company/shreethemes', icon: 'uil uil-linkedin' },
  { link: 'https://www.facebook.com/shreethemes', icon: 'uil uil-facebook-f align-middle' },
  { link: 'https://www.instagram.com/shreethemes/', icon: 'uil uil-instagram align-middle' },
  { link: 'https://twitter.com/shreethemes', icon: 'uil uil-twitter align-middle' },
  { link: 'mailto:customer@candrakirana.com', icon: 'uil uil-envelope align-middle' },
  { link: 'https://forms.gle/QkTueCikDGqJnbky9', icon: 'uil uil-file align-middle' }
]);

const companys = ref([
  { title: 'About us', link: '/page-aboutus' },
  { title: 'Services', link: '/page-services' },
  { title: 'Team', link: '/page-team' },
  { title: 'Pricing', link: '/page-pricing' },
  { title: 'Project', link: '/portfolio-creative-four' },
  { title: 'Blog', link: '/blog' },
  { title: 'Login', link: '/auth-login' }
]);

const usefulls = ref([
  { title: 'Terms of Services', link: '/page-terms' },
  { title: 'Privacy Policy', link: '/page-privacy' },
  { title: 'Documentation', link: '/documentation' },
  { title: 'Changelog', link: '/changelog' },
  { title: 'Widget', link: '/widget' }
]);

const cards = ref([image, image2, image3, image4, image5]);
</script>


