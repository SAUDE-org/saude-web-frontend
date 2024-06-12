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

            <div id="data-atual">
                QUA, 12 Junho 2024
            </div>

            <div>
                <span class="text-black">
                    Sua próxima consulta agendada é:
                </span>                
            </div>

            <div id="prox-consulta" style="border: solid; border-radius: 14px; border-color: aqua;">
                <span>Nutricionista</span>
            </div>

<!--
    <span style="color: #506175; font-size: 32px; font-style: italic; flex: auto; justify-content: center;">            
-->
            
        <!--
            <span class="flex flex-col items-center" style="color: #506175; font-size: 32px; font-style: italic;">
                <div>Você quer agendar uma</div>                
                <div>consulta ou ver seus exames?</div>
            </span>
        -->

            <Titulo />
            <div id="titulo">Você quer agendar uma</div>
            <div id="titulo">consulta ou ver seus exames?</div>


        </main>

    </div>

</template>
