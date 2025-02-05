<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <div class="absolute top-0 inset-x0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
        </div>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Ciao, io sono <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Federico Iannarelli</span>
                        </h1>
                    </div>
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias quod recusandae incidunt praesentium, quaerat porro autem ullam deserunt sunt error! Alias maiores eveniet ex dolor nostrum deserunt reprehenderit nobis.
                    </p>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <span class="absolute inset-0 rounded-3xl group-hover:sclae-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent">
                            </span>
                            <span class="relative flex items-center justify-center text-white">Contattami</span>
                        </button>
                        <button class="border border-primary px-6 md:px-7 py-3 rounded-full group w-full sm:w-max flex justify-center">
                            <div class="hover:sclae-105 transition-all  ease-in-out flex justify-center items-center relative">
                                <div class="svg-container">
                                    <svg class="calendar-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="https://w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" 
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" stroke="#f59e0b" stroke-width="2" />
                                    </svg>
                                    <div class="download-loader text-white hidden"></div>
                                </div>
                            </div>
                        </button>

                    </div>
                </div>
                <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative"> 
                        <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"></div>
                        <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary">
                            <img src="/img/Fotos-de-perfil-profesional.webp" alt="hero pic" width="500" height="auto" loading="lazy" class="w-full h-full rounded-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Aos from 'aos';
import 'aos/dist/aos.css'
Aos.init()
</script>