<template>
<div>
    <navbar :navLight="'nav-light'" />
    <section class="relative lg:pb-24 pb-16">
        <div class="container-fluid relative">
            <div class="profile-banner relative text-transparent">
                <input id="pro-banner" name="profile-banner" type="file" class="hidden" />
                <div class="relative shrink-0">
                    <img :src="bg" class="h-80 w-full object-cover" id="profile-banner" alt="">
                    <div class="absolute inset-0 bg-slate-900/70"></div>
                    <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                </div>
            </div>
        </div>
        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex">
                <AccouTab />
                    <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                        <div class="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <h5 class="text-lg font-semibold mb-4">Personal Detail :</h5>
                            <form>
                                <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                    <div>
                                        <label class="form-label font-medium">First Name : <span class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                            <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required="">
                                        </div>
                                    </div>
                                    <div>
                                        <label class="form-label font-medium">Last Name : <span class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="user-check" class="size-4 absolute top-3 start-4"></i>
                                            <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Last Name:" id="lastname" name="name" required="">
                                        </div>
                                    </div>
                                    <div>
                                        <label class="form-label font-medium">Your Email : <span class="text-red-600">*</span></label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                            <input type="email" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="">
                                        </div>
                                    </div>
                                    <div>
                                        <label class="form-label font-medium">Occupation : </label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="bookmark" class="size-4 absolute top-3 start-4"></i>
                                            <input name="name" id="occupation" type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Occupation :">
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <div class="mt-5">
                                        <label class="form-label font-medium">Description : </label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="message-circle" class="size-4 absolute top-3 start-4"></i>
                                            <textarea name="comments" id="comments" class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <input type="submit" id="submit" name="send" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5" value="Save Changes">
                            </form>
                        </div>

                        <div class="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                <div>
                                    <h5 class="text-lg font-semibold mb-4">Contact Info :</h5>

                                    <form>
                                        <div class="grid grid-cols-1 gap-5">
                                            <div>
                                                <label class="form-label font-medium">Phone No. :</label>
                                                <div class="form-icon relative mt-2">
                                                    <i data-feather="phone" class="size-4 absolute top-3 start-4"></i>
                                                    <input name="number" id="number" type="number" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone :">
                                                </div>
                                            </div>

                                            <div>
                                                <label class="form-label font-medium">Website :</label>
                                                <div class="form-icon relative mt-2">
                                                    <i data-feather="globe" class="size-4 absolute top-3 start-4"></i>
                                                    <input name="url" id="url" type="url" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Url :">
                                                </div>
                                            </div>
                                        </div>

                                        <button class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Add</button>
                                    </form>
                                </div>
                                
                                <div> 
                                    <h5 class="text-lg font-semibold mb-4">Change password :</h5>
                                    <form>
                                        <div class="grid grid-cols-1 gap-5">
                                            <div>
                                                <label class="form-label font-medium">Old password :</label>
                                                <div class="form-icon relative mt-2">
                                                    <i data-feather="key" class="size-4 absolute top-3 start-4"></i>
                                                    <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Old password" required="">
                                                </div>
                                            </div>

                                            <div>
                                                <label class="form-label font-medium">New password :</label>
                                                <div class="form-icon relative mt-2">
                                                    <i data-feather="key" class="size-4 absolute top-3 start-4"></i>
                                                    <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="New password" required="">
                                                </div>
                                            </div>

                                            <div>
                                                <label class="form-label font-medium">Re-type New password :</label>
                                                <div class="form-icon relative mt-2">
                                                    <i data-feather="key" class="size-4 absolute top-3 start-4"></i>
                                                    <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Re-type New password" required="">
                                                </div>
                                            </div>
                                        </div>

                                        <button class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save password</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    <Footers :email=true />
    <Switcher />
</div>
</template>

<script setup>
import bg from '@/assets/images/blog/bg.jpg'
import Navbar from '@/components/navbar/navbar.vue';
import AccouTab from '@/components/users-tab.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'
</script>