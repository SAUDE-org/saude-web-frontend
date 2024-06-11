<template>
    <div class="w-full h-full">

        <header class="flex justify-end">
            <nav class="mr-32 mt-8">
                <a href="http://localhost:3000/">
                    <img src="assets\icon\BotaoSair.svg" alt="Botão Sair">
                </a>
            </nav>
        </header>

        <main class="mx-24 mt-8 flex flex-col items-center">
            
            <!--box título-->
            <div id="titCadPaciente" class="mb-8 flex flex-row items-center justify-center">                
                <span class="text-gray-500 italic">
                    <h1>Cadastro de Paciente</h1>
                </span>
            </div>

                <!--box input texto nome-->
                <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch"
                    style="background-color: #ecf3f1; border-radius: 14px;">
                    <div class="p-2 italic text-slate-600">
                        Nome
                    </div>
                    <div class="grow">
                        <input class="form-control fw-lighter" id="nome" type="text" placeholder="Digite seu nome aqui"
                            style="background-color: #ecf3f1; border-color: #ecf3f1;">
                    </div>
                </div>

                <!--box input texto cpf-->
                <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch"
                    style="background-color: #ecf3f1; border-radius: 14px;">
                    <div class="p-2 italic text-slate-600">
                        CPF
                    </div>
                    <div class="grow">
                        <input class="form-control fw-lighter" id="cpf" type="text" placeholder="Digite seu cpf aqui"
                            style="background-color: #ecf3f1; border-color: #ecf3f1;">
                    </div>
                </div>

                <!--box input texto email-->
                <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch"
                    style="background-color: #ecf3f1; border-radius: 14px;">
                    <div class="p-2 italic text-slate-600">
                        E-mail
                    </div>
                    <div class="grow">
                        <input class="form-control fw-lighter" id="email" type="text" placeholder="Digite seu email aqui"
                            style="background-color: #ecf3f1; border-color: #ecf3f1;">
                    </div>
                </div>

                <!--box input texto telefone-->
                <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch"
                    style="background-color: #ecf3f1; border-radius: 14px;">
                    <div class="p-2 italic text-slate-600">
                        Telefone
                    </div>
                    <div class="grow">
                        <input class="form-control fw-lighter" id="telefone" type="text" placeholder="Digite neste formato: (99) 99999-9999"
                            style="background-color: #ecf3f1; border-color: #ecf3f1;">
                    </div>
                </div>

                <!--box input texto endereço-->
                <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch"
                    style="background-color: #ecf3f1; border-radius: 14px;">
                    <div class="p-2 italic text-slate-600">
                        Endereço
                    </div>
                    <div class="grow">
                        <input class="form-control fw-lighter" id="endereco" type="text" placeholder="Digite seu endereço completo aqui"
                            style="background-color: #ecf3f1; border-color: #ecf3f1;">
                    </div>
                </div>

            <!--botão cadastrar
            <nav class="my-8 flex items-center justify-center">
                <a href="/login">
                    <button id="btn-voltar" type="button" class="w-60 btn btn-primary btn-lg"
                        style="background-color: #76BFAC; border: 4px solid #CFE3E1; border-radius: 14px;">
                        Cadastrar
                    </button>
                </a>
            </nav>
            -->

            <!--botão cadastrar
            <nav class="my-8 flex items-center justify-center">
                <button id="btn-cadastrar" class="btn">
                    Cadastrar
                </button>
            </nav>
            -->


            <!--botão cadastrar-->
            <nav class="my-8 flex items-center justify-center">
                <a href="/login">
                    <button id="btn-cadastrar" onclick="" type="button" class="btn">
                        Cadastrar
                    </button>
                </a>
            </nav>

            <!-- Caixa de alerta personalizada -->
            <div id="alertBox"></div>

        </main>
    </div>
</template>

<script setup>
    /**
    @import url("~/assets/js/btn.js");
     */
</script>

<style>
    @import url("~/assets/css/btn.css");
</style>