<template>

    <div class="w-full h-full">

        <Cabeca>
            <img src="assets/icon/profile_icon.svg" alt="Perfil">
            <div id="nome-perfil">
                Sr.(a) João Maria de José
            </div>
        </Cabeca>

        <main class="mx-24 mt-8 flex flex-col items-center">

            <Titulo />
            <div id="titulo">Especialidades disponíveis:</div>

            <!-- Box dados especialidades disponíveis-->
            <div class="mt-2" style="border: solid; border-radius: 14px; border-color: #39D0CB;">
                <div class="p-2 flex flex-row items-start">

                    <div class="pr-4">
                        <div id="profissional" class="flex flex-col items-start">
                            <span class="text-xl font-semibold">Nutricionista</span>
                            <span>Dra. Ana Maria Braga</span>
                        </div>

                        <div id="data-consulta" class="mt-4 flex flex-col items-start">
                            <span>Seg., 22 de ago. de 2024</span>
                            <span id="data-consulta">11:30h</span>
                        </div>
                    </div>

                    <div>
                        <div id="local-consulta" class="flex flex-col items-end">
                            <span class="text-xl font-semibold">Hospital Ponta Negra</span>
                            <span>Av. Ayrton Senna, 34 - Capim Macio</span>
                        </div>

                        <BotaoSubPeq>Agendar Consulta</BotaoSubPeq>
                    </div>
                </div>
            </div>

            <!-- Box dados especialidades disponíveis-->
            <div class="mt-2" style="border: solid; border-radius: 14px; border-color: #39D0CB;">
                <div class="p-2 flex flex-row items-start">

                    <div class="pr-4">
                        <div id="profissional" class="flex flex-col items-start">
                            <span class="text-xl font-semibold">Endocrinologia</span>
                            <span>Dr. Galvão Bueno</span>
                        </div>

                        <div id="data-consulta" class="mt-4 flex flex-col items-start">
                            <span>Ter., 10 de out. de 2024</span>
                            <span id="data-consulta">16:25h</span>
                        </div>
                    </div>

                    <div>
                        <div id="local-consulta" class="flex flex-col items-end">
                            <span class="text-xl font-semibold">Hospital Pirangi</span>
                            <span>Av. Praia, 40 - Pirangi do Norte</span>
                        </div>

                        <BotaoSubPeq>Agendar Consulta</BotaoSubPeq>
                    </div>
                </div>
            </div>

            <!-- Box dados especialidades disponíveis-->
            <div class="mt-2" style="border: solid; border-radius: 14px; border-color: #39D0CB;">
                <div class="p-2 flex flex-row items-start">

                    <div class="pr-4">
                        <div id="profissional" class="flex flex-col items-start">
                            <span class="text-xl font-semibold">Psicologia</span>
                            <span>Dra. Ana Maria Braga</span>
                        </div>

                        <div id="data-consulta" class="mt-4 flex flex-col items-start">
                            <span>Ter., 03 de out. de 2024</span>
                            <span id="data-consulta">30:30h</span>
                        </div>
                    </div>

                    <div>
                        <div id="local-consulta" class="flex flex-col items-end">
                            <span class="text-xl font-semibold">Hospital Ponta Negra</span>
                            <span>Av. Ayrton Senna, 34 - Capim Macio</span>
                        </div>

                        <BotaoSubPeq>Agendar Consulta</BotaoSubPeq>
                    </div>
                </div>
            </div>

            <!-- Box dados especialidades disponíveis-->
            <div class="mt-2" style="border: solid; border-radius: 14px; border-color: #39D0CB;">
                <div class="p-2 flex flex-row items-start">

                    <div class="pr-4">
                        <div id="profissional" class="flex flex-col items-start">
                            <span class="text-xl font-semibold">Endocrinologia</span>
                            <span>Dr. Galvão Bueno</span>
                        </div>

                        <div id="data-consulta" class="mt-4 flex flex-col items-start">
                            <span>Ter., 10 de out. de 2024</span>
                            <span id="data-consulta">16:25h</span>
                        </div>
                    </div>

                    <div>
                        <div id="local-consulta" class="flex flex-col items-end">
                            <span class="text-xl font-semibold">Hospital Pirangi</span>
                            <span>Av. Praia, 40 - Pirangi do Norte</span>
                        </div>

                        <BotaoSubPeq>Agendar Consulta</BotaoSubPeq>
                    </div>
                </div>
            </div>

            <!--botão voltar-->
            <a href="/sig/paciente">
                <BotaoNav>Voltar</BotaoNav>
            </a>
        </main>
    </div>
</template>
