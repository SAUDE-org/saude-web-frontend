<script setup lang="ts">
import BotaoHome from '~/components/BotaoHome.vue';
</script>

<template>
    <div class="w-full h-full">

        <header class="flex justify-end">
            <BotaoHome />
        </header>

        <main class="mx-24 mt-8 flex flex-col items-center">
            
            <!--box título-->
            <div id="titLogin" class="mb-8 flex flex-row items-center justify-center">
                <figure>
                    <img src="assets\icon\tetoscope.svg" alt="">
                </figure>
                <span class="text-gray-500 italic">
                    <h1>Login do Sistema</h1>
                </span>
            </div>

            <!--box input texto usuário-->
            <div id="bxLoginUsuario" class="w-25 h-14 mb-4 flex flex-row items-center justify-items-stretch"
                style="background-color: #ecf3f1; border-radius: 14px;">
                <div class="p-2">
                    <img src="assets\icon\icon _mail_.svg" alt="">
                </div>
                <div class="grow">
                    <input class="form-control fw-lighter" id="usuario" type="text" placeholder="Digite seu usuário aqui"
                        style="background-color: #ecf3f1; border-color: #ecf3f1;">
                </div>
            </div>
                
            <!--box input texto senha-->
            <div id="bxSenhaUsuario" class="w-25 h-14 mb-4 flex flex-row items-center justify-items-stretch"
                style="background-color: #ecf3f1; border-radius: 14px;">
                <div class="p-2">
                    <img src="assets\icon\icon _lock_.svg" alt="">
                </div>
                <div class="grow">
                    <input class="form-control fw-lighter" id="senha" type="password" placeholder="Digite sua senha aqui"
                        style="background-color: #ecf3f1; border-color: #ecf3f1;">
                </div>
            </div>

            <!--box manter input conectado-->
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Mantenha-me conectado
                </label>
            </div>

            <!--botão entrar-->
            <nav class="mt-6 flex items-center justify-center">
                <a href="/tipo-usuario">
                    <button id="btn-entrar" onclick="" type="button" class="w-60 btn btn-primary btn-lg"
                        style="background-color: #76BFAC; border: 4px solid #CFE3E1; border-radius: 14px;">
                        Entrar
                    </button>
                </a>
            </nav>

            <nav class="w-60 px-2 flex flex-row items-center justify-between text-sm italic font-extralight text-blue-400">
                <span>                    
                    <a href="/esqueci-senha">Esqueci minha senha</a>
                </span>
                <span>                    
                    <a href="/cadastro/usuarios">Cadastre-se</a>
                </span>
            </nav>
        </main>
    </div>
</template>