<script setup>
import { ref } from 'vue';

const posts = ref([
  {
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  }
]);

const crearPost = () => {
  const nuevoPost = {
    title: 'Nuevo Post',
    body: 'blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
  };
  posts.value.push(nuevoPost);
};
</script>
<template>
  <div>
    <div style="margin-bottom: 3rem">
      <button @click="crearPost">Crear</button>
    </div>
    <div style="border: 2px solid #555555; margin-bottom: 1rem" v-for="(post, i) in posts" :key="i">
      <h1>
        {{ post.title }}
      </h1>
      <p>
        {{ post.body }}
      </p>
    </div>
  </div>
</template>
