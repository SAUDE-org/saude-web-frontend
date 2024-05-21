<template>
    <div id="home" class="w-full h-full">
        <div id="header" class="w-full h-24">
            <div id="contato" class="w-full h-12 px-24" style="background-color: #07B4BA;">
                <div id="endereco" class="grid justify-items-start items-center">
                    <div>endereço</div>
                </div>

                <div id="telefone" class="grid justify-items-end">
                    <div>telefone</div>
                </div>
            </div>

            <div id="logo" class="w-full h-12 px-24" style="background-color: #C5EBFE;">
                Logomarca
            </div>
        </div>
        
        <div id="body" class="px-24 py-8">
            <div id="agendar" class="w-80 h-44 d-flex flex-column mb-3 align-items-center justify-content-center" style="background-color: #C5EBFE;">
                <p>Faça o seu agendamento</p>
                <p>Botão agendar</p>
            </div>

            <br>
            <p><NuxtLink to="/login" target="_blank">Login Page</NuxtLink></p>
        </div>

        <div id="footer" class="px-24  flex flex-row items-center justify-between" style="background-color: #C5EBFE;">                
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
    </div>
</template>

<script setup>
    
</script>
