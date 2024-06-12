<script setup lang="ts">
import BotaoSair from '~/components/BotaoSair.vue';
</script>

<template>
    <div class="w-full h-full">

        <header class="pt-8 flex justify-end">
            <BotaoSair />
        </header>

        <main class="mx-24 mt-4 flex flex-auto flex-col items-center">
            
            <!--box título-->
            <div class="flex flex-row items-center justify-center">
                <figure>
                    <img src="assets\icon\tetoscope.svg" alt="">
                </figure>
                <span class="text-gray-500 italic">
                    <h1>Qual o seu tipo de usuário?</h1>
                </span>
            </div>

            <!--tipos de usuário-->
            <div class="my-8 flex flex-row items-center justify-center">
                <nav class="mx-12 flex grow">
                    <a href="/sig/paciente">
                        <img src="assets\icon\paciente.svg" alt="">
                    </a>
                </nav>

                <nav class="mx-12 flex grow">
                    <a href="/sig/profissional">
                        <img src="assets\icon\profissional.svg" alt="">
                    </a>
                </nav>

                <nav class="mx-12 flex grow">
                    <a href="/sig/clinica">
                        <img src="assets\icon\clínica.svg" alt="">
                    </a>
                </nav>               
            </div>            




        </main>
    </div>
</template>