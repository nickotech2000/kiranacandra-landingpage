<template>
    <div>
        <Navbar />
        <section
            class="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="text-3xl leading-normal font-medium">Create Your Item</h3>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                        <router-link to="/">Techwind</router-link>
                    </li>
                    <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                        <router-link to="/index-nft">NFT</router-link>
                    </li>
                    <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Create</li>
                </ul>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="md:flex p-6 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800">
                    <div class="lg:w-1/3 md:w-2/5">
                        <p class="font-semibold mb-6">Upload your ART here, Please click "Upload Image" Button.</p>
                        <div v-if="imageSrc === null ? 'hidden' : ''" class="preview-box flex justify-center rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                        <img v-else lt="" :src="imageSrc" class="preview-box top-40  flex justify-center rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">
                        <input type="file" id="input-file" name="input-file" accept="image/*" hidden @change="loadFile" />
                        <label class="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full mt-6 cursor-pointer" for="input-file">Upload Image</label>
                    </div>

                    <div class="lg:w-2/3 md:w-3/5 mt-8 md:mt-0">
                        <div class="md:ms-6">
                            <form>
                                <div class="grid grid-cols-12 gap-6">
                                    <div class="col-span-12">
                                        <label class="font-semibold">Art Title <span class="text-red-600">*</span></label>
                                        <input name="name" id="name" type="text" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Title :">
                                    </div>

                                    <div class="col-span-12">
                                        <label class="font-semibold"> Description : </label>
                                        <textarea name="comments" id="comments" class="form-input mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Description :"></textarea>
                                    </div>

                                    <div class="md:col-span-6 col-span-12">
                                        <label for="NftItems" class="font-semibold">Type :</label>
                                        <select id="NftItems" class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option>GIFs</option>
                                            <option>Music</option>
                                            <option>Video</option>
                                            <option>Tech</option>
                                        </select>
                                    </div>

                                    <div class="md:col-span-6 col-span-12">
                                        <label class="font-semibold"> Rate : </label>
                                        <input name="time" type="text" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" id="time" value="0.004ETH">
                                    </div>

                                    <div class="col-span-12">
                                        <h6 class="font-semibold text-lg">Auction :</h6>
                                    </div>

                                    <div class="md:col-span-6 col-span-12">
                                        <label class="font-semibold"> Starting Date : </label>
                                        <input name="date" type="text" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 start" placeholder="Select date :">
                                    </div>

                                    <div class="md:col-span-6 col-span-12">
                                        <label class="font-semibold"> Expiration date : </label>
                                        <input name="date" type="text" class="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 end" placeholder="Select date :">
                                    </div>

                                    <div class="col-span-12">
                                        <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Create Item</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar-nft.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

const currentUrl = ref('');
const imageSrc = ref(null);
const image = ref('');

onMounted(() => {
  currentUrl.value = window.location.pathname;
});

const loadFile = (event) => {
  image.value = document.getElementById(event.target.name);
  imageSrc.value = URL.createObjectURL(event.target.files[0]);
};
</script>
