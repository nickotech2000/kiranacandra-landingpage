<template>
    <!-- Start -->
    <!-- FEATURES START -->
    <div class="container relative">
        <div class="grid grid-cols-1 justify-center">
            <div class="relative z-2 duration-500 sm:-mt-[220px] -mt-[200px] m-0">
                <div class="filters-group-wrap">
                    <div class="filters-group">
                        <ul class="mb-0 list-none container-filter-white filter-options space-x-3 text-center">
                            <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-white/70 duration-500"
                                :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                            <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-white/70 duration-500"
                                :class="selectedCategory == 'business' ? 'active' : ''" @click="matchCategory('business')">Business</li>
                            <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-white/70 duration-500"
                                :class="selectedCategory == 'tech' ? 'active' : ''" @click="matchCategory('tech')">Technology</li>
                            <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-white/70 duration-500"
                                :class="selectedCategory == 'lifestyle' ? 'active' : ''" @click="matchCategory('lifestyle')">Lifestyle</li>
                            <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-white/70 duration-500"
                                :class="selectedCategory == 'food' ? 'active' : ''" @click="matchCategory('food')">Food</li>
                        </ul>
                    </div>
                </div>

                <div id="grid" class="lg:columns-3 md:columns-2 columns-1 gap-6 mx-3 mt-8">
                        <div v-for="item in filterData"  :key="item.id" @click="viewBlogDetail(item.id)" class="picture-item mb-8" data-groups='["business"]'>
                            <div class="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                                <img :src="item.image" alt="">

                                <div class="content p-6">
                                    <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                        class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{item.title}}</router-link>
                                    <p class="text-slate-400 mt-3">{{item.desc}}</p>

                                    <div class="mt-4">
                                        <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                            class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                                            
                                    </div>
                                </div>
                            </div>
                        </div><!--end content-->
                    
                </div>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: null,
            datas: [
                {
                    id: 1,
                    category: 'business',
                    image: require('../../assets/images/blog/01.jpg'),
                    title: 'Design your apps in your own way',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 18,
                    category: 'tech',
                    image: require('../../assets/images/blog/09.jpg'),
                    title: 'How apps is changing the IT world',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 19,
                    category: 'tech',
                    image: require('../../assets/images/blog/10.jpg'),
                    title: 'Smartest Applications for Business',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 20,
                    category: 'tech',
                    image: require('../../assets/images/blog/11.jpg'),
                    title: 'Stop Worrying About Deadlines! We Got You Covered',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 21,
                    category: 'lifestyle',
                    image: require('../../assets/images/blog/12.jpg'),
                    title: 'Change Your Strategy: Find a Business Consultant',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 22,
                    category: 'food',
                    image: require('../../assets/images/food/blog/1.jpg'),
                    title: 'Everything About Financial Modeling',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 23,
                    category: 'lifestyle',
                    image: require('../../assets/images/blog/13.jpg'),
                    title: 'On the other hand we provide denounce',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 24,
                    category: 'business',
                    image: require('../../assets/images/blog/14.jpg'),
                    title: 'Design your apps in your own way',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 25,
                    category: 'food',
                    image: require('../../assets/images/food/blog/2.jpg'),
                    title: 'How apps is changing the IT world',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ],
            filterData: this.datas
        }
    },
    created() {
        this.matchCategory(this.category)
    },
    methods: {
        matchCategory(category){
            this.selectedCategory = category
            this.filterData = this.selectedCategory ?  this.datas.filter((item) => item.category === this.selectedCategory) : this.datas
        },
        viewBlogDetail(id) {
            this.$router.push({ name: 'blog-detail', params: { id } });
        }
    },
}
</script>

<style lang="scss" scoped></style>