<template>
    <div class="w-full h-full">
        <main class="m-24">
            <div id="tit-login" class="flex flex-row items-center justify-center">
                <figure>
                    <img src="assets\icon\tetoscope.svg" alt="">
                </figure>
                <span>
                    <h1>Login do Sistema</h1>
                </span>
            </div>

            <div>
                <!--box texto usuário-->
                <input class="form-control" type="text" placeholder="Digite sua senha aqui" aria-label="default input example">

            </div>

            <div>
                <!--box input texto senha-->
            </div>

            <div>
                <!--box manter input conectado-->
            </div>

            <!--botão entrar-->
            <nav class="m-6 flex items-center justify-center">
                <a href="/tipoUsuario">
                    <button type="button" class="btn btn-primary btn-lg"
                        style="background-color: #76BFAC; border: 4px solid #CFE3E1; border-radius: 14px;">
                        Entrar
                    </button>
                </a>
            </nav>

            <div>
                <div>
                    <!--box esqueci minha senha-->
                </div>

                <div>
                    <!--box cadastre-me-->
                </div>
            </div>
        </main>
    </div>
</template>