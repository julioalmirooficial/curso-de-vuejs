<script setup>
import {ref } from 'vue';
import TestCicloDeVida from '@/components/base/TestCicloDeVida.vue'

const mostrarMenu = ref(false);
const props = defineProps({
  showModal:{
    type:Function,
    required:false
  },
  numero:{
    type:Number
  },
  array:{
    type:Array
  }
})

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
  <div>
    <button @click="props.showModal"></button>
    {{ props.numero }}
    <ul>
      <li v-for="item in props.array" :key="item">{{ item }}</li>
    </ul>
    <TestCicloDeVida/>
  </div>
</template>