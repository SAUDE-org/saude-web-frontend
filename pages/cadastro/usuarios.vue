<script setup lang="ts">
import BotaoHome from '~/components/BotaoHome.vue';
import BotaoNav from '~/components/BotaoNav.vue';
</script>

<template>
    <div class="w-full h-full">

        <header class="flex justify-end">
            <BotaoHome />
        </header>

        <main class="mx-24 mt-4 flex flex-auto flex-col items-center">
            
            <!--box título-->
            <div id="tit-cadastro" class="flex flex-row items-center justify-center">
                <figure>
                    <img src="assets\icon\tetoscope.svg" alt="">
                </figure>
                <span class="text-gray-500 italic">
                    <h1>Cadastro de Usuário</h1>
                </span>
            </div>

            <!--tipos de usuário-->
            <div class="my-8 flex flex-row items-center justify-center">
                <nav class="mx-12 flex grow">
                    <a href="/cadastro/paciente">
                        <img src="assets\icon\paciente.svg" alt="">
                    </a>
                </nav>

                <nav class="mx-12 flex grow">
                    <a href="/cadastro/profissional">
                        <img src="assets\icon\profissional.svg" alt="">
                    </a>
                </nav>

                <nav class="mx-12 flex grow">
                    <a href="/cadastro/clinica">
                        <img src="assets\icon\clínica.svg" alt="">
                    </a>
                </nav>               
            </div>

            <!--botão voltar-->
            <a href="/login">
                <BotaoNav>Voltar</BotaoNav>
            </a>
        </main>
    </div>
</template>