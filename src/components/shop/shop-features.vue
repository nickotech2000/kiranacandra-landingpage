<template>
    <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Features</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                    <!-- Content -->
                    <div v-for="item in datas" :key="item" class="group relative lg:px-6 mt-4 duration-500 rounded-xl overflow-hidden text-center">
                        <div class="relative overflow-hidden text-transparent -m-3">
                            <i data-feather="hexagon" class="size-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></i>
                            <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                                <i :class="item.icon"></i>
                            </div>
                        </div>

                        <div class="mt-6">
                            <a href="" class="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{{item.name}}</a>
                            <p class="text-slate-400 duration-500 mt-3">{{item.desc}}</p>
                        </div>
                    </div>
                    <!-- Content -->
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        icon: 'uil uil-rocket',
                        name: 'Free Shipping',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
                    },
                    {
                        icon: 'uil uil-user-arrows',
                        name: '24/7 Support',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
                    },
                    {
                        icon: 'uil uil-transaction',
                        name: 'Payment Process',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>