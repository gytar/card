<script setup lang="ts">
import { type Experience } from "@/data/Experiences.ts";

const experiences: Array<Experience> = [
    {
        name: "oss-factory",
        label: "Développeur web à OSS Factory",
        mission: "Développeur web",
        company: "OSS Factory",
        place: "Clermont-Ferrand",
        dateStart: new Date(2022, 6, 1),
        dateEnd: new Date(2023, 8, 16),
        description: "- Développement de fonctionnalités dans Odoo\n- Documentation technique pour les utilisateurs\n- Veille informatique pour les nouvelles fonctionnalités et choix de technologies",
        technologies: [{name: "odoo", label: "Odoo", knowledge: 0.9}]

    }
]
</script>

<template>
    <span>Mes expriences</span>
</template>

<style scoped>

</style>