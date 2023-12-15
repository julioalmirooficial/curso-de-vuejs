<script setup>
import { ref } from 'vue';

const mostrarMenu = ref(true);

</script>
<template>
  <header>
    <div>
      <img src="../../assets/img/logo.svg" alt="Logo de vuejs" />
    </div>
    <nav v-if="mostrarMenu === true">
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact Us</li>
      </ul>
    </nav>
    <button @click="mostrarMenu = !mostrarMenu">Mostrar menu</button>
  </header>
</template>
