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
            <div id="titulo">Lista de Exames</div>

            <!-- Box dados lista de Exames-->
            <div class="mt-2" style="background-color: #ECF3F1; border: solid; border-radius: 14px; border-color: #39D0CB;">
                <div class="p-2 flex flex-row items-start">

                    <div class="pr-4">
                        <div id="exame" class="flex flex-col items-start">
                            <span class="text-xl font-semibold">Exame de Sangue</span>
                            <span>João Maria de José</span>
                        </div>

                        <div id="data-consulta" class="mt-4 flex flex-col items-start">
                            <span>Ter., 03 de abr. de 2024</span>
                            <span id="data-exame">11:30h</span>
                        </div>
                    </div>

                    <div>
                        <div id="local-exame" class="flex flex-col items-end">
                            <span class="text-xl font-semibold">Hospital Ponta Negra</span>
                            <span class="mt-1 font-bold text-green-700">Concluído</span>
                        </div>

                        <BotaoView>Visualizar</BotaoView>
                    </div>
                </div>
            </div>


        </main>

    </div>

</template>