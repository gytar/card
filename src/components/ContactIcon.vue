<script setup lang="ts">
import type { ContactIcon } from '@/models/ComponentProps'

const props = defineProps<ContactIcon>();
</script>
<template>
    <a :href="props.href" target="_blank" rel="noopener noreferrer nofollow" :title="props.title"
            class="text-6xl" :aria-label="props.title">
            <div class="contact-icon">
                <font-awesome-icon :icon="props.icon" />
            </div>
        </a>
</template>

<style scoped>
.contact-icon {
    border: 3px solid hsl(260, 60%, 60%);
    padding: .1em;
    border-radius: 50%;
    text-align: center;
    width: 1.5em;
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;
}

.contact-icon:hover {
    border-color: hsl(290, 60%, 60%);
    color: hsl(290, 60%, 60%);
}
a:hover {
    background: transparent;
}
</style>