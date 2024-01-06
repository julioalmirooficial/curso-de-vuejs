<script setup>
import { onMounted, ref } from 'vue';
import IconSpinner from '@/components/icons/IconSpinner.vue';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const posts = ref([]);
const myPost = ref({});
const loading = ref(true);

const getData = async () => {
  const response = await fetch(BASE_URL);
  posts.value = await response.json();
  loading.value = false;
};

const getFirstData = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  myPost.value = await response.json();
};
onMounted(async () => {
  await getData();
});
</script>
<template>
  <section>
    <section>
      <h1>Mi post seleccionado</h1>
      <div>
        <h3>{{ myPost.title }}</h3>
        <p>
          {{ myPost.body }}
        </p>
      </div>
    </section>

    <IconSpinner class="spinner" v-if="loading" />
    <div v-else>
      <div v-for="(post, i) in posts" :key="i">
        <h2>{{ post.title }}</h2>
        <p>
          {{ post.body }}
        </p>
        <button @click="getFirstData(post.id)">Mostrar registro</button>
      </div>
    </div>
  </section>
</template>
<style>
section {
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.spinner {
  animation: spinner 1s infinite;
}
h3 {
  color: var(--primary);
}
button {
  background-color: var(--dark);
  color: var(--white);
}
button + div {
  background: #0000005a;
  padding: 0.5rem;
}
@keyframes spinner {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
