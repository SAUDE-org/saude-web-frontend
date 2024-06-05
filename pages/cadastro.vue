<template>
    <div class="w-full h-full">

        <header class="flex justify-end">
            <nav class="pr-32 pt-8">
                <a href="index.vue">
                    <img src="assets\icon\BotaoHome.svg" alt="">
                </a>
            </nav>
        </header>

        <main class="mx-24 mt-8 flex flex-col items-center">
            
            <!--box paciente-->
            <div id="titCadastro" class="flex flex-row items-center justify-center">
                <figure>
                    <img src="assets\icon\tetoscope.svg" alt="">
                </figure>
                <span class="text-gray-500 italic">
                    <h1>Cadastro de Usuário</h1>
                </span>
            </div>

            <!--botão voltar-->
            <nav class="mt-6 flex items-center justify-center">
                <a href="/login">
                    <button id="btnVoltar" type="button" class="w-60 btn btn-primary btn-lg"
                        style="background-color: #76BFAC; border: 4px solid #CFE3E1; border-radius: 14px;">
                        Voltar
                    </button>
                </a>
            </nav>
        </main>
</div>
</template>