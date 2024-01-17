<script setup lang="ts">
import NextLink from '@/components/NextLink.vue';
import meUrl from '@/assets/img/me.webp';
</script>
<template>
  <div class="about p-2 flex items-center justify-center xl:justify-around flex-col">
    <div class="detailed-me p-3 text-white">
      <div class="flex items-center justify-between mb-5">
        <h2 class="md:text-5xl text-3xl font-bold">Qui suis-je ?</h2>
        <!-- TODO: insert picture here -->
        <div class="picture-me-container">
          <img :src="meUrl" alt="Oh mais c'est moi là" class="picture-me">
        </div>
      </div>
      <p class="text-justify mb-2">Je suis Guillaume Perrot, développeur web passionné par la transformation
        d'idées en expériences captivantes. Ma force réside dans la fusion de la créativité, de la communication
        transparente et d'une expertise technique pointue. Chaque ligne de code que je crée est imprégnée d'une esthétique
        soignée, tandis que ma capacité à comprendre vos idées garantit une collaboration fluide. Maîtrisant divers
        langages et frameworks, je m'engage à développer des solutions robustes et innovantes, restant à la pointe de la
        technologie.</p>

      <p class="text-justify">Si vous recherchez un partenaire qui va au-delà du simple développement, mais qui apporte
        une combinaison unique
        de créativité, de communication efficace et d'expertise technique à votre projet, contactez-moi et donnons vie à
        vos idées avec excellence et impact.</p>

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
