<template>

<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative lg:py-44 py-36 bg-[url('../../assets/images/charity/bg.jpg')] bg-center bg-cover">
        <div class="absolute inset-0 bg-slate-900/50"></div>
        <div class="container relative z-1">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="lg:col-span-7 md:col-span-6">
                    <div class="md:me-6">
                        <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Your Donation Can <br> Change the World</h4>
                        <p class="text-white/75 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div class="mt-6">
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Donate Now</router-link>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 md:col-span-6">
                    <div class="p-6 rounded-lg border-t-8 border-indigo-600 bg-white dark:bg-slate-900 shadow-lg dark:shadow-gray-800">
                        <div class="mb-6 text-center">
                            <h4 class="font-bold lg:leading-normal leading-normal text-3xl mb-3">Make a Donation</h4>
                            <p class="text-slate-400">Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.</p>
                        </div>

                        <form>
                            <div class="grid grid-cols-1">
                                <div>
                                    <div class="grid md:grid-cols-2 gap-5">
                                        <div class="mb-5">
                                            <label class="form-label font-medium">Your Name : <span class="text-red-600">*</span></label>
                                            <input type="text" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name" name="name" required="">
                                        </div>

                                        <div class="mb-5">
                                            <label class="form-label font-medium">Your Email : <span class="text-red-600">*</span></label>
                                            <input type="email" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="">
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-5">
                                    <label class="form-label font-medium">I Want to Donate for</label>
                                    <select class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                        <option value="Donate For Food">Donate For Food</option>
                                        <option value="Food For Orphan">Food For Orphan</option>
                                        <option value="Home For Homeless">Home For Homeless</option>
                                        <option value="Holyday Gifts In Kind">Holyday Gifts In Kind</option>
                                        <option value="For clean Water in Africa">For clean Water in Africa</option>
                                        <option value="Health and Rights">Health and Rights</option>
                                    </select>
                                </div>

                                <div class="mb-5">
                                    <label class="form-label font-medium">How much do you want to donate ?</label>
                                    <div class="relative mt-2">
                                        <span class="absolute top-0.5 start-0.5 size-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><i class="uil uil-usd-circle"></i></span>
                                        <input type="number" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" min="1" max="1000" placeholder="Enter Amount" id="amount" aria-describedby="inputGroupPrepend" required>
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <div class="flex items-center w-full mb-0">
                                        <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C">
                                        <label class="form-check-label text-slate-400" for="AcceptT&C">I Accept <a href="" class="text-indigo-600">Terms And Condition</a></label>
                                    </div>
                                </div>

                                <div class="mb-5">
                                    <input type="submit" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Donate Now">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative bg-indigo-600 py-12">
        <div class="container relative">
            <div class="relative grid md:grid-cols-4 grid-cols-2 items-center gap-[30px]">
                <div class="counter-box text-center">
                    <h1 class="text-4xl font-bold mb-4 text-white flex justify-center">
                        <CountUp class="counter-value" :start-val="1" :end-val="100" data-target="100"></CountUp>M
                    </h1>
                    <h5 class="counter-head text-xs font-semibold text-white">PEOPLE FACING FOOD INSECURITY</h5>
                </div>

                <div class="counter-box text-center">
                    <h1 class="text-4xl font-bold mb-4 text-white flex justify-center">
                        <CountUp class="counter-value" :start-val="2" :end-val="152" data-target="152"></CountUp>M
                    </h1>
                    <h5 class="counter-head text-xs font-semibold text-white">PEOPLE WFP AIMS TO REACH IN 2022</h5>
                </div>

                <div class="counter-box text-center">
                    <h1 class="text-4xl font-bold mb-4 text-white flex justify-center">$<CountUp class="counter-value"
                            :start-val="0" :end-val="1500" data-target="1500"></CountUp>M</h1>
                    <h5 class="counter-head text-xs font-semibold text-white">WFP'S FUNDING NEEDS IN 2022</h5>
                </div>

                <div class="counter-box text-center">
                    <h1 class="text-4xl font-bold mb-4 text-white flex justify-center">
                        <CountUp class="counter-value" :start-val="0" :end-val="29" data-target="29"></CountUp>M
                    </h1>
                    <h5 class="counter-head text-xs font-semibold text-white">MEALS DISTRIBUTED WORLDWIDE</h5>
                </div>
            </div>
        </div>
    </section>
    <AboutUs />
    <Causes />
    <Team />
    <Blog :blog=true />
    <section class="md:mt-24 mt-26">
        <Footer :email=true />
    </section>
    <Switcher />
</div>
</template>

<script setup>
import CountUp from 'vue-countup-v3';
import Navbar from '@/components/navbar/navbar.vue';
import AboutUs from '@/components/aboutus/aboutus-donate.vue';
import Causes from '@/components/donate/donate-causes.vue';
import Team from '@/components/donate/donate-teams.vue';
import Blog from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
</script>