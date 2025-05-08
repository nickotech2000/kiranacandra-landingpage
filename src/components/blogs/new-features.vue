<template>
    <div class="container relative mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
            <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Featured News
                    Post</h3>
                <p class="text-slate-400 max-w-xl">Search your future opportunity with our categories</p>
            </div>

            <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                <a href=""
                    class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>All
                    Categories <i class="uil uil-arrow-right align-middle"></i></a>
                    
            </div>
        </div><!--end grid-->

        <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div class="lg:col-span-8 md:col-span-6">
                <div class="grid grid-cols-1 gap-[30px]">
                    <div v-for="item in datas" :key="item.id" @click="viewBlogDetail(item.id)"
                        class="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                        <div class="lg:flex relative">
                            <div class="relative md:shrink-0">
                                <img class="h-full w-full object-cover lg:w-52 lg:h-56" :src="item.image" alt="">
                            </div>
                            <div class="p-6 flex flex-col lg:h-56 justify-center">
                                <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                    class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{ item.name }}</router-link>
                                <div class="my-auto">
                                    <p class="text-slate-400 mt-3">{{ item.desc }}</p>
                                </div>

                                <div class="mt-4">
                                    <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                        class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                                        
                                </div>
                            </div>
                        </div>
                    </div><!--end content-->
                </div>
            </div>

            <div class="lg:col-span-4 md:col-span-6">
                <div class="sticky top-20">
                    <h5
                        class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center">
                        Recent post</h5>
                    <div v-for="item in datas2" :key="item.id" @click="viewBlogDetail(item.id)" class="flex items-center mt-8">
                        <img :src="item.image" class="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="">

                        <div class="ms-3">
                            <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                class="font-semibold hover:text-indigo-600">{{ item.title }}</router-link>
                            <p class="text-sm text-slate-400">{{ item.date }}</p>
                        </div>
                    </div>
                    <h5
                        class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                        Social sites</h5>
                    <ul class="list-none text-center mt-8 space-x-1">
                        <li v-for="social in socials" :key="social" class="inline"><a href=""
                                class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i
                                    :data-feather="social" class="size-4"></i></a></li>
                    </ul><!--end icon-->

                    <h5
                        class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                        Tagscloud</h5>
                    <ul class="list-none text-center mt-8">
                        <li v-for="tag in tags" :key="tag" class="inline-block m-2"><a href=""
                                class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 duration-500">{{ tag }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            datas: [
                {
                    id: 2,
                    image: require('../../assets/images/blog/02.jpg'),
                    title: 'Take a break through the countryside',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 3,
                    image: require('../../assets/images/blog/03.jpg'),
                    title: 'These 10 sea destinations are surprises',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 4,
                    image: require('../../assets/images/blog/04.jpg'),
                    title: 'A photographer perfect day in Colorado',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 5,
                    image: require('../../assets/images/blog/05.jpg'),
                    title: 'This is the world most beautiful beach',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 9,
                    image: require('../../assets/images/blog/06.jpg'),
                    title: 'Travel will change you for the better',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 10,
                    image: require('../../assets/images/blog/07.jpg'),
                    title: 'Greek beyond Athene: Where to go next',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    id: 11,
                    image: require('../../assets/images/blog/08.jpg'),
                    title: 'This mountain will make you reborn',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ],
            datas2: [
                {
                    id: 9,
                    image: require('../../assets/images/blog/06.jpg'),
                    title: 'Consultant Business',
                    date: '1st May 2022'
                },
                {
                    id: 10,
                    image: require('../../assets/images/blog/07.jpg'),
                    title: 'Grow Your Business',
                    date: '1st May 2022'
                },
                {
                    id: 11,
                    image: require('../../assets/images/blog/08.jpg'),
                    title: 'Look On The Glorious Balance',
                    date: '1st May 2022'
                },
            ],
            socials: ['facebook', 'instagram', 'twitter', 'linkedin', 'github', 'youtube', 'gitlab'],
            tags: ['Business', 'Finance', 'Marketing', 'Fashion', 'Bride', 'Lifestyle', 'Travel', 'Beauty', 'Video', 'Audio']
        }
    },
    methods: {
        viewBlogDetail(id) {
            this.$router.push({ name: 'blog-detail', params: { id } });
        }
    }
}
</script>

<style lang="scss" scoped></style>