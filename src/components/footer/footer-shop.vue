<template>
    <footer class="relative bg-slate-900 dark:bg-slate-800 text-gray-200 dark:text-gray-200">
        <div class="container relative">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="py-[60px] px-0">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div class="lg:col-span-3 md:col-span-12">
                                <router-link to="#" class="text-[22px] focus:outline-none">
                                    <img :src="logoLight" alt=""/>
                                </router-link>
                                <p class="mt-6 text-gray-300">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <ul class="list-none mt-6 space-x-1">
                                    <li v-for="item in socials" :key="item" class="inline mx-0.5"><a :href="item.link" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-gray-700 text-gray-400 hover:text-white rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i :class="item.icon" title="Buy Now"></i></a></li>
                                </ul>
                            </div>

                            <div class="lg:col-span-6 md:col-span-12">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold">Shopping & Clothes</h5>
                                <div class="grid md:grid-cols-12 grid-cols-1">
                                    <div class="md:col-span-4">
                                        <ul class="list-none footer-list mt-6">
                                            <li v-for="item in datas" :key="item" class="mt-[10px]"><a href="" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b"></i> {{ item }}</a></li>
                                        </ul>
                                    </div>

                                    <div class="md:col-span-4">
                                        <ul class="list-none footer-list mt-6">
                                            <li v-for="item in datas2" :key="item" class="mt-[10px]"><a href="" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b"></i> {{ item }} </a></li>
                                        </ul>
                                    </div>

                                    <div class="md:col-span-4">
                                        <ul class="list-none footer-list mt-6">
                                            <li v-for="item in datas3" :key="item" class="mt-[10px]"><a href="" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i class="uil uil-angle-right-b"></i> {{ item }} </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-3 md:col-span-4">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                <p class="mt-6">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div class="grid grid-cols-1">
                                        <div class="my-3">
                                            <label class="form-label">Write your email <span class="text-red-600">*</span></label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                                <input type="email" class="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 dark:bg-gray-700 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200" placeholder="Email" name="email" required="">
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

            <div class="grid grid-cols-1">
                <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2">
                        <div v-for="item in datas4" :key="item" class="flex items-center lg:justify-center">
                            <i :class="item.icon"></i>
                            <h6 class="mb-0 font-medium">{{ item.name }}</h6>
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
                        <li v-for="image in images" :key="image" class="inline"><a href=""><img :src="image" class="max-h-6 inline" title="American Express" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import feather from 'feather-icons';
import image from '@/assets/images/payments/american-ex.png';
import image2 from '@/assets/images/payments/discover.png';
import image3 from '@/assets/images/payments/master-card.png';
import image4 from '@/assets/images/payments/paypal.png';
import image5 from '@/assets/images/payments/visa.png';
import logoLight from '@/assets/images/logo-light.png'

const date = ref(new Date().getFullYear());

const socials = ref([
  { link: 'https://1.envato.market/techwind-vue', icon: 'uil uil-shopping-cart align-middle' },
  { link: 'https://dribbble.com/shreethemes', icon: 'uil uil-dribbble align-middle' },
  { link: 'https://www.behance.net/shreethemes', icon: 'uil uil-behance' },
  { link: 'http://linkedin.com/company/shreethemes', icon: 'uil uil-linkedin' },
  { link: 'https://www.facebook.com/shreethemes', icon: 'uil uil-facebook-f align-middle' },
  { link: 'https://www.instagram.com/shreethemes/', icon: 'uil uil-instagram align-middle' },
  { link: 'https://twitter.com/shreethemes', icon: 'uil uil-twitter align-middle' },
]);

const datas = ref(['Men', 'Jackets & Coats', 'Jeans', 'Loungewear', 'Polo shirts', 'Shirts']);
const datas2 = ref(['Shorts', 'Suits Swimwear', 'T-shirts', 'Tracksuits', 'Trousers', 'Shirts']);
const datas3 = ref(['My account', 'Order History', 'Wish List', 'Newsletter', 'Affiliate', 'Returns']);
const datas4 = ref([
  { icon: 'uil uil-truck align-middle text-lg mb-0 me-2', name: 'Free delivery' },
  { icon: 'uil uil-archive align-middle text-lg mb-0 me-2', name: 'Non-contact shipping' },
  { icon: 'uil uil-transaction align-middle text-lg mb-0 me-2', name: 'Money-back guarantee' },
  { icon: 'uil uil-shield-check align-middle text-lg mb-0 me-2', name: 'Secure payments' },
]);

const images = ref([image, image2, image3, image4, image5]);

onMounted(() => {
  feather.replace();
});
</script>