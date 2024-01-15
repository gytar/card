<script setup lang="ts">
import { inject } from "vue";
import { RouterLink, RouterView } from 'vue-router';
import resumeUrl from './assets/files/CV-Guillaume-Perrot.pdf';
import type { AxiosResponse } from "axios";

const axios: any = inject('axios');

type Item = {
  name: string,
  label: string,
  url: string
}

const resume: Item = {
  name: "CV Guillaume Perrot.pdf",
  label: "Télécharger le CV",
  url: resumeUrl,
}

const downloadItem = (item: Item) => {
  axios.get(item.url).then((response: AxiosResponse) => {
    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
    var fURL = document.createElement('a');

    fURL.href = fileURL;
    fURL.setAttribute('download', item.name);
    document.body.appendChild(fURL);

    fURL.click();
    URL.revokeObjectURL(fURL.href);
  })
}
</script>

<template>
  <header>
    <div class="wrapper flex items-center justify-between w-full md:p-3">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/about">À propos</RouterLink>
        <RouterLink to="/experiences">Expériences</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <div class="download-resume">
        <a :href="resume.url" @click="downloadItem(resume)" target="_blank" class="download-button">
          {{ resume.label }} <font-awesome-icon icon="download"></font-awesome-icon>
        </a>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  position: absolute;
  margin: auto;
}

.wrapper nav {
  display: flex;
  align-items: center;
}

.download-button {
  background: hsl(260, 60%, 40%);
  color: white;
  padding: .5em;
  border-radius: 2px;
  transition: all .2s ease-in-out;
}
.download-button:hover {
  background: hsl(260, 60%, 60%);
}
</style>
