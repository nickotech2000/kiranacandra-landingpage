<template>
    
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Features</h6>
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What We Do ?</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything
                    you need to generate awareness, drive traffic, connect.</p>
            </div><!--end grid-->

            <div class="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                <div v-for="item in datas" :key="item"
                    class="group p-6 md:px-4 rounded-lg shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500">
                    <div
                        class="size-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                        <i :class="item.icon"></i>
                    </div>

                    <div class="content mt-7">
                        <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{ item.title }}</router-link>
                        <p class="text-slate-400 mt-3">{{item.desc}}</p>

                        <div class="mt-5">
                            <a href=""
                                class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read
                                More <i class="uil uil-arrow-right"></i></a>
                                
                        </div>
                    </div>
                </div>
                <!--end feature content-->
            </div>
        </div><!--end container-->
    
</template>

<script>
export default {
    data() {
        return {
            datas: [
                {
                    icon:'uil uil-presentation-line',
                    title: 'Design & Branding',
                    desc: 'The most well-known which is said to have originated'
                },
                {
                    icon:'uil uil-bill',
                    title: 'Fully Secured',
                    desc: 'The most well-known which is said to have originated'
                },
                {
                    icon:'uil uil-money-withdrawal',
                    title: 'High Performance',
                    desc: 'The most well-known which is said to have originated'
                },
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>