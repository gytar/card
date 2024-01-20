<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import type { DownloadableItem } from '@/models/DownloadableItem';
import resumeUrl from '@/assets/files/CV-Guillaume-Perrot.pdf';
import ShowItemInOtherTabVue from '@/components/ShowItemInOtherTab.vue';

const resume: DownloadableItem = {
  name: "CV Guillaume Perrot.pdf",
  label: "Télécharger le CV",
  url: resumeUrl,
}
</script>

<template>
  <header>
    <div class="wrapper flex items-center justify-between w-full md:p-3">
      <nav>
        <RouterLink to="/" title="Accueil" class="home-link" aria-label="Accueil">
          <font-awesome-icon icon="house" class="text-2xl" />
        </RouterLink>
      </nav>
      <ShowItemInOtherTabVue :item="resume" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  position: absolute;
}

.wrapper nav {
  display: flex;
  align-items: center;
}

.home-link {
  transition: all .2s ease-in-out;
}

.home-link:hover {
  color: hsl(260, 60%, 70%);
  background: transparent;
}
</style>
