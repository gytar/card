<script setup lang="ts">
import PrevLink from '@/components/PrevLink.vue';
import ContactIcon from '@/components/ContactIcon.vue';
</script>
<template>
    <PrevLink link="/experiences" />
    <div class="Contact flex flex-col items-center justify-center">
        <h3 class="text-5xl font-bold text-center mb-10">Contact</h3>
        <ContactIcon href="mailto:perrotguillaume@protonmail.com" title="Envoyer un mail via votre client mail" icon="envelope" />

        <p class="text-2xl mt-10 mb-5">Sur les réseaux</p>
        <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col justify-center items-center max-w-28">
                <ContactIcon href="https://github.com/gytar" title="GitHub de Guillaume Perrot" icon="fa-brands fa-github" />
                <span class="text-slate-200 italic text-xs mt-2 text-center">Vous trouverez mes projets perso ici !</span>
            </div>
            <ContactIcon href="https://www.linkedin.com/in/guillaume-perrot-dev" title="LinkedIn de Guillaume Perrot" icon="fa-brands fa-linkedin" />
        </div>


    </div>
</template>
<style scoped>
.Contact {
    padding-top: 3em;
    min-width: 100vw;
    min-height: 100vh;
}
</style>
