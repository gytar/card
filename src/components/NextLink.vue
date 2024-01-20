<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { NextLinkProps } from '@/models/ComponentProps';

const props = defineProps<NextLinkProps>();
</script>

<template>
    <div class="NextLink flex flex-col justify-center items-center mb-2">
        <span class="mt-5 mb-3 italic dark:text-neutral-300 text-neutral-600">{{ props.label }}</span>
        <RouterLink :to="props.link" class="next-link">
            <div class="circle-angle-down">
                <font-awesome-icon icon="angle-down" />
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.next-link:hover {
    background-color: transparent;
}

.circle-angle-down {
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

.circle-angle-down:hover {
    background-color: hsl(290, 60%, 60%);
    transform: translateY(-5px);
}
</style>