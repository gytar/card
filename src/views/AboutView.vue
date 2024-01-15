<script setup lang="ts">
import NextLink from '../components/NextLink.vue';
</script>
<template>
  <div class="about p-2 flex items-center justify-center xl:justify-around flex-col">
    <div class="detailed-me p-3">
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-5xl font-bold">Qui suis-je ?</h2>
        <div>pic</div>
      </div>
      <p class="lg:text-xl text-justify mb-2">Développeur web depuis peu, je suis toujours partant pour un nouveau
        challenge. Je suis fan d’informatique, mais aussi de musique et de chats.</p>
      <p class="lg:text-xl text-justify">Dans mon travail, je prone des valeurs fortes : l’éducation, l’accessibilité et
        l’écologie. Il me semble que nous devons toutes et tous faire de notre mieux dans notre domaine en donnant le
        meilleur de nous même.</p>
    </div>
    <div class="tldr mt-5 xl:mt-0">
      <h2 class="text-5xl font-bold">TL;DR</h2>
      <div class="grid lg:grid-cols-2 gap-4 p-3 w-2/3 m-auto">
        <div class="text-center bg-fuchsia-700 text-white text-xl h-10 flex items-center justify-center rounded-sm">
          Passionné</div>
        <div class="text-center bg-fuchsia-700 text-white text-xl h-10 flex items-center justify-center rounded-sm">
          Écologie</div>
        <div class="text-center bg-fuchsia-700 text-white text-xl h-10 flex items-center justify-center rounded-sm">
          Créatif</div>
        <div class="text-center bg-fuchsia-700 text-white text-xl h-10 flex items-center justify-center rounded-sm">Motivé
        </div>
      </div>
    </div>
    <NextLink link="/experiences" label="Allez voir mes exéperiences"/>
  </div>
</template>

<style>
@media (min-width: 1024px) {}

.about {
  padding-top: 3em;
  min-height: 100vh;
}

.detailed-me {
  border-radius: 3px;
  background-color: hsl(260, 60%, 40%);
  width: 90vw;
  padding: 2em;
}

.tldr {
  border-radius: 3px;
  background-color: hsl(290, 40%, 90%);
  width: 90vw;
  padding: 2em;
  color: #262428;
}
</style>
