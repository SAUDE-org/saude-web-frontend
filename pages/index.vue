<template>

    <head>
        <title>Central da Saúde</title>
    </head>

    <div class="w-full h-full">
        <header>
            <div id="contato" class="w-full h-12 px-24 flex flex-row items-center justify-between" style="background-color: #07B4BA;">
                <div id="endereco" class="">
                    <div>endereço</div>
                </div>

                <div id="telefone" class="">
                    <div>telefone</div>
                </div>
            </div>
            
            <div id="logo" class="w-full h-12 px-24 flex flex-row items-center justify-between" style="background-color: #C5EBFE;">
                Logomarca
            </div>        
        </header>

        <article>
            <div class="px-24 py-8">
                <section class="d-flex flex-row align-items-start justify-content-around">
                    <div id="agendar" class="w-80 h-44 rounded-5 d-flex flex-column align-items-center justify-content-center" style="background-color: #C5EBFE;">
                        <p class="text-xl text-center">Faça o seu agendamento</p>                
                        <a href="/login" target="_blank">
                            <button type="button" class="btn btn-primary btn-lg" style="background-color: #76BFAC; border: 4px solid #CFE3E1; border-radius: 14px;">Agendar</button>
                        </a>
                    </div>
            
                    <div id="doctor">
                        <img src="assets\img\doctor.svg" alt="Doctor" width="500px" height="500px">
                    </div>
                </section>
            </div>
        </article>

        <footer>
            <div class="px-24  flex flex-row items-center justify-between" style="background-color: #C5EBFE;">                
                <div id="foo-contato flex flex-items-center">
                    <p class="font-bold">Contato</p><br>
                    <p>Central da Saúde Ltda</p>
                    <p>CNPJ nº 00.000.000/0001-00</p>
                    <p>Resposnsável Técnico: Dr. Pires Silva</p>
                    <p>CRM/RN nº 9999</p>                
                </div>

                <div id="foo-funcionamento">
                    <p class="font-bold">Funcionamento</p><br>
                    <p>Segunda a Sexta</p>
                    <p>07:00 h às 1900 h</p>
                </div>

                <div id="foo-localizacao">
                    <p class="font-bold">Localização</p><br>
                    <p>Av. Praia, 40 - Ponta Negra</p>
                    <p>Natal/RN</p>                
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
    
</script>
