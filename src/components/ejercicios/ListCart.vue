<script setup>
import { onMounted, ref } from 'vue';
import MyCart from './MyCart.vue';
const listaDeCompras = ref([]);
const showModal = ref(false);
const recibir = (data) => {
  const exist = listaDeCompras.value.some((item) => item.id === data.id);
  if (!exist) {
    data.quantity = 1;
    listaDeCompras.value.push(data);
    localStorage.setItem('myCart', JSON.stringify(listaDeCompras.value));
  } else {
    const item = listaDeCompras.value.filter((item) => item.id === data.id);
    item[0].quantity += 1;
    localStorage.setItem('myCart', JSON.stringify(listaDeCompras.value));
  }
};
const eliminar = (i) => {
  listaDeCompras.value.splice(i, 1);
};
const clearCart = () => {
    listaDeCompras.value = []
    localStorage.removeItem('myCart')
}
onMounted(() => {
  const local = localStorage.getItem('myCart');
  if (local) {
    listaDeCompras.value = JSON.parse(local);
  }
});
</script>
<template>
  <section>
    <div class="counter" @click="showModal = !showModal">
      <span>{{ listaDeCompras.length }} items</span>
    </div>
    <div class="cart" v-if="showModal && listaDeCompras.length > 0">
      <div>
        Lista de compras
        <button @click="clearCart">
          Vaciar carrito
        </button>
      </div>
      <div class="cart-item" v-for="(lista, i) in listaDeCompras" :key="i">
        <img :src="lista.poster" alt="" />
        <div>
          <h2>{{ lista.name }}</h2>
          <div>{{ lista.price }} {{ lista.currency }}</div>
          <div>
            Cant: {{ lista.quantity }}
            <button @click="eliminar(i)">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MyCart @add-to-cart="recibir" />
</template>
<style scoped>
.counter {
  text-align: right;
  padding: 0.5rem 1rem;
}
.counter span {
  color: var(--white);
  background-color: var(--dark);
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
section {
  position: relative;
}
.cart {
  position: absolute;
  padding: 1rem;
  width: 50%;
  background-color: #d4d4d4;
  right: 1rem;
}
.cart-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.cart img {
  width: 40px;
}
h2 {
  font-size: 0.8rem;
}
button {
  color: #f91e0e;
}
</style>
