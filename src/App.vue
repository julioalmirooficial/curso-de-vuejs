<script setup>
import MainHeader from '@/components/header/MainHeader.vue'
import { ref } from 'vue';
const array = ref([1,2,3,5])
</script> 
<template>
  <div >
    <MainHeader :numero="12500" :array="array"/>
  </div>
</template>