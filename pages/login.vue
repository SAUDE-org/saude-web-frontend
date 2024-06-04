<template>
    <div class="w-full h-full">
        <main class="m-24">
            <div id="titLogin" class="flex flex-row items-center justify-center">
                <figure>
                    <img src="assets\icon\tetoscope.svg" alt="">
                </figure>
                <span>
                    <h1>Login do Sistema</h1>
                </span>
            </div>

            <!--box texto usuário-->
            <div id="bxLoginUsuario" class="flex flex-row items-center justify-center">
                <figure>
                    <img src="assets\icon\🦆 icon _mail_.svg" alt="">
                </figure>
                <input class="form-control" id="formInputUsuario" type="text" placeholder="Digite seu usuário aqui">
            </div>
            
            <!--box input texto senha-->
            <div id="bxSenhaUsuario">
                <figure>
                    <img src="assets\icon\🦆 icon _lock_.svg" alt="">
                </figure>           
                <input class="form-control" id="formInputSenha" type="password" placeholder="Digite sua senha aqui">
            </div>

            <!--box manter input conectado-->
            <div>
                
            </div>

            <!--botão entrar-->
            <nav class="m-6 flex items-center justify-center">
                <a href="/tipoUsuario">
                    <button id="btnEntrar" type="button" class="btn btn-primary btn-lg"
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