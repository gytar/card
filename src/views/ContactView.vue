<script setup lang="ts"></script>
<template>
    <div class="Contact flex flex-col items-center justify-center">
        <h3 class="text-5xl font-bold text-center mb-10">Contact</h3>
        <a href="mailto:perrotguillaume@protonmail.com" target="_blank" rel="noopener noreferrer nofollow" title="Par mail"
            class="text-6xl">
            <div class="contact-icon">
                <font-awesome-icon icon="envelope" />
            </div>
        </a>
        <p class="text-2xl mt-10 mb-5">Sur les réseaux</p>

        <div class="grid grid-cols-2 gap-4">
            <a href="https://github.com/gytar" title="Github de Guillaume Perrot (gytar)" target="_blank"
                rel="noopener noreferrer nofollow" class="text-6xl">
                <div class="contact-icon">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/guillaume-perrot-dev" title="LinkedIn de Guillaume Perrot" target="_blank"
                rel="noopener noreferrer nofollow" class="text-6xl">
                <div class="contact-icon">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </div>
            </a>
        </div>


    </div>
</template>
<style scoped>
.Contact {
    padding-top: 3em;
    min-width: 100vw;
    min-height: 100vh;
}

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