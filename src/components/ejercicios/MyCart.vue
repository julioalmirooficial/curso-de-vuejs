
<script setup>
//MIS PRODUCTOS
const products = [
    {
        id:1,
        name:'AGUA CIELO',
        price: 2000.00,
        currency:'USD',
        poster:'https://abarroteselprofe.com/wp-content/uploads/2023/03/IMG_20230426_143049-scaled.jpg',
        quantity:0
    },
    {
        id:2,
        name:'INKA KOLA',
        price: 2500.00,
        currency:'USD',
        poster:'https://abarroteselprofe.com/wp-content/uploads/2023/03/IMG_20230426_143049-scaled.jpg',
        quantity:0
    },
    {
        id:3,
        name:'COCA KOLA',
        price: 2500.00,
        currency:'USD',
        poster:'https://abarroteselprofe.com/wp-content/uploads/2023/03/IMG_20230426_143049-scaled.jpg',
        quantity:0
    },    
    {
        id:4,
        name:'CAFE DEL NORTE',
        price: 500.00,
        currency:'USD',
        poster:'https://abarroteselprofe.com/wp-content/uploads/2023/03/IMG_20230426_143049-scaled.jpg',
        quantity:0
    }
];
const emits = defineEmits(['addToCart'])
const addCart = (product)  => {
    emits('addToCart',product)
}
</script>
<template>
    <div  class="grid">
        <div v-for="product in products" :key="product.id">
            <div>
                <img :src="product.poster" alt="">
            </div>
            <h2>{{ product.name }}</h2>
            <div class="price">
               {{  product.price}} {{ product.currency }}
            </div>
            <div>
                <button @click="addCart(product)">Añadir</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.grid{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    text-align: center;
    margin-top: 5rem;
}
img{
    max-width: 50px;
    margin: 0 auto;
    display: block;
}
h2{
    font-size: .75rem;
}
.price {
    font-size: .65rem;
}
button{
    background-color: #4f4f4f;
    color: #ffffff;
}
</style>