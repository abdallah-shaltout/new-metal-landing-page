<template>
    <section class="py-14 w-full bg-slate-50">
        <div class="container !overflow-x-hidden">
            <h1
                class="text-3xl font-bold text-darker section-title w-fit mx-auto mb-16"
            >
                معرض اعمالنا
            </h1>
            <ul class="w-full grid grid-cols-12 gap-5">
                <li
                    v-motion-pop-bottom
                    v-for="(item, idx) in projectsJson"
                    :key="item.id"
                    :class="`col-span-${item.cols} row-span-${item.rows} md:col-span-${item['md-cols']} md:row-span-${item['md-rows']} sm:col-span-${item['sm-cols']} sm:row-span-${item['sm-rows']}`"
                >
                    <div
                        class="w-full h-full rounded-lg shadow overflow-hidden"
                    >
                        <NuxtImg
                            loading="lazy"
                            :src="`/projects/${item.image}`"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>
import projectsJson from '@/assets/data/projects.json'
</script>

<style>
body {
    @apply bg-slate-50;
}
</style>
