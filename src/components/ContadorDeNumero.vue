<script setup>
import { ref } from 'vue';

let numero = ref(0);
</script>

<template>
  <div>
    <button @click="numero++">Aumentar</button>
    <button @click="numero--">Disminuir</button>
    <div>
      {{ numero }}
    </div>
  </div>
</template>
