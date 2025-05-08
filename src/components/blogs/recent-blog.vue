<template>
   
   <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Recent Posts</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">                   
                    <div v-for="item in datas" :key="item"  class="flex items-center">
                        <img :src="item.image" class="lg:h-20 h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="">

                        <div class="ms-3">
                            <router-link :to="{name : 'blog-detail', params: {id : item.id}}" class="font-semibold hover:text-indigo-600">{{item.titile}}</router-link>
                            <p class="text-sm text-slate-400 mt-1">{{item.date}}</p>
                        </div>
                    </div>                 
                </div>
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {
                        id: 1,
                        image: require('../../assets/images/blog/01.jpg'),
                        titile: 'Consultant Business',
                        date: '1st May 2022'
                    },
                    {
                        id: 2,
                        image: require('../../assets/images/blog/02.jpg'),
                        titile: 'Grow Your Business',
                        date: '1st May 2022'
                    },
                    {
                        id: 3,
                        image: require('../../assets/images/blog/03.jpg'),
                        titile: 'Look On The Glorious Balance',
                        date: '1st May 2022'
                    },
                    {
                        id: 4,
                        image: require('../../assets/images/blog/04.jpg'),
                        titile: '5 incredible city to travel in Italy',
                        date: '1st May 2022'
                    },
                    {
                        id: 5,
                        image: require('../../assets/images/blog/05.jpg'),
                        titile: '25 essentials for your travel backpack',
                        date: '1st May 2022'
                    },
                    {
                        id: 9,
                        image: require('../../assets/images/blog/06.jpg'),
                        titile: 'Amazing destination in Portugal',
                        date: '1st May 2022'
                    },
                    {
                        id: 22,
                        image: require('../../assets/images/food/blog/1.jpg'),
                        titile: 'Free solo travel across North Europe',
                        date: '1st May 2022'
                    },
                    {
                        id: 25,
                        image: require('../../assets/images/food/blog/2.jpg'),
                        titile: 'Explorer completes historic lakes',
                        date: '1st May 2022'
                    },
                    {
                        id: 26,
                        image: require('../../assets/images/food/blog/3.jpg'),
                        titile: 'Dont miss these amazing side trips',
                        date: '1st May 2022'
                    },
                ]
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>