<template>
    <div>

            <section class="relative md:mt-24 mt-16 overflow-hidden">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="md:col-span-5">
                        <div class="relative">
                            <img src="../../assets/images/smartwatch/1.jpg" class="rounded-md" alt="">

                            <div class="absolute bottom-16 end-0">
                                <img src="../../assets/images/smartwatch/2.jpg" class="rounded-md shadow-md size-48" alt="">
                                <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <a @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox cursor-pointer size-14 rounded-full shadow-lg inline-flex items-center justify-center bg-white text-indigo-600">
                                        <i class="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="md:col-span-7">
                        <div class="lg:ms-4">
                            <h5 class="font-medium text-lg text-indigo-600">Nice Top Series</h5>
                            <h4 class="mb-6 md:text-4xl text-3xl lg:leading-normal leading-normal font-medium">Black Great Addition</h4>
                            <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle ease-in-out text-base text-center border-none text-indigo-600 hover:text-indigo-600 duration-500 mt-4">
                                <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b"></i></router-link>
                            
                        </div>
                    </div><!--end col-->
                </div><!--grid-->
            </div><!--end container-->
            </section>
             <!-- iframe start  -->
            <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
                <div class="h-[100%] flex items-center justify-center">
                    <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500"
                        frameborder="0"></iframe>
                </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                        @click="toggle">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group relative lg:px-10 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                        <div class="relative overflow-hidden text-transparent -m-3">
                            <i :data-feather="item.icon2" class="size-32 fill-indigo-600/5 mx-auto"></i>
                            <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl duration-500 text-4xl flex align-middle justify-center items-center">
                                <i :data-feather="item.icon" class="size-8"></i>
                            </div>
                        </div>

                        <div class="mt-6">
                            <a href="" class="text-xl font-medium duration-500 hover:text-indigo-600">{{item.title}}</a>
                            <p class="text-slate-400 duration-500 mt-3">{{ item.desc }}</p>
                        </div>
                    </div><!--end feature-->
                </div><!--end grid-->
            </div><!--end container-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                datas:[
                    {
                        icon: 'droplet',
                        title: 'Waterproof',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                        icon2: 'hexagon'
                    },
                    {
                        icon: 'map-pin',
                        title: 'Built in GPS',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                        icon2: 'hexagon'
                    },
                    {
                        icon: 'activity',
                        title: 'Health Tracking',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                        icon2: 'hexagon'
                    },
                ]
            }
        },
        methods: {
            toggle() {
                if(!this.isActive) {
                    this.isActive = true;
            }else{
                this.isActive = false;
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>