<template>
    <div class="w-full h-full">

        <header class="flex justify-end">
            <BotaoHome />
        </header>

        <main class="mx-24 mt-8 flex flex-col items-center">
            
            <!--box título-->
            <div id="titCadPaciente" class="mb-8 flex flex-row items-center justify-center">                
                <span class="text-gray-500 italic">
                    <h1>Cadastro de Paciente</h1>
                </span>
            </div>

            <!-- box input texto nome -->
            <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch" style="background-color: #ecf3f1; border-radius: 25px;">
                <div class="p-2 italic text-slate-600">Nome</div>
                <div class="grow">
                <input v-model="nome" class="form-control fw-lighter" id="nome" type="text" placeholder="Digite seu nome aqui" style="background-color: #ecf3f1; border-color: #ecf3f1;">
                </div>
            </div>

            <!-- box input texto cpf -->
            <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch" style="background-color: #ecf3f1; border-radius: 25px;">
                <div class="p-2 italic text-slate-600">CPF</div>
                <div class="grow">
                <input v-model="cpf" class="form-control fw-lighter" id="cpf" type="text" placeholder="Digite seu cpf aqui" style="background-color: #ecf3f1; border-color: #ecf3f1;">
                </div>
            </div>

            <!-- box input texto email -->
            <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch" style="background-color: #ecf3f1; border-radius: 25px;">
                <div class="p-2 italic text-slate-600">E-mail</div>
                <div class="grow">
                <input v-model="email" class="form-control fw-lighter" id="email" type="text" placeholder="Digite seu email aqui" style="background-color: #ecf3f1; border-color: #ecf3f1;">
                </div>
            </div>

            <!-- box input texto telefone -->
            <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch" style="background-color: #ecf3f1; border-radius: 25px;">
                <div class="p-2 italic text-slate-600">Telefone</div>
                <div class="grow">
                <input v-model="telefone" class="form-control fw-lighter" id="telefone" type="text" placeholder="Digite neste formato: (99) 99999-9999" style="background-color: #ecf3f1; border-color: #ecf3f1;">
                </div>
            </div>

            <!-- box input texto endereço -->
            <div class="w-25 h-14 mb-2 flex flex-row items-center justify-items-stretch" style="background-color: #ecf3f1; border-radius: 25px;">
                <div class="p-2 italic text-slate-600">Endereço</div>
                <div class="grow">
                <input v-model="endereco" class="form-control fw-lighter" id="endereco" type="text" placeholder="Digite seu endereço completo aqui" style="background-color: #ecf3f1; border-color: #ecf3f1;">
                </div>
            </div>

            <!-- Botão cadastrar -->
            <br>
            <nav>
                <button @click="cadastrar" type="button" class="btn">Cadastrar</button>
            </nav>                

            <!-- Caixa de alerta personalizada -->
            <div id="alertBox"></div>

        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFetch } from 'nuxt/app';

const nome = ref('');
const cpf = ref('');
const email = ref('');
const telefone = ref('');
const endereco = ref('');

const cadastrar = async () => {
  try {
    const { data, error } = await useFetch('http://localhost:8080/paciente/inserir', {
      method: 'POST',
      body: {
        nome: nome.value,
        cpf: cpf.value,
        email: email.value,
        telefone: telefone.value,
        endereco: endereco.value,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (error) {
      alert('Erro ao cadastrar paciente: ' + error.message);
    } else {
      alert('Paciente cadastrado com sucesso!');

      // Limpar os dados dos inputs
      nome.value = '';
      cpf.value = '';
      email.value = '';
      telefone.value = '';
      endereco.value = '';
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    alert('Erro ao cadastrar paciente');
  }
};

import BotaoSair from '~/components/BotaoSair.vue';

/** @import url("~/assets/js/btn.js"); */
</script>

<style>
    @import url("~/assets/css/btn.css");
</style>