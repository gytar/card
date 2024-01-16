<script setup lang="ts">
import { reactive } from 'vue';
import type { ExperienceCompProps } from '@/models/ComponentProps';

const props = defineProps<ExperienceCompProps>();
const modal = reactive({
    isOpen: false,
})


</script>
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="Experience w-full">
        <a href="#" class="flex flex-col md:flex-row md:items-center justify-between p-2 ExperienceSmallWidget"
            @click="modal.isOpen = !modal.isOpen">
            <div>
                <h3 class="text-2xl">{{ $props.experience.mission }}</h3>
                <span class="text-xl">{{ props.experience.company }}</span>
            </div>
            <span>{{ props.experience.dateStart.toLocaleDateString('default', { month: '2-digit', year: '2-digit' }) }} - {{
                props.experience.dateEnd.toLocaleDateString('default', { month: '2-digit', year: '2-digit' }) }}</span>
        </a>
        <div :class="(modal.isOpen) ? 'ExperienceModalVisible ExperienceModal' : 'ExperienceModalHidden ExperienceModal'">
            <div class="flex items-top justify-between w-11/12">
                <div>
                    <p class="text-2xl font-bold">{{ props.experience.label }}</p>
                    <span>{{ props.experience.dateStart.toLocaleString('default', {
                        day: '2-digit', month: 'long', year:
                            'numeric'
                    }) }} - {{ props.experience.dateEnd.toLocaleString('default', {
    day: '2-digit', month:
        'long', year: 'numeric'
}) }}</span>

                </div>
                <a href="#" @click="modal.isOpen = !modal.isOpen" class="text-white text-2xl"><font-awesome-icon
                        icon="close" /></a>
            </div>
            <div class="flex items-center flex-col xl:flex-row justify-between  mt-5 w-11/12">
                <div class="description">
                    <span class="text-xl italic font-bold">Description de mes missions</span>
                    <div v-html="props.experience.missionDescription" />
                </div>
                <div class="border-2 border-white rounded-sm md:w-3/4 xl:w-1/3">
                    <div class=" text-right flex flex-col md:flex-row justify-between items-center p-3">
                        <a :href="props.experience.companyWebsite.toString()" title="Lien vers l'entreprise"
                            class="company-link" target="_blank" rel="noopener noreferrer nofollow">
                            <img :src="props.experience.companyImageUrl.toString()"
                                :alt="props.experience.company + ' logo'" class="company-img">
                        </a>
                        <div>
                            <p><span class="me-2">{{ props.experience.company }}</span> <font-awesome-icon
                                    icon="building" />
                            </p>
                            <p><span class="me-2">{{ props.experience.place }}</span> <font-awesome-icon
                                    icon="location-dot" />
                            </p>
                        </div>
                    </div>
                    <div class="company description p-3">
                        {{ props.experience.companyDescription }}
                    </div>
                </div>
            </div>
            <div class="mt-5 technical-skill w-11/12">
                <span class="text-xl italic font-bold">Stack technique</span>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div v-for="technology in props.experience.technologies"
                        class="flex flex-col items-center justify-center">
                        <img :src="technology.imageUrl.toString()" :alt="technology.label.toString()"
                            class="technology-img">
                        {{ technology.label }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ExperienceSmallWidget {
    border: 3px solid hsl(260, 60%, 60%);
    border-radius: 3px;
    transition: all .2s ease-in-out;
}

@media (prefers-color-scheme: light) {
    .ExperienceSmallWidget:hover {
        background: hsl(260, 60%, 80%);
    }
}

@media (prefers-color-scheme: dark) {
    .ExperienceSmallWidget:hover {
        background: hsl(260, 60%, 30%);
    }
}

.ExperienceModal {
    transition: all .5s ease-in-out;
}

.ExperienceModalVisible {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100%;
    /* transform: translate(-50%, -30%); */
    padding: 1em;
    background: hsl(290, 60%, 40%);
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    color: white;
}

@media screen and (min-width: 1024px) {
    .ExperienceModalVisible {
        justify-content: space-around;
    }
}

.ExperienceModalHidden {
    display: none;
}

.technology-img {
    max-width: 2em;
}

.company-link {
    padding: 5px;
    background: transparent;
    transition: all .2s ease-in-out;
    border-radius: 3px;
}

.company-link:hover {
    background: hsl(260, 60%, 80%);
}

.company-img {
    max-width: 200px;
    max-height: 100px;
}</style>