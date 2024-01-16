<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { ossfactory, wellnessPrevention } from '@/data/ExperiencesData';
import { allTechnologies } from '@/data/TechnologiesData';
import NextLink from '@/components/NextLink.vue';
import PrevLink from '@/components/PrevLink.vue';
import ExperienceComp from '@/components/ExperienceComp.vue';
import type { Experience } from '@/models/Experiences';


const experiences: Ref<Experience[]> = ref<Experience[]>([ossfactory, wellnessPrevention]);
</script>

<template>
    <!-- eslint-disable vue/require-v-for-key -->
    <PrevLink link="/about" />
    <div class="ExperiencesView md:p-6 flex flex-col justify-around items-center">
        <h2 class="text-4xl font-bold my-3 text-center">Mes expériences pro</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div v-for="experience in experiences">
                <ExperienceComp :experience="experience" />
            </div>
        </div>
        <h2 class="text-4xl font-bold my-3 text-center">Mes compétences techniques</h2>
        <div class="skills-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-1/2">
            <div v-for="technology in allTechnologies" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>
        </div>
        <NextLink link="/contact" label="Alors, on garde contact ?" />
    </div>
</template>

<style scoped>
.ExperiencesView {
    padding-top: 4em;
    min-height: 100vh;
    max-width: 100vw;
}

.technology-img {
    max-width: 2em; 
}

.circle-angle-left {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(290, 60%, 40%);
    color: white;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    transition: all .2s ease-in-out;
}

a:hover {
    background: transparent;
}

.circle-angle-left:hover {
    background-color: hsl(290, 60%, 60%);
    transform: translateY(-5px);
}
</style>