<template>
        <section class="relative md:py-24 py-16 md:pb-0 pb-0 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Doctors Time Table</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>
            </div>

            <div class="container-fluid relative">
                <div class="grid grid-cols-1 mt-8">
                    <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                        <table class="w-full text-sm text-start">
                            <thead class="text-lg">
                                <tr>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[120px]">Time Table</th>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Monday</th>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Tuesday</th>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Wednesday</th>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Thursday</th>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Friday</th>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Saturday</th>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-6 min-w-[200px]">Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-5">09:00AM</th>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client1" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Calvin Carlo</h6>
                                                <span class="text-slate-400">Eye Care</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 10:00AM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client3" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Alia Reddy</h6>
                                                <span class="text-slate-400">Psychotherapy</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 01:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                </tr>

                                <tr>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-5">11:00AM</th>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client2" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Cristino Murphy</h6>
                                                <span class="text-slate-400">Gynecology</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 04:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client4" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Jennifer Ballance</h6>
                                                <span class="text-slate-400">Cardiology</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 12:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client4" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Toni Kovar</h6>
                                                <span class="text-slate-400">Orthopedic</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00AM - 10:00AM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                </tr>
                                
                                <tr>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-5">02:00PM</th>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client6" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Tara Arrington</h6>
                                                <span class="text-slate-400">Neurology</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">02:00PM - 04:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client5" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Jennifer Ballance</h6>
                                                <span class="text-slate-400">Cardiology</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">11:00AM - 12:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                </tr>
                                
                                <tr>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-5">04:00PM</th>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client6" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Tara Arrington</h6>
                                                <span class="text-slate-400">Neurology</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">04:00PM - 05:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client6" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Tara Arrington</h6>
                                                <span class="text-slate-400">Neurology</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">04:30PM - 06:00PM</span>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-5">06:00PM</th>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client3" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Alia Reddy</h6>
                                                <span class="text-slate-400">Psychotherapy</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 09:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client4" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Toni Kovar</h6>
                                                <span class="text-slate-400">Orthopedic</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">07:00PM - 08:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client5" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Jennifer Ballance</h6>
                                                <span class="text-slate-400">Cardiology</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 07:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client3" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Alia Reddy</h6>
                                                <span class="text-slate-400">Psychotherapy</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">06:00PM - 07:00PM</span>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <th class="text-center border border-gray-100 dark:border-gray-700 py-5">09:00PM</th>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client4" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Toni Kovar</h6>
                                                <span class="text-slate-400">Orthopedic</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                    </td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client5" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Jennifer Ballance</h6>
                                                <span class="text-slate-400">Cardiology</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="p-3 border border-gray-100 dark:border-gray-700">
                                        <div class="flex items-center mb-3">
                                            <img :src="client4" class="size-12 rounded-full shadow" alt="">
                                            <div class="ms-3">
                                                <h6 class="block font-medium text-lg">Toni Kovar</h6>
                                                <span class="text-slate-400">Orthopedic</span>
                                            </div>
                                        </div>
                                        <span class="py-2 px-4 bg-indigo-600/5 text-indigo-600 rounded-md block text-center">09:00PM - 10:00PM</span>
                                    </td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                    <td class="border border-gray-100 dark:border-gray-700"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
   import client1 from '@/assets/images/client/01.jpg'
   import client2 from '@/assets/images/client/02.jpg'
   import client3 from '@/assets/images/client/03.jpg'
   import client4 from '@/assets/images/client/04.jpg'
   import client5 from '@/assets/images/client/05.jpg'
   import client6 from '@/assets/images/client/06.jpg'
</script>