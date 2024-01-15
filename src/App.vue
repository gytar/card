<script setup lang="ts">
import { inject } from "vue";
import { RouterLink, RouterView } from 'vue-router';
import type { AxiosResponse } from "axios";
import type { DownloadableItem } from '@/models/DownloadableItem';
import resumeUrl from '@/assets/files/CV-Guillaume-Perrot.pdf';

const axios: any = inject('axios');

const resume: DownloadableItem = {
  name: "CV Guillaume Perrot.pdf",
  label: "Télécharger le CV",
  url: resumeUrl,
}

const downloadItem = (item: DownloadableItem) => {
  axios.get(item.url).then((response: AxiosResponse) => {
    const resumeObjectURL = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');

    link.href = resumeObjectURL;
    link.setAttribute('download', item.name);
    document.body.appendChild(link);

    link.click();
    // URL.revokeObjectURL(link.href);
    link.remove();
  })
}
</script>

<template>
  <header>
    <div class="wrapper flex items-center justify-between w-full md:p-3">
      <nav>
        <RouterLink to="/" title="Accueil" class="home-link"><font-awesome-icon icon="house" class="text-2xl" /></RouterLink>
        <!-- <RouterLink to="/about">À propos</RouterLink>
        <RouterLink to="/experiences">Expériences</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink> -->
      </nav>
      <div class="download-resume">
        <a :href="resume.url" @click="downloadItem(resume)" target="_blank" class="download-button" :title="resume.label">
          <font-awesome-icon icon="download" class="text-2xl"></font-awesome-icon>
        </a>
      </div>
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

.download-button {
  background: hsl(260, 60%, 40%);
  color: white;
  padding: .75em;
  border-radius: 3px;
  transition: all .2s ease-in-out;
}

.download-button:hover {
  background: hsl(260, 60%, 60%);
}

.home-link {
  transition: all .2s ease-in-out;
}

.home-link:hover {
  color: hsl(260, 60%, 70%);
  background: transparent;
}
</style>
