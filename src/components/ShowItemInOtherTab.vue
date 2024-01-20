<script setup lang="ts">
import type { DownloadableItem } from '@/models/DownloadableItem';

const props = defineProps<{item: DownloadableItem}>()

</script>

<template>
    <div class="ShowItemInOtherTab">
        <a :href="props.item.url" target="_blank" class="download-button" :title="props.item.label"
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