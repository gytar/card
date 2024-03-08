<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { ossfactory, wellnessPrevention, humanBooster, cyberfull } from '@/data/ExperiencesData';
import { lang, backend, frontend, mobile, devops, libraries, database, erp, others} from '@/data/TechnologiesData';
import NextLink from '@/components/NextLink.vue';
import PrevLink from '@/components/PrevLink.vue';
import ExperienceComp from '@/components/ExperienceComp.vue';
import type { Experience } from '@/models/Experiences';

const experiences: Ref<Experience[]> = ref<Experience[]>([ossfactory, wellnessPrevention]);
const classes: Ref<Experience[]> = ref<Experience[]>([humanBooster, cyberfull]);
</script>

<template>
    <!-- eslint-disable vue/require-v-for-key -->
    <PrevLink link="/about" />
    <div class="ExperiencesView flex flex-col justify-around items-center w-full">
        <!-- Professional experience -->
        <h2 class="text-4xl font-bold my-3 text-center">Mes expériences pro</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div v-for="experience in experiences">
                <ExperienceComp :experience="experience" />
            </div>
        </div>
        <!-- Courses -->
        <h2 class="text-4xl font-bold my-3 text-center md:w-1/2">Mes Formations</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div v-for="experience in classes">
                <ExperienceComp :experience="experience" />
            </div>
        </div>
        <!-- Technical skills -->
        <h2 class="text-4xl font-bold my-3 text-center">Mes compétences techniques</h2>
        <h5 class="text-2xl font-bold, my-2 text-center">Langages</h5>
        <div class="skills-container grid grid-cols-3 md:grid-cols-6 w-full lg:w-1/2">
            <div v-for="technology in lang" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label}}</span>  
            </div>
        </div>
        <h5 class="text-2xl font-bold, my-2 text-center">Frameworks</h5>
        <div class="skills-container grid grid-cols-3 md:grid-cols-7 w-full lg:w-1/2">
            <div v-for="technology in backend" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>
            <div v-for="technology in frontend" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>
        </div>

        <h5 class="text-2xl font-bold, my-2 text-center">DevOps</h5>

        <div class="skills-container grid grid-cols-3 md:grid-cols-7 w-full lg:w-1/2">
            <div v-for="technology in devops" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>
        </div>
        <h5 class="text-2xl font-bold, my-2 text-center">Autres</h5>
        <div class="skills-container grid grid-cols-3 md:grid-cols-7 w-full lg:w-1/2">
            <div v-for="technology in mobile" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>
            <div v-for="technology in others" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>

            <div v-for="technology in database" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>

            <div v-for="technology in erp" class="flex flex-col items-center justify-around mt-4">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>
            <div v-for="technology in libraries" class="flex flex-col items-center justify-around">
                <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()" class="technology-img">
                <span>{{ technology.label }}</span>  
            </div>
        </div>


        
        <NextLink link="/contact" label="Alors, on garde contact ?" />
    </div>
</template>

<style scoped>
.ExperiencesView {
    padding-top: 8.5em;
    padding-right: 1.5em;
    padding-left: 1.5em;
    min-height: 100vh;
    max-width: 100vw;
}

@media screen and (min-width: 768px) {
    .ExperiencesView {
        padding-top: 5em;
    }
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
