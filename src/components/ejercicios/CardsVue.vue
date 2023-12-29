<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    api:{
        type:Array,
        required:true
    }
})

const apiCurrent = props.api
const apiFiltrado = ref([])
const type = ref('daily')
const filtrar = (tipo)=> {    
    type.value = tipo
    if(tipo ==='daily') {
        return apiFiltrado.value = apiCurrent.filter(item => item.timeframes.daily)
    } else if(tipo ==='weekly') {
        return apiFiltrado.value = apiCurrent.filter(item => item.timeframes.weekly)        
    } 
    return apiFiltrado.value = apiCurrent.filter(item => item.timeframes.monthly)
}
const menuChange = (e) => {
    const item = document.querySelectorAll('.toggle')
    
    item.forEach(element => {
        element.classList.remove('active')
    });
    e.target.classList.add('active')
}
onMounted(()=> {
    filtrar('daily')
})

</script>
<template>
  <section class="grid grid-col-2">
    <div class="card">
      <div class="hero grid">
        <div class="profile-img">
          <img src="@/assets/img/image.avif" alt="" />
        </div>
        <div>
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
      </div>
      <div class="footer" @click="menuChange($event)">
        <div class="mt-1 toggle opacity-50" @click="filtrar('daily')">Daily</div>
        <div class="mt-1 toggle opacity-50" @click="filtrar('weekly')">Weekly</div>
        <div class="mt-1 toggle opacity-50 active" @click="filtrar('monthly')">Monthly</div>
      </div>
    </div>
    <div class="grid grid-col-3">
      <div class="card hero" v-for="task, i in apiFiltrado" :key="i">
        <div class="mt-4 hero hero-card">
          <div>
            <span>{{task.title}}</span>
            <span>...</span>
          </div>
          <h2>
            <span v-if="type ==='daily'">{{ task.timeframes.daily.current }}</span>
            <span v-else-if="type ==='weekly'">{{ task.timeframes.weekly.current }}</span>
            <span v-else>{{ task.timeframes.monthly.current }}</span>
            Hrs</h2>
          <p class="opacity-50">Last Week 
            <span v-if="type ==='daily'">{{ task.timeframes.daily.previous }}</span>
            <span v-else-if="type ==='weekly'">{{ task.timeframes.weekly.previous }}</span>
            <span v-else>{{ task.timeframes.monthly.previous }}</span>
            hrs</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
}
.mt-1 {
  margin-top: 0.5rem;
}
.mt-4 {
  margin-top: 2.5rem;
}
.grid-col-2 {
  grid-template-columns: 200px 1fr;
}
.grid-col-3 {
  grid-template-columns: repeat(3, 1fr);
}
.card {
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #091b61;
}
section {
  color: #ffffff;
  padding: 2rem;
  background-color: #000a2f;
}
.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.card.hero {
  padding: 0;
}
.card.hero:nth-child(1) {
  background-color: #ff9130;
}
.card.hero:nth-child(2) {
  background-color: #3876bf;
}
.card.hero:nth-child(3) {
  background-color: #ff8f8f;
}
.card.hero:nth-child(4) {
  background-color: #65b741;
}
.card.hero:nth-child(5) {
  background-color: #5d3587;
}
.card.hero:nth-child(6) {
  background-color: #f4f27e;
}
.hero {
  background-color: #5d12d2;
  padding: 1rem;
  border-radius: 0.5rem;
}
.hero-card {
  height: 100%;
  background-color: #091b61;
}
.footer {
  padding: 1rem;
}
.opacity-50 {
  opacity: 0.5;
}
.toggle{
    cursor: pointer;
}
.toggle.active{
    opacity: 1;
}
@media screen and (width <= 600px) {
  .grid-col-2,
  .grid-col-3 {
    grid-template-columns: repeat(1, 1fr);
  }
  .hero.grid{
    grid-template-columns: 50px 1fr;
    align-items: center;
  }
}
</style>
