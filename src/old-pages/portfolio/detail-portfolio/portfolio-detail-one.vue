<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-32 lg:py-40 bg-[url('../../assets/images/portfolio/bg-inner.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 text-3xl leading-normal font-medium text-white">New Trends in SEO</h3>

                    <ul class="list-none">
                        <li class="inline font-semibold text-white/60 me-2"> <span class="text-white">Client :</span> Calvin Carlo</li>
                        <li class="inline font-semibold text-white/60"> <span class="text-white">Date :</span> 23th May, 2022</li>
                    </ul>
                </div>
            </div>
            
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                   <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/">Techwind</router-link></li>
                   <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                   <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="#">Portfolio</router-link></li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Detail</li>
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
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="grid grid-cols-1 gap-[30px]">
                            <img :src="image1" class="rounded-md" alt="">
                            <img :src="image2" class="rounded-md" alt="">
                            <img :src="image3" class="rounded-md" alt="">
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="sticky top-20">
                            <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div class="lg:col-span-12">
                                    <div class="work-details">
                                        <h4 class="text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">Project Name :</h4>
                                        <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                                        <p class="text-slate-400 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                                    </div>
                                </div>
                                
                                <div class="lg:col-span-7">
                                    <div class="bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 p-6 rounded-md">
                                        <h5 class="text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">Project Info :</h5>
                                        <dl class="grid grid-cols-12 mb-0">
                                            <dt class="md:col-span-4 col-span-5 mt-2">Client :</dt>
                                            <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">Calvin Carlo</dd>

                                            <dt class="md:col-span-4 col-span-5 mt-2">Category :</dt>
                                            <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">Web Design</dd>

                                            <dt class="md:col-span-4 col-span-5 mt-2">Date :</dt>
                                            <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">23rd Sep, 2021</dd>

                                            <dt class="md:col-span-4 col-span-5 mt-2">Website :</dt>
                                            <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">www.yourdomain.com</dd>

                                            <dt class="md:col-span-4 col-span-5 mt-2">Location :</dt>
                                            <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">3/2/64 Mongus Street, UK</dd>
                                        </dl>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <Contact />
        </section>
        <Footer :email=true />
        <Switcher />
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Contact from '@/components/portfolio-contact.vue';
import Navbar from '@/components/navbar/navbar.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import image1 from '@/assets/images/portfolio/1.jpg';
import image2 from '@/assets/images/portfolio/2.jpg';
import image3 from '@/assets/images/portfolio/3.jpg';
import image4 from '@/assets/images/portfolio/4.jpg';
import image5 from '@/assets/images/portfolio/5.jpg';
import image6 from '@/assets/images/portfolio/6.jpg';
import image7 from '@/assets/images/portfolio/7.jpg';
import image8 from '@/assets/images/portfolio/8.jpg';

const datas = ref([
  { id: 1, images: image1, name: 'Mockup Collection', title: 'Abstract' },
  { id: 2, images: image2, name: 'Mockup Collection', title: 'Abstract' },
  { id: 3, images: image3, name: 'Mockup Collection', title: 'Abstract' },
  { id: 4, images: image4, name: 'Mockup Collection', title: 'Abstract' },
  { id: 5, images: image5, name: 'Mockup Collection', title: 'Abstract' },
  { id: 6, images: image6, name: 'Mockup Collection', title: 'Abstract' },
  { id: 7, images: image7, name: 'Mockup Collection', title: 'Abstract' },
  { id: 8, images: image8, name: 'Mockup Collection', title: 'Abstract' },
]);

const data = ref(null);
const route = useRoute();

onMounted(() => {
  const id = parseInt(route.params.id);
  data.value = datas.value.find((item) => item.id === id);
});
</script>