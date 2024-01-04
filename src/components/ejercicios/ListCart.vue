<script setup>
import { ref } from 'vue';
import MyCart from './MyCart.vue';
const listaDeCompras = ref([])
const recibir = (data) => {
    listaDeCompras.value.push(data)
}
</script>
<template>
    <div>
        {{ listaDeCompras.length }} items
    </div>
    <div>
        <div v-for="lista, i in listaDeCompras" :key="i">
        <h2>{{lista.name}}</h2></div>
    </div>
    <MyCart @add-to-cart="recibir"/>
</template>