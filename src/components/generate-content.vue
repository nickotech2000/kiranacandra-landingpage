<template>
    <!-- STart -->
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div
                class="grid md:grid-cols-3 grid-cols-1 shadow-sm shadow-gray-300 dark:shadow-gray-500 rounded-lg md:divide-x-[1px] md:divide-y-0 divide-y-[1px] divide-gray-200 dark:divide-gray-700">
                <div v-for="item in datas" :key="item" class="relative p-6 md:p-8">
                    <i :class="item.icon"></i>

                    <h5 class="text-xl font-semibold my-5">{{ item.title }}</h5>

                    <p class="text-slate-400">{{ item.desc }}</p>

                    <i :class="item.icon2"></i>

                    <span
                        class="uil uil-angle-right-bsize-8 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1"></span>
                </div><!--end content-->
            </div><!--end grid-->
        </div><!--end container-->
    </section>
</template>
<script>
export default {
    name: 'generateContent',
    data() {
        return {
            datas: [
                {
                    icon: 'mdi mdi-account-search-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]',
                    title: 'Search & Write Content',
                    desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                    icon2: 'mdi mdi-account-search-outline absolute bottom-0 end-0 -z-1 opacity-5 text-9xl'
                },
                {
                    icon: 'mdi mdi-wallet-bifold-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]',
                    title: 'Discribe Content',
                    desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                    icon2: 'mdi mdi-wallet-bifold-outline absolute bottom-0 end-0 -z-1 opacity-5 text-9xl'

                },
                {
                    icon: 'mdi mdi-home-plus-outline bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]',
                    title: 'Generate Content',
                    desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                    icon2: 'mdi mdi-home-plus-outline absolute bottom-0 end-0 -z-1 opacity-5 text-9xl'
                },

            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>