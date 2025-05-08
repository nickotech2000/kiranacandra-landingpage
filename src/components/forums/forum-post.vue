<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
            <div class="lg:col-span-8">
                <div
                    class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 rounded-md border border-gray-100 dark:border-slate-800">
                    <table class="w-full text-start">
                        <thead class="text-lg border-b border-gray-100 dark:border-slate-800">
                            <tr>
                                <th class="py-6 px-4 font-semibold min-w-[300px] text-start">Forum</th>
                                <th class="text-center py-6 px-4 font-semibold min-w-[40px]">Topics</th>
                                <th class="text-center py-6 px-4 font-semibold min-w-[40px]">Comments</th>
                                <th class="py-6 px-4 font-semibold min-w-[220px] text-end">Posted</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in datas" :key="item"
                                class="border-b border-gray-100 dark:border-slate-800">
                                <th class="p-4">
                                    <div class="flex text-start">
                                        <i class="uil uil-comment text-indigo-600 text-2xl"></i>

                                        <div class="ms-2">
                                            <router-link to="/forums-topic"
                                                class="hover:text-indigo-600 text-lg">{{ item.title }}</router-link>
                                            <p class="text-slate-400 font-normal">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </th>
                                <td class="text-center p-4">5</td>
                                <td class="text-center p-4">10</td>
                                <td class="p-4">
                                    <div class="flex justify-end">
                                        <img :src="item.image" class="h-10 rounded-full shadow-sm dark:shadow-slate-800"
                                            alt="">

                                        <div class="ms-2">
                                            <a href="" class="hover:text-indigo-600 font-semibold">{{ item.name }}</a>
                                            <p class="text-slate-400 text-sm font-normal"><i class="uil uil-clock"></i>
                                                {{ item.date }}</p>
                                        </div>
                                    </div>
                                </td>
                            </tr><!--end topic content-->
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="lg:col-span-4 md:col-span-6">
                <div class="sticky top-20">
                    <h5
                        class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center">
                        Sign In</h5>
                    <form class="text-start mt-8">
                        <div class="grid grid-cols-1">
                            <div class="mb-4">
                                <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                <input id="LoginEmail" type="email"
                                    class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                    placeholder="name@example.com">
                            </div>

                            <div class="mb-4">
                                <label class="font-semibold" for="LoginPassword">Password:</label>
                                <input id="LoginPassword" type="password"
                                    class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                    placeholder="Password:">
                            </div>

                            <div class="flex justify-between mb-4">
                                <div class="flex items-center mb-0">
                                    <input
                                        class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                                        type="checkbox" value="" id="RememberMe">
                                    <label class="form-checkbox-label text-slate-400" for="RememberMe">Remember
                                        me</label>
                                </div>
                                <p class="text-slate-400 mb-0"><router-link to="/auth-re-password"
                                        class="text-slate-400">Forgot password ?</router-link></p>
                            </div>

                            <div class="mb-4">
                                <input type="submit"
                                    class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                                    value="Login / Sign in">
                            </div>

                            <div class="text-center">
                                <span class="text-slate-400 me-2">Don't have an account ?</span> <router-link
                                    to="/auth-signup"
                                    class="text-black dark:text-white font-bold inline-block">Sign Up</router-link>
                            </div>
                        </div>
                    </form>

                    <h5
                        class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                        Recent Reply</h5>
                    <div v-for="reply in replys" :key="reply" class="flex items-center mt-8">
                        <img :src="reply.image" class="h-16 rounded-md shadow-sm dark:shadow-gray-800"
                            alt="">

                        <div class="ms-3">
                            <a href="" class="font-semibold hover:text-indigo-600">{{reply.name}}</a>
                            <p class="text-sm text-slate-400">{{reply.time}}</p>
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
                        <li v-for="tag in tages" :key="tag" class="inline-block m-2"><a href=""
                                class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 duration-500">{{tag}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div><!--end container-->
</template>

<script>

export default {
    data() {
        return {
            datas: [
                {
                    title: 'Techwind Announcements',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/01.jpg'),
                    name: 'Calvin Carlo',
                    date: ' May 2022'
                },
                {
                    title: 'Web Designing and Developing',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/02.jpg'),
                    name: 'Alia Reddy',
                    date: ' May 2022'
                },
                {
                    title: 'Hosting and providers',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/03.jpg'),
                    name: 'Cristino Murphy',
                    date: ' May 2022'
                },
                {
                    title: 'SEO starter guide',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/04.jpg'),
                    name: 'Jennifer Ballance',
                    date: ' May 2022'
                },
                {
                    title: 'Troubleshooting and managing issues',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/05.jpg'),
                    name: 'Toni Kovar',
                    date: ' May 2022'
                },
                {
                    title: 'Backup and restore',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/06.jpg'),
                    name: 'Tara Arrington',
                    date: ' May 2022'
                },
                {
                    title: 'Errors and how to fix them',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/04.jpg'),
                    name: 'Jennifer Ballance',
                    date: ' May 2022'
                },
                {
                    title: 'Template features & Services',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/06.jpg'),
                    name: 'Tara Arrington',
                    date: ' May 2022'
                },
                {
                    title: 'Techwind includes the ability to create a better of sites by using the multisite feature.',
                    desc: 'This forum is for our announcements. Only our staff can create new topics.',
                    topic: '5',
                    comments: '10',
                    image: require('../../assets/images/client/06.jpg'),
                    name: 'Tara Arrington',
                    date: ' May 2022'
                },
            ],
            socials: ['facebook', 'instagram', 'twitter', 'linkedin', 'github', 'youtube', 'gitlab'],
            tages:['Business', 'Finance', 'Marketing', 'Fashion', 'Bride', 'Lifestyle', 'Travel', 'Beauty', 'Video', 'Audio'],
            replys:[
                {
                    image: require('../../assets/images/blog/06.jpg'),
                    name: 'Consultant Business',
                    time : '1st May 2022'
                },
                {
                    image: require('../../assets/images/blog/07.jpg'),
                    name: 'Grow Your Business',
                    time : '1st May 2022'
                },
                {
                    image: require('../../assets/images/blog/08.jpg'),
                    name: 'Look On The Glorious Balance',
                    time : '1st May 2022'
                },
            ]
        }
    },
    
}
</script>

<style lang="scss" scoped></style>