<script setup lang="ts">
import type { ExperienceCompProps } from '@/models/ComponentProps';

const props = defineProps<ExperienceCompProps>()

</script>
<template>
    <div class="Experience w-full ">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="text-2xl">{{ $props.experience.mission }}</h3>
                <span class="text-xl">{{  props.experience.company  }}</span>
            </div>
            <span>{{ props.experience.dateStart.toLocaleDateString() }} - {{ props.experience.dateEnd.toLocaleDateString() }}</span>
        </div>
    </div>
</template>
<style scoped>

.Experience {
    background: hsl(260, 60%, 60%);
    border-radius: 3px;
}
</style>