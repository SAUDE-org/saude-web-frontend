<template>
    <div class="w-full h-full">

        <header class="flex justify-end">
            <nav class="mr-32 mt-8">
                <a href="http://localhost:3000/">
                    <img src="assets\icon\BotaoHome.svg" alt="">
                </a>
            </nav>
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
                    <a href="/cadastros/cadastroPaciente">
                        <img src="assets\icon\paciente.svg" alt="">
                    </a>
                </nav>

                <nav class="mx-12 flex grow">
                    <a href="/cadastros/cadastroProfissional">
                        <img src="assets\icon\profissional.svg" alt="">
                    </a>
                </nav>

                <nav class="mx-12 flex grow">
                    <a href="/cadastros/cadastroClinica">
                        <img src="assets\icon\clínica.svg" alt="">
                    </a>
                </nav>               
            </div>

            <!--botão voltar-->
            <nav class="my-8 flex items-center justify-center">
                <a href="/login">
                    <button id="btn-voltar" type="button" class="w-60 btn btn-primary btn-lg"
                        style="background-color: #76BFAC; border: 4px solid #CFE3E1; border-radius: 14px;">
                        Voltar
                    </button>
                </a>
            </nav>
        </main>
    </div>
</template>