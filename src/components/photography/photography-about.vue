<template>
    <div>
        <section class="relative overflow-hidden md:py-56 py-44 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax" data-jarallax data-speed="0.5" id="aboutme">
            <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>
            <div class="absolute text-center p-6 bottom-0 start-0 end-0">
                <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Jack Jeffrey</h3>
            </div>
        </section>

        <div class="container relative">
            <div class="flex justify-center">
                <div class="lg:max-w-768 w-full text-center">
                    <p>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                    <p class="text-slate-400 mt-6">This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                    <p class="text-slate-400 mt-6">Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.</p>
                    <p class="text-slate-400 mt-6">If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                    <p class="text-slate-400 mt-6">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>
                    <div class="mt-6 text-center">
                        <router-link to="/photography-about" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600 dark:bg-white"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

