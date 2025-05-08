<template>
   <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div  class="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="flex">
                        <i data-feather="help-circle" class="fea icon-ex-md text-indigo-600 me-3"></i>
                        <div class="flex-1">
                            <h5 class="mb-2 text-xl font-semibold">{{ item.name }} <span class="text-indigo-600">{{item.name2}}</span> {{ item.name3 }}</h5>
                            <p class="text-slate-400">{{ item.desc }}</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16 md:mb-12">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Have Question ? Get in touch!</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                
                    <div class="mt-6">
                        <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><i class="uil uil-phone"></i> Contact us</router-link>
                    </div>
                </div>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-slate-900 dark:text-slate-800">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
  {
    name: 'How our',
    name2: 'Techwind',
    name3: 'work ?',
    desc: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.'
  },
  {
    name: ' What is the main process open account ?',
    desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact."
  },
  {
    name: ' How to make unlimited data entry ?',
    desc: 'Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.'
  },
  {
    name: ' Is',
    name2: 'Techwind',
    name3: 'safer to use with my account ?',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin."
  }
]);
</script>