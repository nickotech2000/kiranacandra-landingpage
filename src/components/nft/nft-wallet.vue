<template>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="wallet in wallets" :key="wallet" class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                        <div class="py-10 bg-gradient-to-r to-orange-600/70 from-indigo-600/70"></div>
                        <div class="p-6 pt-0 -mt-10 text-center">
                            <img :src="wallet.image" class="size-20 p-4 rounded-full bg-white dark:bg-slate-900 shadow-lg dark:shadow-gray-800 mx-auto" alt="">
                            <div class="mt-4">
                                <h5 class="text-xl font-semibold mb-3">{{wallet.name}}</h5>
                                <p class="text-slate-400">{{ wallet.desc }} <router-link to="#" class="text-indigo-600 font-semibold">here <i class="uil uil-arrow-right"></i></router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import wallet1 from '@/assets/images/nft/wallet/MetaMask_Fox.svg'
import wallet2 from '@/assets/images/nft/wallet/aave.svg'
import wallet3 from '@/assets/images/nft/wallet/Airswap.svg'
import wallet4 from '@/assets/images/nft/wallet/Compound.svg'
import wallet5 from '@/assets/images/nft/wallet/ddexsvg.svg'
import wallet6 from '@/assets/images/nft/wallet/defi-saver.svg'
import wallet7 from '@/assets/images/nft/wallet/dYdX.svg'
import wallet8 from '@/assets/images/nft/wallet/idex.svg'
import wallet9 from '@/assets/images/nft/wallet/kyber.svg'
import wallet10 from '@/assets/images/nft/wallet/maker.svg'
import wallet11 from '@/assets/images/nft/wallet/nuo.svg'
import wallet12 from '@/assets/images/nft/wallet/PoolTogether.svg'
import wallet13 from '@/assets/images/nft/wallet/sablier.svg'
import wallet14 from '@/assets/images/nft/wallet/set.svg'
import wallet15 from '@/assets/images/nft/wallet/uniswap.svg'
import wallet16 from '@/assets/images/nft/wallet/zerion.svg'

    const wallets = [
        {
            image: wallet1,
            name: 'MetaMask',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet2,
            name: 'Aave',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet3,
            name: 'Airswap',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet4,
            name: 'Compound',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet5,
            name: 'DDEX',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet6,
            name: 'Defi Saver',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet7,
            name: 'DYDX',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet8,
            name: 'IDEX',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet9,
            name: 'Kyber',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet10,
            name: 'Maker',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet11,
            name: 'NUO',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet12,
            name: 'PoolTogether',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet13,
            name: 'Sablier',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet14,
            name: 'Set',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet15,
            name: 'Uniswap',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
        {
            image: wallet16,
            name: 'Zerion',
            desc: 'Learn about how to get the wallet and much more clicking'
        },
    ]
</script>