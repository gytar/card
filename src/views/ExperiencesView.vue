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
    <div class="ExperiencesView md:p-6">
        <h2 class="text-4xl font-bold my-3 text-center">Mes expériences pro</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div v-for="experience in experiences">
                <ExperienceComp :experience="experience" />
            </div>
        </div>
        <NextLink link="/contact" label="Alors, on garde contact ?" />
    </div>
</template>

<style scoped>
.ExperiencesView {
    padding-top: 4em;
    min-height: 100vh;
    min-width: 100vw;
}
</style>