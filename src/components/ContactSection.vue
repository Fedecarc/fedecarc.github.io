<script setup>

</script>

<template>
    <section class="text-white mt-20" id="contact">
        <h2 class="texct-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Contattami</h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quos deleniti vero mollitia non. Odio ipsam saepe fuga reiciendis tenetur. Corrupti expedita dignissimos optio aliquid ratione quod suscipit, repudiandae quia animi?
                </p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                    <div class="flex mb-10 items-center">
                        <div class="p-2" style="background: #111a3e; width: 50px; height: 50px; display:flex; justify-content: center; border-radius:50%; overflow:hidden; border: 1px solid #111a3e;
                        backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Email</h4>
                            <p>federico.iannarlli91@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2" style="background: #111a3e; width: 50px; height: 50px; display:flex; justify-content: center; border-radius:50%; overflow:hidden; border: 1px solid #111a3e;
                        backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="telefono" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Telefono</h4>
                            <p>+41 76 570 99 23</p>
                        </div>
                    </div>
                    <div class="flex mb-10 items-center">
                        <div class="p-2" style="background: #111a3e; width: 50px; height: 50px; display:flex; justify-content: center; border-radius:50%; overflow:hidden; border: 1px solid #111a3e;
                        backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" class="w-6">
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Linkedin</h4>
                            <p>www.linkedin.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background: #111a3e; width: 100%; height: 100%; border-radius: 20px; overflow:hidden; border: 1px solid #111a3e;
                backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);" >
                <form class="flex flex-col p-2" data-aos="zoom-in-up">
                    <div class="mb-6">
                        <label for="email" class="text-white block mb-2 text-sm font-medium">E-mail</label>
                        <input type="email"  id="email" class="bg-#111827 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="email@gmail.com" name="email">
                    </div>
                    <div class="mb-6">
                        <label for="subject" class="text-white block mb-2 text-sm font-medium">Titolo</label>
                        <input type="subject"  id="subject" class="bg-#111827 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Titolo" name="subject">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="text-white block mb-2 text-sm font-medium">Messaggio</label>
                        <textarea  id="message" class="bg-#111827 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Inserisci il tuo messagio" name="message"> </textarea>
                    </div>
                    <button class="z-1 1-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent">
                        Invia messagio
                    </button>
                </form>
            </div>
        </div>
        <div class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primaery blur-2xl h-20 w-80 z-0 absolute -top-1/2 -leftl4 transform -translate-x-2/3 -translate-1/2"></div>
    </section>
</template>