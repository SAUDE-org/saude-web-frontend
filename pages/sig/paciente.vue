<template>
    <div class="w-full h-full">

        <header>

            <Cabeca>
                <img src="assets/icon/profile_icon.svg" alt="Perfil">
                <div id="nome-perfil">
                    Sr.(a) João Maria de José               
                </div>
            </Cabeca>

        </header>

        <main class="mx-24 mt-8 flex flex-col items-center">

            <div id="data-atual" class="mb-8 text-xl font-semibold text-black italic">
                QUI, 12 Junho 2024
            </div>

            <div class="mb-8 text-xl font-semibold text-black">
                    Sua próxima consulta agendada é:
            </div>

            <div id="prox-consulta" style="border: solid; border-radius: 14px; border-color: #39D0CB;">
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

                </div>
            </div>

            <Titulo />
            <div id="titulo">Você quer agendar uma</div>
            <div id="titulo">consulta ou ver seus exames?</div>

            <div class="my-8 flex flex-row items-center justify-center">
                <nav class="mx-8 flex grow">
                    <a href="/sig/pacientes/agendar">
                        <img src="assets/icon/consultas-man.svg" alt="Consultas">
                    </a>
                </nav>

                <nav class="mx-8 flex grow">
                    <a href="/sig/pacientes/exames">
                        <img src="assets/icon/exames.svg" alt="Exames">
                    </a>
                </nav>
            </div>
        </main>
    </div>
</template>
