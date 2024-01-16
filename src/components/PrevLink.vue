<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{link: string}>();
</script>

<template>
    <div class="PrevLink flex flex-col justify-center items-center">
        <RouterLink :to="props.link" class="prev-link">
            <div class="circle-angle-left">
                <font-awesome-icon icon="angle-left" />
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>

.PrevLink {
    position: absolute;
    top: 5em;
    left: 10px;
}
.prev-link:hover {
    background-color: transparent;
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

.circle-angle-left:hover {
    background-color: hsl(290, 60%, 60%);
    transform: translateY(-5px);
}
</style>