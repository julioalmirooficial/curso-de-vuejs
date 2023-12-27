<script setup>
import { onBeforeMount, onMounted, onUnmounted } from 'vue';
//CUANDO YA SE MONTO EL COMPONENTE
onMounted(()=> {
  console.log('COMPONENTE CREADO')
})
onBeforeMount(()=> {
  console.log('ANTES DE MONTAR EL COMPONENTE')
})
onUnmounted(()=> {
  console.log('CUANDO DE DESMONTA EL COMPONENTE')
})

</script>
<template>
    <div>
        hola
    </div>
</template>