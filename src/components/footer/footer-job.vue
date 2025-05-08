<template>
        <footer class="relative bg-slate-900 dark:bg-slate-800 text-gray-200 dark:text-gray-200">
            <div class="container relative text-center">
                <div class="grid grid-cols-1">
                    <div class="py-[30px] px-0">
                        <div class="grid md:grid-cols-2 items-center">
                            <div class="md:text-start text-center">
                                <router-link href="#" class="text-[22px] focus:outline-none">
                                    <img :src="logo" class="mx-auto md:me-auto md:ms-0" alt=""/>
                                </router-link>
                            </div>
    
                            <ul class="list-none footer-list md:text-end text-center mt-6 md:mt-0">
                                <li class="inline"><i class="mdi mdi-circle-small align-middle"></i><router-link to="/page-job-grid" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Jobs</router-link></li>
                                <li class="inline mt-[10px]"><i class="mdi mdi-circle-small align-middle"></i><router-link to="/page-job-companies" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Companies</router-link></li>
                                <li class="inline mt-[10px]"><i class="mdi mdi-circle-small align-middle"></i><router-link to="/helpcenter-faqs" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">FAQs</router-link></li>
                                <li class="inline mt-[10px]"><i class="mdi mdi-circle-small align-middle"></i><router-link to="/contact-one" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Contact</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div class="container relative text-center">
                    <div class="grid grid-cols-1">
                        <div class="text-center">
                            <p class="mb-0"> &#169; {{date}} Techwind. Design & Develop with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script setup>
    import { ref } from 'vue';
    import logo from '@/assets/images/logo-light.png'

    const date = ref(new Date().getFullYear());
</script>