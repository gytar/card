<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { ossfactory, wellnessPrevention } from '@/data/ExperiencesData';
import type { Experience } from '@/models/Experiences';
import NextLink from '@/components/NextLink.vue';
import ExperienceComp from '@/components/ExperienceComp.vue';


const experiences: Ref<Experience[]> = ref<Experience[]>([ossfactory, wellnessPrevention]);
</script>

<template>
    <!-- eslint-disable vue/require-v-for-key -->
    <div class="ExperiencesView">
        <div v-for="experience in experiences">
            <ExperienceComp :experience="experience" />
        </div>
        <NextLink link="/contact" label="Alors, on garde contact ?" />
    </div>
</template>

<style scoped>
.ExperiencesView {
    padding-top: 2em;
    min-height: 85vh;
    min-width: 100vw;
}
</style>