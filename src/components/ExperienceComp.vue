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
        <a href="#" class=" text-white flex items-center justify-between p-2 ExperienceSmallWidget"
            @click="modal.isOpen = !modal.isOpen">
            <div>
                <h3 class="text-2xl">{{ $props.experience.mission }}</h3>
                <span class="text-xl">{{ props.experience.company }}</span>
            </div>
            <span>{{ props.experience.dateStart.toLocaleDateString() }} - {{ props.experience.dateEnd.toLocaleDateString()
            }}</span>
        </a>
        <div :class="(modal.isOpen) ? 'ExperienceModalVisible ExperienceModal' : 'ExperienceModalHidden ExperienceModal'">
            <div class="flex items-top justify-between">
                <span class="text-2xl font-bold">{{ props.experience.label }}</span>
                <a href="#" @click="modal.isOpen = !modal.isOpen" class="text-white text-2xl"><font-awesome-icon
                        icon="close" /></a>
            </div>
            <div class="flex items-center flex-col md:flex-row justify-between  mt-5">
                <div class="description">
                    <span class="text-xl italic">Description</span>
                    <div v-html="props.experience.description" />
                </div>
                <div class="location border-2 md:w-1/3 text-right border-white p-3 rounded-sm">
                    <p><span class="me-2">{{ props.experience.company }}</span> <font-awesome-icon icon="building" /></p>
                    <p><span class="me-2">{{ props.experience.place }}</span> <font-awesome-icon icon="location-dot" /></p>
                </div>
            </div>
            <div class="mt-5 technical-skill">
                <span class="text-xl italic">Stack technique</span>
                <div class="grid grid-cols-4">
                    <div v-for="technology in props.experience.technologies">
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
    min-height: 200vh;
    /* transform: translate(-50%, -30%); */
    padding: 1em;
    background: hsl(290, 60%, 40%);
}

.ExperienceModalHidden {
    display: none;
}
</style>