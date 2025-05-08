<template>
    <!-- Footer Start -->
    <footer class="footer bg-transparent relative text-slate-400">
        <div class="container relative">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="pb-[60px] px-0">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div class="lg:col-span-4 md:col-span-12">
                                <a href="#" class="text-[22px] focus:outline-none">
                                    <img src="../../assets/images/logo-dark.png" class="block dark:hidden" alt="">
                                    <img src="../../assets/images/logo-light.png" class="hidden dark:block" alt="">
                                </a>
                                <p class="mt-6">Start working with Tailwind CSS that can provide everything you need to
                                    generate awareness, drive traffic, connect.</p>
                                <ul class="list-none mt-6 space-x-1">
                                    <li v-for="social in socials" :key="social" class="inline"><a :href="social.link" target="_blank"
                                            class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i
                                                :class="social.icon" title="Buy Now"></i></a></li>
                                   
                                </ul><!--end icon-->
                            </div><!--end col-->

                            <div class="lg:col-span-2 md:col-span-4">
                                <h5 class="tracking-[1px] text-black dark:text-white font-semibold">Company</h5>
                                <ul class="list-none footer-list mt-6">
                                    <li v-for="company in companys" :key="company" class="mt-[10px]"><router-link :to="company.link"
                                            class="text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-400 duration-500 ease-in-out"><i
                                                class="uil uil-angle-right-b"></i> {{ company.title }}</router-link></li>
                                </ul>
                            </div><!--end col-->

                            <div class="lg:col-span-3 md:col-span-4">
                                <h5 class="tracking-[1px] text-black dark:text-white font-semibold">Usefull Links</h5>
                                <ul class="list-none footer-list mt-6">
                                    <li v-for="usefull in usefulls" :key="usefull" class="mt-[10px]"><router-link :to="usefull.link"
                                            class="text-slate-400 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-400 duration-500 ease-in-out"><i
                                                class="uil uil-angle-right-b"></i> {{ usefull.title }}</router-link></li>                           
                                </ul>
                            </div><!--end col-->

                            <div class="lg:col-span-3 md:col-span-4">
                                <h5 class="tracking-[1px] text-black dark:text-white font-semibold">Newsletter</h5>
                                <p class="mt-6">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div class="grid grid-cols-1">
                                        <div class="my-3">
                                            <label class="form-label">Write your email <span
                                                    class="text-red-600">*</span></label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                                <input type="email"
                                                    class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                                    placeholder="Email" name="email" required="">
                                            </div>
                                        </div>

                                        <button type="submit" id="submitsubscribe" name="send"
                                            class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Subscribe</button>
                                    </div>
                                </form>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end col-->
                </div>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="py-[30px] px-0 border-t border-gray-100 dark:border-slate-800">
            <div class="container relative text-center">
                <div class="grid md:grid-cols-2 items-center">
                    <div class="md:text-start text-center">
                        <p class="mb-0">© {{ date }} Techwind. Design & Develop with <i
                                class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/"
                                target="_blank" class="text-reset">Shreethemes</a>.</p>
                    </div>

                    <ul class="list-none md:text-end text-center mt-6 md:mt-0 space-x-1">
                        <li v-for="image in cards" :key="image" class="inline"><a href=""><img :src="image"
                                    class="max-h-6 inline" title="American Express" alt=""></a></li>
                    </ul>
                </div><!--end grid-->
            </div><!--end container-->
        </div>
    </footer><!--end footer-->
    <!-- Footer End -->
</template>

<script>
import image from '../../assets/images/payments/american-ex.png'
import image2 from '../../assets/images/payments/discover.png'
import image3 from '../../assets/images/payments/master-card.png'
import image4 from '../../assets/images/payments/paypal.png'
import image5 from '../../assets/images/payments/visa.png'

export default {
    data() {
        return {
            date: new Date().getFullYear(),
            socials: [
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
            ],
            companys:[
                {
                    title: 'About us',
                    link: '/page-aboutus'
                },
                {
                    title: 'Services',
                    link: '/page-services'
                },
                {
                    title: 'Team',
                    link: '/page-team'
                },
                {
                    title: 'Pricing',
                    link: '/page-pricing'
                },
                {
                    title: 'Project',
                    link: '/portfolio-creative-four'
                },
                {
                    title: 'Blog',
                    link: '/blog'
                },
                {
                    title: 'Login',
                    link: '/auth-login'
                }
            ],
            usefulls: [
                {
                    title: 'Terms of Services',
                    link: '/page-terms'
                },
                {
                    title: 'Privacy Policy',
                    link: '/page-privacy'
                },
                {
                    title: 'Documentation',
                    link: '/documentation'
                },
                {
                    title: 'Changelog',
                    link: '/changelog'
                },
                {
                    title: 'Widget',
                    link: '/widget'
                },
            ],
            cards: [
                image,
                image2,
                image3,
                image4,
                image5
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>