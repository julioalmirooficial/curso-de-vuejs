<script setup>
import {ref } from 'vue';

const mostrarMenu = ref(false);

</script>
<template>
  <header class="main-header flex">
    <div class="menu-small flex">
      <div class="logo-container flex">
      <img class="logo" src="../../assets/img/logo.svg" alt="Logo de vuejs" />
      Vue
    </div>
    <button class="show-menu" @click="mostrarMenu = !mostrarMenu">Menu</button>
    </div>
    <nav class="menu" :class="mostrarMenu?'active':''">
      <ul>
        <li class="menu-item">Home</li>
        <li class="menu-item">Shop</li>
        <li class="menu-item">Contact Us</li>
      </ul>
    </nav>
  </header>
</template>