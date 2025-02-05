<script setup>  
    import { ref } from 'vue'

    const education = ref([
        {
            id: 1,
            school: 'SSIG',
            program: 'Informatica di Gestione',
            year: '2018'
        },
        {
            id: 2,
            school: 'CPC',
            program: 'Impiegato di commercio',
            year: '2015'
        }
    ])
</script>

<template>
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>

        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8">Su di me..</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id" class="flex items-center md:w-[80%] w-full rounded-xl bg-[#1f1641] shadow-lg border border-[#1f1641] ">
                        <div class="w-1/4 pl-2">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="graduation-cap-v1" >
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.school }}
                            </h3>
                            <p class="text-white"> {{ element.program }} </p>
                            <p class="text-white"> {{ element.year }} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">
                    Altro
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to to-secondary">Su</span>
                    Di me
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, hic voluptatum. 
                    Quidem quaerat exercitationem, fugit odit possimus assumenda sit voluptatibus enim, blanditiis quia accusantium qui labore autem obcaecati fugiat placeat.
                </p>
                <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-xl lg:text-3xl">+200</h3>
                        <p class="text-sm sm:text-base text-gray-300">Clienti contenti</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-xl lg:text-3xl">+300</h3>
                        <p class="text-sm sm:text-base text-gray-300">Progetti</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-xl lg:text-3xl">+7</h3>
                        <p class="text-sm sm:text-base text-gray-300">Anni di esperienza</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>