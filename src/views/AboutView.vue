<script setup lang="ts">
import NextLink from '@/components/NextLink.vue';
import meUrl from '@/assets/img/me.webp';
</script>
<template>
  <div class="about p-2 flex items-center justify-center xl:justify-around flex-col">
    <div class="detailed-me p-3 text-white">
      <div class="flex items-center justify-between mb-5">
        <h2 class="md:text-5xl text-3xl font-bold">Qui suis-je ?</h2>
        <div class="picture-me-container">
          <img :src="meUrl" class="picture-me">
        </div>
      </div>
      <p class="text-justify mb-2">Je suis un développeur web passionné par la technologie et toujours avide d'apprendre. Ma curiosité sans fin me pousse à explorer de nouvelles techniques et à trouver des solutions innovantes aux défis qui se présentent. Animé par une soif constante de connaissances, je suis désormais déterminé à élargir mes compétences en m'orientant vers l'administration système. En quête d'une alternance, je suis prêt à relever ce nouveau défi avec enthousiasme et détermination, convaincu que cette expérience me permettra de continuer à grandir et à exceller dans le domaine de la technologie.</p>

    </div>
    <div class="tldr mt-5 xl:mt-0">
        <h2 class="text-5xl font-bold">TL;DR</h2>
        <div class="grid lg:grid-cols-2 gap-4 p-3 w-2/3 m-auto">
            <div class="tldr-card md:text-xl h-10">Passioné</div>
            <div class="tldr-card md:text-xl h-10">Communicatif</div>
            <div class="tldr-card md:text-xl h-10">Créatif</div>
            <div class="tldr-card md:text-xl h-10">Expertise</div>
        </div>
    </div>
    <NextLink link="/experiences" label="Allez voir mes exéperiences" />
  </div>
</template>

<style>
.tldr-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  text-align: center;
  background-color: hsl(290, 60%, 40%);
  color: white;

}

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

.picture-me-container {
  width: 3em;
  height: 3em;
  border-radius: 50%;
}

.picture-me {
  border-radius: 50%;
  width: 3em;
  height: 3em;
  object-fit: cover;
}

@media screen and (min-width: 768px) {
  .picture-me-container {
    width: 5em;
    height: 5em;
  }

  .picture-me {
    width: 5em;
    height: 5em;
  }
}

@media screen and (min-width: 1024px) {
  .picture-me-container {
    width: 7em;
    height: 7em;
  }

  .picture-me {
    width: 7em;
    height: 7em;
  }
}
</style>
