<script setup>
import { ref } from 'vue';
const esVisible = ref(false);


</script>
<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus perferendis eligendi minima officiis accusantium aperiam labore nostrum a laudantium! Officiis totam quis error. Accusantium quos repudiandae quaerat distinctio porro!
    <button @click="esVisible = !esVisible">ver modal</button>
    <div class="modal" v-show="esVisible">
        <button @click="esVisible = !esVisible">cerrar modal</button>
        <h2 style="font-size: 2rem;">mi modal</h2>
    </div>
  </div>
</template>
