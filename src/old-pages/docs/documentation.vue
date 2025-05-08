<template>
<div>
    <navbar :lightlogo=true :loginButton=true />
    <!-- Start Hero -->
    <section class="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid grid-cols-1 text-center mt-10">
                <h3 class="text-3xl leading-normal font-semibold">Documentation</h3>
            </div><!--end grid-->
        </div><!--end container-->
        
        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><router-link to="/">Techwind</router-link></li>
                <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Documentation</li>
            </ul>
        </div>
    </section><!--end section-->
    <div class="relative">
        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End Hero -->

    <!-- Start Section-->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1 items-center gap-[30px]">
                <div>
                    <h4 class="text-3xl font-semibold mb-4">Introduction</h4>
                    <p class="text-slate-400 text-base leading-8"><span class="font-bold">Techwind</span> is a fully responsive, clean and modern high-converting Vue Js landing page template. It is a beautifully handcrafted, pixel perfect Vue Js landing page template based on the <span class="font-bold">Vue.js and Tailwind CSS v4.x..</span> Techwind is a Powerful Multipurpose Landing Page Template. It is an excellent template for startup, cloud hosting, business, corporate, minimal portfolio single product (Smartwatch) , Saas, Social media marketing, Digital marketing/agency, Email Templates, Marketing, Agency, Careers and Jobs, Helpcenter, and much more. </p>
                    <p class="text3xl font-bold text-slate-400 mt-2">Dark & RTL version Available: We have added a RTL version in both Dark and Light versions.</p>
                </div>

                <div>
                    <h4 class="text-3xl font-semibold mb-4">Setup Vue.js</h4>
                    <h4 class="text-xl font-semibold mb-4">Introduction</h4>
                    <p class="text-slate-400 text-base leading-8">We are using <a href="https://vuejs.org/" class="text-indigo-600 font-semibold" target="_blank"> npm </a> which allows having complete automation for build flow. In case if you don't know Gulp then it's easy to use it. You can read it more about it <a href="https://vuejs.org/" class="text-indigo-600 font-semibold" target="_blank">here</a>. Please follow below steps to install and setup all prerequisites:</p>
                
                    <h5 class="text-xl font-semibold mb-4 mt-6">Prerequisites</h5>
                    <p class="text-slate-400 text-base leading-8">Please follow below steps to install and setup all prerequisites:</p>

                    <ul class="list-none mt-3">
                        <li class="flex mt-2">
                            <i class="mdi mdi-arrow-right"></i>
                            <div class="ms-2">
                                <h6 class="font-semibold">Nodejs</h6>
                                <p class="text-slate-400 text-base leading-8">Make sure to have the <a href="https://nodejs.org/en" class="text-indigo-600 font-semibold" target="_blank">Node.js</a> installed & running in your computer. If you already have installed Node on your computer, you can skip this step if your existing node version is greater than 18.</p>
                            </div>
                        </li>

                        <li class="flex mt-2">
                            <i class="mdi mdi-arrow-right"></i>
                            <div class="ms-2">
                                <h6 class="font-semibold">Git</h6>
                                <p class="text-slate-400 text-base leading-8">Make sure to have the <a href="https://git-scm.com/" class="text-indigo-600 font-semibold" target="_blank">Git</a> installed globally & running on your computer. If you already have installed git on your computer, you can skip this step.</p>
                            </div>
                        </li>
                    </ul>

                    <h5 class="text-xl font-semibold mb-4 mt-6">Installation</h5>
                    <p class="text-slate-400 text-base leading-8">To setup the admin theme, follow below-mentioned steps:</p>

                    <ul class="list-none mt-3">
                        <li class="flex">
                            <i class="mdi mdi-arrow-right"></i>
                            <div class="ms-2">
                                <h6 class="text-lg font-semibold mb-3">Install Prerequisites</h6>
                                <p class="text-slate-400 text-base leading-8">Make sure to have all above prerequisites installed & running on your computer</p>
                            </div>
                        </li>
                    </ul>

                    <p class="text-slate-400 text-base leading-8 mb-4 mt-6">After you finished with the above steps, you can run the following commands into the terminal / command prompt from the root directory of the project to run the project locally or build for production use:</p>

                    <div class="table-responsive bg-white dark:bg-slate-900 rounded">
                        <table class="w-full text-sm text-start">
                            <thead>
                                <tr>
                                    <th style="width: 20%;" class="border border-gray-100 dark:border-gray-700 p-4"><i class="ti-file"></i> Command</th>
                                    <th class="border border-gray-100 dark:border-gray-700 p-4">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-lg border border-gray-100 dark:border-gray-700 p-4">
                                        <code class="text-red-600">npm i</code>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                                        This would install all the required dependencies in the <code class="text-indigo-600 font-semibold">node_modules</code> folder.
                                    </td>
                                </tr>

                                <tr>
                                    <td class="text-lg border border-gray-100 dark:border-gray-700 p-4">
                                        <code class="text-red-600">npm run serve</code>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                                        Runs the project locally, starts the development server and watches for any changes in your code, including your HTML, javascript, sass, etc. The development server is accessible at  <a href="http://localhost:8080" class="text-indigo-600 font-semibold" target="_blank">http://localhost:8080</a>.
                                    </td>
                                </tr>

                                <tr>
                                    <td class="text-lg border border-gray-100 dark:border-gray-700 p-4">
                                        <code class="text-red-600">npm run build</code>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                                        Generates a <code class="text-indigo-600 font-semibold">/dist</code> directory with all the production files.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div><!--grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Section-->
    <footers :email=true />
    <switcher />
</div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            navbar,
            footers,
            switcher
        }
    }
</script>

<style lang="scss" scoped>

</style>