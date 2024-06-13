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

            <!-- Box dados especialidades disponpiveis-->
            <div style="border: solid; border-radius: 14px; border-color: #39D0CB;">
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

                    <div id="local-consulta" class="flex flex-col items-end">
                        <span class="text-xl font-semibold">Hospital Ponta Negra</span>
                        <span>Av. Ayrton Senna, 34 - Capim Macio</span>
                    </div>

                    <BotaoNav>Agendar Consulta</BotaoNav>

                </div>
            </div>
        </main>
    </div>
</template>
