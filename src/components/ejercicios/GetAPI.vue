<script setup>
import { onMounted, ref } from 'vue';
import IconSpinner from '@/components/icons/IconSpinner.vue';
import IconTrash from '../icons/IconTrash.vue';
import IconPen from '../icons/IconPen.vue';
import getData from '@/api/users/getData';
import insertData from '@/api/users/insertData';
import updateData from '@/api/users/updateData';
import deleteData from '@/api/users/deleteData';

const users = ref([]);
const loading = ref(true);
const action = ref('guardar');
const btnName = ref('Registrar');
const dataForm = ref({
  name: '',
  email: '',
  genero: '0',
});

const retrieveData = async () => {
  users.value = await getData();
  loading.value = false;
};

const deleteRegister = async (id) => {
  const isDelete = await deleteData(id);
  if (isDelete) {
    await retrieveData();
  } else {
    alert('Error al eliminar el registro');
  }
};

const insert = async (e) => {
  if (action.value === 'guardar') {
    await insertData(e, dataForm.value);
    await retrieveData();
  } else {
    await updateData(e, dataForm.value);
    delete dataForm.value.id;
    await retrieveData();
    action.value = 'guardar';
    btnName.value = 'Registrar';
  }

  dataForm.value.name = '';
  dataForm.value.email = '';
};

const showData = (user) => {
  const { email, name, id, genero } = user;

  dataForm.value.name = name;
  dataForm.value.email = email;
  dataForm.value.id = id;
  dataForm.value.genero = genero===null?'0':genero
  action.value = 'modificar';
  btnName.value = 'Modificar registro';
};

onMounted(async () => {
  await retrieveData();
});
</script>
<template>
  <section>
    <div class="card">
      <form>
        <label>
          <span>Nombres</span>
          <input
            class="input"
            type="text"
            v-model="dataForm.name"
            placeholder="Ingresa un nombre"
          />
        </label>
        <label>
          <span>Correo</span>
          <input
            class="input"
            type="email"
            v-model="dataForm.email"
            placeholder="Ingresa un correo"
          />
        </label>
        <label>
          <span>Género</span>
          <select v-model="dataForm.genero" class="input">
            <option value="0">Selecciona un genero</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </label>
        <button class="save" @click="insert($event)">{{ btnName }}</button>
      </form>
    </div>
    <IconSpinner class="spinner" v-if="loading" />
    <div v-else class="card">
      <div v-if="users.length <= 0">
        No hay registros en la base de datos
      </div>
      <div class="card-item" v-for="(user, i) in users" :key="i">
        <h2>{{ user.name }}</h2>
        <p>
          {{ user.email }}
          <br>
          Género: {{ user.genero }}
        </p>
        <div>
          <button @click="deleteRegister(user.id)">
            <IconTrash class="trash" />
          </button>
          <button @click="showData(user)">
            <IconPen class="edit" />
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
.edit {
  color: green;
}
.save {
  background-color: var(--dark);
  color: #ffffff;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
}
.input {
  padding: 0.5rem 0.6rem;
  border: 1px solid #cccccc;
  outline: none;
  display: block;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  color: var(--text-secondary);
}
.input:focus {
  outline: 2px solid var(--primary);
}
.input::placeholder {
  color: #cccccc;
}
label span {
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: block;
  margin-bottom: 0.25rem;
}
</style>
