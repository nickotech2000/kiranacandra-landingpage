<template>
    <section class="relative md:mt-24 mt-16">
        <div class="container">
            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-3 md:col-span-5">
                    <div class="flex items-center">
                        <img :src="client" class="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt="">
                        <div class="ms-2">
                            <p class="font-semibold text-slate-400">Hello,</p>
                            <h5 class="text-lg font-semibold">Cally Joseph</h5>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-9 md:col-span-7">
                    <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="lg:col-span-3 md:col-span-5">
                    <div class="sticky top-20">
                        <ul class="flex-column p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li v-for="item in datas" :key="item" role="presentation" class="mt-2 first:mt-0">
                                <button @click="toggle(item.id)" :class="item.id === activeId ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-2 text-start text-base font-semibold rounded-md w-full  duration-500" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true"><i :class="item.icon"></i>{{ item.name }}</button>
                            </li>
                            <li role="presentation" class="mt-2 first:mt-0">
                                <router-link to="/auth-login" class="px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 duration-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-white" type="button"><i class="uil uil-sign-out-alt text-[20px] me-2 align-middle"></i> Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="lg:col-span-9 md:col-span-7">
                    <div id="myTabContent"
                        class="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                        <div :class="activeId === 1 ? '' : 'hidden'" id="dashboard" role="tabpanel" aria-labelledby="profile-tab">
                            <p class="text-slate-400 font-semibold">Hello <span class="text-slate-900 dark:text-white">cally_joseph</span> (not <span class="text-slate-900 dark:text-white">cally_joseph</span>? <router-link to="#" class="text-red-600">Log out</router-link>)</p>

                            <p class="text-slate-400 font-semibold mt-4">From your account dashboard you can view your
                                <router-link to="#" class="text-red-600">recent orders</router-link>, manage your <router-link to="#" class="text-red-600">shipping and billing addresses</router-link>, and <router-link to="#" class="text-red-600">edit your password and account details</router-link>.
                            </p>
                        </div>

                        <div :class="activeId === 2 ? '' : 'hidden'" id="order" role="tabpanel" aria-labelledby="order-tab">
                            <div class="relative overflow-x-auto shadow-sm dark:shadow-gray-800 rounded-md">
                                <table class="w-full text-start text-slate-500 dark:text-slate-400">
                                    <thead class="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                        <tr class="text-start">
                                            <th scope="col" class="px-2 py-3 text-start">Order no.</th>
                                            <th scope="col" class="px-2 py-3 text-start">Date</th>
                                            <th scope="col" class="px-2 py-3 text-start">Status</th>
                                            <th scope="col" class="px-2 py-3 text-start">Total</th>
                                            <th scope="col" class="px-2 py-3 text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white dark:bg-slate-900 text-start">
                                            <th class="px-2 py-3 text-start" scope="row">7107</th>
                                            <td class="px-2 py-3 text-start">1st November 2021</td>
                                            <td class="px-2 py-3 text-start text-green-600">Delivered</td>
                                            <td class="px-2 py-3 text-start">$ 320 <span class="text-slate-400">for 2items</span></td>
                                            <td class="px-2 py-3 text-start"><router-link to="#" class="text-indigo-600">View <i class="uil uil-arrow-right"></i></router-link></td>
                                        </tr>

                                        <tr class="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                            <th class="px-2 py-3 text-start" scope="row">8007</th>
                                            <td class="px-2 py-3 text-start">4th November 2021</td>
                                            <td class="px-2 py-3 text-start text-slate-400">Processing</td>
                                            <td class="px-2 py-3 text-start">$ 800 <span class="text-slate-400">for 1item</span></td>
                                            <td class="px-2 py-3 text-start"><router-link to="#" class="text-indigo-600">View <i class="uil uil-arrow-right"></i></router-link></td>
                                        </tr>

                                        <tr class="bg-white dark:bg-slate-900 text-start border-t border-gray-100 dark:border-gray-700">
                                            <th class="px-2 py-3 text-start" scope="row">8008</th>
                                            <td class="px-2 py-3 text-start">4th November 2021</td>
                                            <td class="px-2 py-3 text-start text-red-600">Canceled</td>
                                            <td class="px-2 py-3 text-start">$ 800 <span class="text-slate-400">for 1item</span></td>
                                            <td class="px-2 py-3 text-start"><router-link to="#" class="text-indigo-600">View <i class="uil uil-arrow-right"></i></router-link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div :class="activeId === 3 ? '' : 'hidden'" id="download" role="tabpanel" aria-labelledby="download-tab">
                            <div class="relative overflow-x-auto shadow-sm dark:shadow-gray-800 rounded-md">
                                <table class="w-full text-start text-slate-500 dark:text-slate-400">
                                    <thead class="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                        <tr class="text-start">
                                            <th scope="col" class="px-2 py-3 text-start min-w-[160px]">Product Name</th>
                                            <th scope="col" class="px-2 py-3 text-start min-w-[360px]">Description</th>
                                            <th scope="col" class="px-2 py-3 text-start min-w-[160px]">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white dark:bg-slate-900 text-start">
                                            <th class="px-2 py-3 text-start" scope="row">Quick heal</th>
                                            <td class="px-2 py-3 text-start">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</td>
                                            <td class="px-2 py-3 text-start text-green-600">Downloaded</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div :class="activeId === 4 ? '' : 'hidden'" id="address" role="tabpanel" aria-labelledby="address-tab">
                            <h6 class="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                            <div class="md:flex mt-6">
                                <div class="md:w-1/2 md:px-3">
                                    <div class="flex items-center mb-4 justify-between">
                                        <h5 class="text-xl font-semibold">Billing Address:</h5>
                                        <a href="#" class="text-indigo-600 text-lg"><i class="uil uil-edit align-middle"></i></a>
                                    </div>
                                    <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p class="text-lg font-semibold mb-2">Cally Joseph</p>

                                        <ul class="list-none">
                                            <li class="flex">
                                                <i class="uil uil-map-marker text-lg me-2"></i>
                                                <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br> Houston, USA 485</p>
                                            </li>

                                            <li class="flex mt-1">
                                                <i class="uil uil-phone text-lg me-2"></i>
                                                <p class="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                                    <div class="flex items-center mb-4 justify-between">
                                        <h5 class="text-xl font-semibold">Shipping Address:</h5>
                                        <a href="#" class="text-indigo-600 text-lg"><i class="uil uil-edit align-middle"></i></a>
                                    </div>
                                    <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p class="text-lg font-semibold mb-2">Cally Joseph</p>

                                        <ul class="list-none">
                                            <li class="flex">
                                                <i class="uil uil-map-marker text-lg me-2"></i>
                                                <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br> Houston, USA 485</p>
                                            </li>

                                            <li class="flex mt-1">
                                                <i class="uil uil-phone text-lg me-2"></i>
                                                <p class="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div :class="activeId === 5 ? '' : 'hidden'" id="accountdetail" role="tabpanel" aria-labelledby="accountdetail-tab">
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
                                            <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"  placeholder="Last Name:" id="lastname" name="name" required="">
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

                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6">
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
                                                    <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"  placeholder="New password" required=""/>
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
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import client from '@/assets/images/client/05.jpg';

const activeId = ref(1);

const datas = [
  {
    id: 1,
    name: 'Dashboard',
    icon: 'uil uil-dashboard text-[20px] me-2 align-middle'
  },
  {
    id: 2,
    name: 'Orders',
    icon: 'uil uil-list-ul text-[20px] me-2 align-middle'
  },
  {
    id: 3,
    name: 'Downloads',
    icon: 'uil uil-arrow-circle-down text-[20px] me-2 align-middle'
  },
  {
    id: 4,
    name: 'Addresses',
    icon: 'uil uil-map-marker text-[20px] me-2 align-middle'
  },
  {
    id: 5,
    name: 'Account Details',
    icon: 'uil uil-user text-[20px] me-2 align-middle'
  },
];

const toggle = (id) => {
  activeId.value = id;
};
</script>
