<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />
    <section class="relative md:pb-24 md:pt-40 pb-16 pt-36">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-6">
                    <div class="p-6 rounded-md shadow-sm dark:shadow-gray-800">
                        <div class="relative">
                            <div class="tiny-single-item">
                                <div class="tiny-slide"><img :src="blog1" class="rounded-md"  alt=""></div>
                                <div class="tiny-slide"><img :src="blog2" class="rounded-md" alt=""></div>
                                <div class="tiny-slide"><img :src="blog3" class="rounded-md" alt=""></div>
                            </div>
                        </div>

                        <div class="text-center mt-12">
                            <span
                                class="bg-indigo-600 inline-block text-white text-xs font-semibold px-2.5 py-0.5 rounded-full h-5">Technology</span>
                            <h3 class="my-3 text-[26px] font-semibold">The Morning After: Uber sets its sights on
                                Postmates</h3>

                            <ul class="list-none mt-6">
                                <li class="inline-block font-semibold text-slate-400 mx-4"> <span
                                        class="text-slate-900 dark:text-white block">Client :</span> <span
                                        class="block">Calvin Carlo</span></li>
                                <li class="inline-block font-semibold text-slate-400 mx-4"> <span
                                        class="text-slate-900 dark:text-white block">Date :</span> <span
                                        class="block">23th May, 2022</span></li>
                                <li class="inline-block font-semibold text-slate-400 mx-4"> <span
                                        class="text-slate-900 dark:text-white block">Time :</span> <span class="block">8
                                        Min Read</span></li>
                            </ul>
                        </div>

                        <div class="mt-6">
                            <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said
                                to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin
                                language which more or less corresponds to 'proper' Latin. It contains a series of real
                                Latin words. This ancient dummy text is also incomprehensible, but it imitates the
                                rhythm of most European languages in Latin script.</p>
                            <p
                                class="text-slate-400 italic border-x-4 border-indigo-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                                " There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. "</p>
                            <p class="text-slate-400 mt-3">The advantage of its Latin origin and the relative
                                meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or
                                distract the viewer's attention from the layout.</p>
                        </div>
                    </div>
                    <Report />
                </div>
                <Sidebar />
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
            <Subscribe />
        </div>
    </section>
    <Footer :email=true />
    <Switcher />
</div>
</template>

<script setup>
import {onMounted} from 'vue'
import Navbar from '@/components/navbar/navbar.vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import Report from '@/components/report.vue';
import Subscribe from '@/components/subscribe.vue';
import Sidebar from '@/components/blogs/blog-sidebar.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'

onMounted(() => {
  tns({
    container: '.tiny-single-item',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    speed: 400,
    gutter: 16,
  });
});
</script>
