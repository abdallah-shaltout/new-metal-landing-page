<template>
    <main>
        <AppHeader />
        <NuxtPage />
        <AppFooter />
    </main>
</template>
<script setup lang="ts">
const head = useLocaleHead()

useHead(() => ({
    htmlAttrs: {
        dir: head.value.htmlAttrs?.dir,
        lang: head.value.htmlAttrs?.lang,
    },
    link: [...(head.value.link || [])],
    meta: [...(head.value.meta || [])],
}))
</script>
