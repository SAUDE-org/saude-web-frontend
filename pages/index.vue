<template>

    <head>
        <title>Central da Saúde</title>
    </head>

    <div class="w-full h-full">
        <header>
            <div id="contato" class="w-full h-12 px-24 flex flex-row items-center justify-between" style="background-color: #07B4BA;">
                <div id="endereco" class="flex flex-row">
                    <nav>
                        <a href="
                            https://www.google.com/maps/place/Praia+de+Ponta+Negra/@-5.8765216,-35.1769793,16.25z/data=!4m6!3m5!1s0x7b2ff2ae2c55695:0x3ba594c57ef58fc1!8m2!3d-5.8811012!4d-35.1629703!16zL20vMDlibXRf?entry=ttu
                        ">
                            <img src="assets\icon\vector.svg" alt="">                   
                        </a>
                    </nav>
                    
                    <span>Av. Praia, 40 - Ponta Negra - Natal/RN</span>
                </div>

                <div id="telefone" class="">
                    <nav class="flex flex-row items-center justify-between">
                        <span>
                            <a href="
                                https://www.youtube.com/@metropoledigital
                            ">
                                <img src="assets\icon\youtube.svg" alt="">
                            </a>
                        </span>
                        <span>
                            <a href="
                                https://www.facebook.com/MetropoleDigital/?locale=pt_BR
                            ">
                                <img src="assets\icon\facebook.svg" alt="">
                            </a>
                        </span>
                        <span>                            
                            <a href="
                                https://br.linkedin.com/school/metropoledigital/
                            ">
                                <img src="assets\icon\linkedIn.svg" alt="">
                            </a>
                        </span>
                        <span>                            
                            <a href="
                                https://www.instagram.com/metropoledigital/
                            ">
                                <img src="assets\icon\instagram.svg" alt="">
                            </a>
                        </span>
                        <span>                            
                            <a href="
                                https://web.whatsapp.com/
                            ">
                                <img src="assets\icon\whatsapp.svg" alt="">
                            </a>
                        </span>
                        <span>(84) 99999-9999</span>
                    </nav>
                </div>
            </div>

            <div id="logo" class="w-full h-12 px-24 flex flex-row items-center justify-start" style="background-color: #C5EBFE;">
                <span>
                    <img src="assets\icon\logo.svg" alt="Logo" width="50px" height="50px">
                </span>
                <span>
                    <img src="assets\icon\text-logo.svg" alt="TextLogo" width="200px" height="200px">
                </span>
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
