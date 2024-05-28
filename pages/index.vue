<template>

    <head>
        <title>Central da Saúde</title>
    </head>

    <div class="w-full h-full">
        <header>
            <div id="contato" class="w-full h-12 px-36 flex flex-row items-center justify-between" style="background-color: #07B4BA;">
                <div id="endereco" class="flex flex-row">
                    <nav>
                        <a href="
                            https://www.google.com/maps/place/Praia+de+Ponta+Negra/@-5.8765216,-35.1769793,16.25z/data=!4m6!3m5!1s0x7b2ff2ae2c55695:0x3ba594c57ef58fc1!8m2!3d-5.8811012!4d-35.1629703!16zL20vMDlibXRf?entry=ttu
                        " target="_blank">
                            <img src="assets\icon\vector.svg" alt="">                   
                        </a>
                    </nav>
                    
                    <span>Av. Praia, 40 - Ponta Negra - Natal/RN</span>
                </div>

                <div id="telefone">
                    <nav class="flex flex-row items-center justify-between">
                        <span>
                            <a href="
                                https://www.youtube.com/@metropoledigital
                            " target="_blank">
                                <img src="assets\icon\youtube.svg" alt="">
                            </a>
                        </span>
                        <span>
                            <a href="
                                https://www.facebook.com/MetropoleDigital/?locale=pt_BR
                            " target="_blank">
                                <img src="assets\icon\facebook.svg" alt="">
                            </a>
                        </span>
                        <span>                            
                            <a href="
                                https://br.linkedin.com/school/metropoledigital/
                            " target="_blank">
                                <img src="assets\icon\linkedIn.svg" alt="">
                            </a>
                        </span>
                        <span>                            
                            <a href="
                                https://www.instagram.com/metropoledigital/
                            " target="_blank">
                                <img src="assets\icon\instagram.svg" alt="">
                            </a>
                        </span>
                        <span>                            
                            <a href="
                                https://web.whatsapp.com/
                            " target="_blank">
                                <img src="assets\icon\whatsapp.svg" alt="">
                            </a>
                        </span>
                        <span>(84) 99999-9999</span>
                    </nav>
                </div>
            </div>

            <div id="logo" class="w-full h-12 px-36 flex flex-row items-center justify-start" style="background-color: #C5EBFE;">
                <span>
                    <img src="assets\icon\logo.svg" alt="Logo" width="50px" height="50px">
                </span>
                <span>
                    <img src="assets\icon\text-logo.svg" alt="TextLogo" width="200px" height="200px">
                </span>
            </div>        
        </header>

        <article>
            <div class="mx-36 pt-8">
                <section class="d-flex flex-row space-x-4 align-items-start justify-content-around">
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

        <aside>

            <div class="mx-36 py-4 flex justify-center text-2xl font-semibold">Temos diversas especialidades</div>
            
            <div class="mx-36 py-4 flex flex-row space-x-4 justify-between">
                <div>
                    <img src="assets\img\fisioterapia.svg" alt="Fisioterapeutas">
                   
                    <span class="mt-2 px-2 border rounded-5 flex justify-center font-semibold" style="background-color: #C5EBFE;">Fisioterapeutas</span>
                </div>

                <div>
                    <img src="assets\img\psicologia.svg" alt="Psicólogos">
                    <span class="mt-2 px-2 border rounded-5 flex justify-center font-semibold" style="background-color: #C5EBFE;">Psicólogos</span>
                </div>

                <div>
                    <img src="assets\img\medicos.svg" alt="Médicos">
                    <span class="mt-2 px-2 border rounded-5 flex justify-center font-semibold" style="background-color: #C5EBFE;">Médicos</span>
                </div>
            </div>

            <div class="mx-36 py-4 flex flex-row space-x-4 justify-between">
                <div>
                    <img src="assets\img\enfermeiros.svg" alt="Enfermeiros">
                    <span class="mt-2 px-2 border rounded-5 flex justify-center font-semibold" style="background-color: #C5EBFE;">Enfermeiros</span>
                </div>

                <div>
                    <img src="assets\img\home-care.svg" alt="Home Care">
                    <span class="mt-2 px-2 border rounded-5 flex justify-center font-semibold" style="background-color: #C5EBFE;">Home Care</span>
                </div>

                <div>
                    <img src="assets\img\odontologista.svg" alt="Odontologistas">
                    <span class="mt-2 px-2 border rounded-5 flex justify-center font-semibold" style="background-color: #C5EBFE;">Odontologistas</span>
                </div>
            </div>
        </aside>

        <footer>
            <div class="px-36 flex flex-row justify-between" style="background-color: #C5EBFE;">
                <div id="foo-contato" class="grid content-center">
                    <span class="py-6 text-xl font-bold flex justify-center">Contato</span>
                    <div class="text-base">
                        Central da Saúde Ltda <br>
                        CNPJ nº 00.000.000/0001-00 <br>
                        Resposnsável Técnico: Dr. Pires Silva <br>
                        CRM/RN nº 9999 <br><br>
                    </div>
                </div>

                <div id="foo-funcionamento" class="grid content-center">
                    <span class="py-6 text-xl font-bold flex justify-center">Funcionamento</span>
                    <div class="text-base">
                        Segunda a Sexta <br>
                        07:00 h às 1900 h <br><br>
                    </div>
                </div>

                <div id="foo-funcionamento" class="grid content-center">
                    <span class="py-6 text-xl font-bold flex justify-center">Localização</span>
                    <div class="text-base">
                        <div>Av. Praia, 40 - Ponta Negra</div>
                        <div>Natal/RN</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
    
</script>
