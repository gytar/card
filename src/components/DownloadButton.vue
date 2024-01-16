<script setup lang="ts">
import { inject } from "vue";
import type { AxiosResponse } from "axios";
import type { DownloadableItem } from '@/models/DownloadableItem';

const props = defineProps<{item: DownloadableItem}>()

const axios: any = inject('axios');

const downloadItem = (item: DownloadableItem) => {
    axios.get(item.url).then((response: AxiosResponse) => {
        const resumeObjectURL = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = resumeObjectURL;
        link.setAttribute('download', item.name);
        document.body.appendChild(link);
        link.click();
        link.remove();
    })
}
</script>

<template>
    <div class="DownloadButton">
        <a :href="props.item.url" @click="downloadItem(props.item)" target="_blank" class="download-button" :title="props.item.label"
            :aria-label="props.item.label">
            <font-awesome-icon icon="download" class="text-2xl"></font-awesome-icon>
        </a>
    </div>
</template>

<style scoped>

.download-button {
  background: hsl(260, 60%, 40%);
  color: white;
  padding: .75em;
  border-radius: 3px;
  transition: all .2s ease-in-out;
}

.download-button:hover {
  background: hsl(260, 60%, 60%);
}</style>