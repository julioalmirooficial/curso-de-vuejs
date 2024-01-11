<script setup>
import { onMounted, ref } from 'vue';
import IconSpinner from '@/components/icons/IconSpinner.vue';
import IconTrash from '../icons/IconTrash.vue';
import getData from '@/api/users/getData'
import insertData from '@/api/users/insertData'

const BASE_URL = 'http://localhost:8000/index.php';
const users = ref([]);
const loading = ref(true);
const dataForm = ref({
  name: '',
  email: ''
});

const retrieveData = async () => {
  users.value = await getData(); 
  loading.value = false
}


const deleteData = async (id) => {
  const response = await fetch(BASE_URL + '?id=' + id, {
    method: 'DELETE',
    'Content-Type': 'application/json'
  });
  const data = await response.json();
  if (data.mensaje === 'Registro eliminado con éxito') {
    await retrieveData()
  } else {
    alert('No se elimino el registro');
  }
};

const insert  = async (e)=> {
  await insertData(e,dataForm.value)
  await retrieveData()
}

onMounted(async () => {
  await retrieveData()
});
</script>
<template>
  <section>
    <div class="card">
      <form>
        <input type="text" v-model="dataForm.name" placeholder="Ingresa un nombre" />
        <input type="email" v-model="dataForm.email" placeholder="Ingresa un correo" />
        <button @click="insert($event)">Registrar</button>
      </form>
    </div>
    <IconSpinner class="spinner" v-if="loading" />
    <div v-else class="card">
      <div class="card-item" v-for="(user, i) in users" :key="i">
        <h2>{{ user.name }}</h2>
        <p>
          {{ user.email }}
        </p>
        <div>
          <button @click="deleteData(user.id)">
            <IconTrash class="trash" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.card {
  padding: 1rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.card-item {
  background-color: rgba(0, 0, 0, 0.07);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}
.trash {
  color: red;
}
</style>
