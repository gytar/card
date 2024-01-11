<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="flex items-center justify-center flex-col">
    <div class="diamond-container">
      <img src="../assets/diamonds.svg" alt="Guillaume Perrot" class="diamond">
    </div>
    <div class="banner">
      <h3 class="subtitle md:text-lg lg:text-xl text-center">Concepteur développeur d'applications web et mobile</h3>
    </div>
    <span class="mt-5 mb-3 italic dark:text-neutral-300 text-neutral-600">Prêt⋅e⋅s à en voir plus ?</span>
    <RouterLink to="/about" class="next-link">
      <div class="circle-angle-down">
        <font-awesome-icon icon="angle-down" />
      </div>
    </RouterLink>
  </main>
</template>
<style scoped>
@import '../assets/base.css';

main {
  padding-top: 2em;
  min-height: 85vh;
  min-width: 100vw;
}

a.next-link:hover {
  background-color: transparent;
}

.circle-angle-down {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(290, 60%, 40%);
  color: white;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  transition: all .2s ease-in-out;
}

.circle-angle-down:hover {
  background-color: hsl(290, 60%, 60%);
  transform: translateY(-5px);
}

.diamond-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.diamond {
  min-width: 200vw;
  object-fit: cover;
  max-height: 60vh;
}

@media screen and (min-width: 768px) {
  .diamond {
    min-width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .diamond {
    min-width: 70%;
  }
}

.title {
  background: linear-gradient(-90deg, hsl(260, 60%, 60%), hsl(290, 60%, 60%));
  background-clip: text;
  color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, hsl(260, 60%, 30%), hsl(290, 60%, 30%));
  height: 5em;
  transform: rotate(1deg);
  border-radius: 3px;
}

.subtitle {
  width: 75%;
  font-weight: bold;
  transform: rotate(-1deg);
}
</style>