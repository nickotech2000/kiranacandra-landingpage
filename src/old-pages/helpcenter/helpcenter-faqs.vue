<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Frequently Asked Questions</h3>
            </div>
        </div>

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/">Techwind</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/helpcenter">Helpcenter</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
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

    <section class="relative md:pt-24 pt-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-4 md:col-span-5">
                    <div class="rounded-md shadow-sm dark:shadow-gray-800 p-6 sticky top-20">
                        <ul class="list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                            <li class="navbar-item p-0" :class="activeId === 'tech' ? 'active' : ''"><a href="#tech" class="text-base font-medium navbar-link">Buying Questions</a></li>
                            <li class="navbar-item mt-3 p-0" :class="activeId === 'general' ? 'active' : ''"><a href="#general" class="text-base font-medium navbar-link">General Questions</a></li>
                            <li class="navbar-item mt-3 p-0" :class="activeId === 'payment' ? 'active' : ''"><a href="#payment" class="text-base font-medium navbar-link">Payments Questions</a>
                            </li>
                            <li class="navbar-item mt-3 p-0" :class="activeId === 'support' ? 'active' : ''"><a href="#support" class="text-base font-medium navbar-link">Support Questions</a></li>
                        </ul>
                    </div>
                </div>
                <div class="lg:col-span-8 md:col-span-7 ">
                    <div class="scroll-div" id="tech">
                        <h5 class="text-2xl font-semibold">Buying Product</h5>
                        <div id="accordion-collapseone" data-accordion="collapse" class="mt-6">
                            <div v-for="item in datas" :key="item"
                                class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                    <button type="button " @click="handleClick(item.id)"
                                        :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''"
                                        class=" flex justify-between items-center p-5 w-full font-medium text-start">
                                        <span>{{ item.title }}</span>
                                        <svg data-accordion-icon class="size-4  shrink-0"
                                            :class="item.id === activeIndex ? 'rotate-180' : ''" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-1" class=""
                                    :class="item.id === activeIndex ? '' : 'hidden'">
                                    <div class="p-5">
                                        <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="general" class="mt-8 scroll-div">
                        <h5 class="text-2xl font-semibold">General Questions</h5>

                        <div id="accordion-collapsetwo" data-accordion="collapse" class="mt-6">
                            <div v-for="item in datas2" :key="item"
                                class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-5">
                                    <button type="button" @click="handleClick2(item.id)"
                                        :class="item.id === activeIndex2 ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''"
                                        class="flex justify-between items-center p-5 w-full font-medium text-start">
                                        <span>{{ item.title }}</span>
                                        <svg data-accordion-icon class="size-4  shrink-0"
                                            :class="item.id === activeIndex2 ? 'rotate-180' : ''" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-5" class=""
                                    :class="item.id === activeIndex2 ? '' : 'hidden'"
                                    aria-labelledby="accordion-collapse-heading-5">
                                    <div class="p-5">
                                        <p class="text-slate-400 dark:text-gray-400">
                                            {{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="payment" class="mt-8 scroll-div">
                        <h5 class="text-2xl font-semibold">Payments Questions</h5>

                        <div id="accordion-collapsethree" data-accordion="collapse" class="mt-6">
                            <div v-for="item in datas3" :key="item"
                                class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-9">
                                    <button type="button" @click="handleClick3(item.id)"
                                        :class="item.id === activeIndex3 ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''"
                                        class="flex justify-between items-center p-5 w-full font-medium text-start">
                                        <span>{{ item.title }}</span>
                                        <svg data-accordion-icon class="size-4 shrink-0"
                                            :class="item.id === activeIndex3 ? 'rotate-180' : ''" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-9" class=""
                                    :class="item.id === activeIndex3 ? '' : 'hidden'">
                                    <div class="p-5">
                                        <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="support" class="mt-8 scroll-div">
                        <h5 class="text-2xl font-semibold">Support Questions</h5>

                        <div id="accordion-collapsefour" data-accordion="collapse" class="mt-6">
                            <div v-for="item in datas4" :key="item"
                                class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-13">
                                    <button type="button" @click="handleClick4(item.id)"
                                        :class="item.id === activeIndex2 ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''"
                                        class="flex justify-between items-center p-5 w-full font-medium text-start">
                                        <span>{{ item.title }}</span>
                                        <svg data-accordion-icon class="size-4  shrink-0"
                                            :class="item.id === activeIndex4 ? 'rotate-180' : ''" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-13" class=""
                                    :class="item.id === activeIndex4 ? '' : 'hidden'">
                                    <div class="p-5">
                                        <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <GetInTouch />
    <Footer :email=true />
    <Switcher />
</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch-helpcenter.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

const activeIndex = ref(1);
const activeIndex2 = ref(1);
const activeIndex3 = ref(1);
const activeIndex4 = ref(1);
const activeId = ref('');

const generateData = () => [
  {
    id: 1,
    title: 'How does it work ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 2,
    title: 'Do I need a designer to use Techwind ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 3,
    title: 'What do I need to do to start selling ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 4,
    title: 'What happens when I receive an order ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
];

const datas = ref(generateData());
const datas2 = ref(generateData());
const datas3 = ref(generateData());
const datas4 = ref(generateData());

const checkVisibleDiv = () => {
  const windowHeight = window.innerHeight;
  const divElements = document.querySelectorAll('.scroll-div');
  divElements.forEach(div => {
    const rect = div.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= windowHeight;
    if (isVisible) {
      activeId.value = div.id;
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkVisibleDiv);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkVisibleDiv);
});

const handleClick = (id) => activeIndex.value = id;
const handleClick2 = (id) => activeIndex2.value = id;
const handleClick3 = (id) => activeIndex3.value = id;
const handleClick4 = (id) => activeIndex4.value = id;
</script>
