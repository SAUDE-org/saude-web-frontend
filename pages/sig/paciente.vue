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
                    Sua(s) próxima(s) consulta(s) agendada(s) é(são):
            </div>

            <!-- Teste API: Box dados próximas consultas-->
            <!-- <div id="prox-consulta" style="width: 470px; border: solid; border-radius: 14px; border-color: #39D0CB;">
                <div class="p-2 flex justify-between">

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
            </div>            -->

            <!-- Teste API: Box dados próximas consultas-->
            <div v-if="consultas.length" v-for="consulta in consultas" :key="consulta.id" id="prox-consulta" style="width: 470px; border: solid; border-radius: 14px; border-color: #39D0CB;">
                <div class="p-2 flex justify-between">
                <div class="pr-4">
                    <div id="profissional" class="flex flex-col items-start">
                    <span class="text-xl font-semibold">{{ consulta.profissional?.nome ?? 'Profissional não definido' }}</span>
                    <span>{{ consulta.profissional?.especialidade ?? 'Especialidade não definida' }}</span>
                    </div>

                    <div id="data-consulta" class="mt-4 flex flex-col items-start">
                    <span>{{ formatDate(consulta.data) }}</span>
                    <span id="data-consulta">{{ consulta.horario }}</span>
                    </div>
                </div>

                <div id="local-consulta" class="flex flex-col items-end">
                    <span class="text-xl font-semibold">{{ consulta.clinica?.nome ?? 'Clínica não definida' }}</span>
                    <span>{{ consulta.clinica?.endereco ?? 'Endereço não definido' }}</span>
                </div>
                </div>
            </div>
            <div v-else>
                <span>Não há consultas agendadas.</span>
            </div>          

            <Titulo />
            <br>
            <div id="titulo">Você quer agendar uma</div>
            <div id="titulo">consulta ou ver seus exames?</div>

            <div class="my-8 flex flex-row items-center justify-center">
                
                <!-- Botão/rota Consultas-->
                <nav class="mx-8 flex grow">
                    <a href="/sig/pacientes/agendar">
                        <img src="assets/icon/consultas-man.svg" alt="Consultas">
                    </a>
                </nav>

                <!-- Botão/rota Exames-->
                <nav class="mx-8 flex grow">
                    <a href="/sig/pacientes/exames">
                        <img src="assets/icon/exames.svg" alt="Exames">
                    </a>
                </nav>
                
            </div>

            <!--botão voltar-->
            <a href="/tipo-usuario">
                <BotaoNav>Voltar</BotaoNav>
            </a>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from 'nuxt/app'

// Função para formatar a data
const formatDate = (dateString) => {
  const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }
  return new Date(dateString).toLocaleDateString('pt-BR', options)
}

const consultas = ref([])

// Fetching the data from the API
const { data, pending, error } = await useFetch('http://localhost:8080/consulta/todas')

// Atribui os dados recebidos à variável reativa consultas
if (data.value) {
  consultas.value = data.value
}
</script>

<style scoped>
#prox-consulta {
  width: 470px;
  border: solid;
  border-radius: 14px;
  border-color: #39D0CB;
}

.p-2 {
  padding: 0.5rem;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.pr-4 {
  padding-right: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.text-xl {
  font-size: 1.25rem;
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}
</style>
