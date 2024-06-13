<template>
    <div class="mt-3 flex flex-col items-end">
      <button class="btn-view" @click="abrirNovaAba">
        Visualizar
      </button>
    </div>
  </template>
  
  <script setup>
  // Defina a prop "abrirNovaAba"
  const abrirNovaAba = () => {
    window.open('/assets/docs/exame-modelo.svg', '_blank');
  };
  </script>

<style>
    @import url("~/assets/css/btn.css");
</style>