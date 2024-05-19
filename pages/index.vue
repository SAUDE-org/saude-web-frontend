<template>
    <div id="home" class="w-full h-full">
        <div id="header" class="w-full h-24">
            <div id="contato" class="w-full h-12 bg-teal-500 flex flex-row">
                <div class="">endereço</div>
                <div>telefone</div>
            </div>

            <div id="menus" class="w-full h-12 bg-blue-200 flex-items-center justify-btween ">
                Menus
            </div>
        </div>
        
        <div id="body" class="px-24 py-8">
            <h1>Home Page</h1>
            <p><NuxtLink to="/login" target="_blank">Login Page</NuxtLink></p>
        </div>

        <div id="footer" class="px-24  flex flex-row items-center justify-between">
            <div id="foo-contato flex flex-items-center">
                <p class="font-bold" >Contato</p><br>
                <p>Central da Saúde Ltda</p>
                <p>CNPJ nº 00.000.000/0001-00</p>
                <p>Resposnsável Técnico: Dr. Pires Silva</p>
                <p>CRM/RN nº 9999</p>                
            </div>

            <div id="foo-funcionamento">
                <p>Funcionamento</p>
            </div>

            <div id="foo-localizacao">
                <p>Localização</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
