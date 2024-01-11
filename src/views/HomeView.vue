<script setup lang="ts">

</script>

<template>
  <main>

    <div class="diamond-container">
      <img src="../assets/diamonds.svg" alt="Guillaume Perrot" class="diamond"> 


    </div>
    <div class="banner mt-5">
      <h3 class="subtitle md:text-lg lg:text-xl text-center">Concepteur développeur d'applications web et mobile</h3>
    </div>
  </main>
</template>
<style scoped>
@import '../assets/base.css';

main {
  padding-top: 2em;
  min-height: 85vh;
  min-width: 100vw;
}

.diamond-container {
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.diamond {
  min-width: 200vw;
}

@media screen and (min-width: 768px) {
  .diamond {
    min-width: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .diamond {
    min-width: 75%;
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
  background-color: hsl(260, 60%, 40%);
  width: 110vw;
  height: 3em;
  transform: rotate(2deg);
}

.subtitle {
  width: 75%;
  transform: rotate(-2deg);
  font-weight: bold;
}
</style>