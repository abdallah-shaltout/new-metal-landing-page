<template>
    <section class="flex-center">
        <div class="px-4 flex-center flex-col">
            <div class="flex-between w-full">
                <h2 class="text-3xl font-bold text-darker section-title-start">
                    {{ $t('projects.heading') }}
                </h2>
                <NuxtLink
                    :to="
                        $localePath({
                            name: 'projects',
                        })
                    "
                >
                    <button class="whitespace-nowrap btn-primary btn-with-icon">
                        <span>{{ $t('projects.view_all') }}</span>
                        <span
                            class="rounded-full w-6 h-6 bg-white flex-center text-darker trans"
                        >
                            <NuxtIcon
                                name="arrow-top"
                                class="text-sm rtl:rotate-[270deg]"
                            />
                        </span>
                    </button>
                </NuxtLink>
            </div>

            <vue3-carousel v-bind="config" class="mt-14 effect-slider-1">
                <vue3-slide v-for="item in projectsJson" :key="item.id">
                    <div
                        class="w-full relative rounded-xl overflow-hidden group"
                        style="aspect-ratio: 4/3"
                    >
                        <NuxtImg
                            :src="`/projects/${item.image}`"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </vue3-slide>

                <template #addons>
                    <vue3-pagination />
                    <vue3-navigation />
                </template>
            </vue3-carousel>
        </div>
    </section>
</template>

<script lang="ts" setup>
import projectsJson from '@/assets/data/projects.json'

const config = {
    itemsToShow: 1,
    transition: 500,
    itemsToScroll: 1,
    snapAlign: 'center',
    autoplay: 2000,
    wrapAround: true,

    breakpoints: {
        768: {
            itemsToShow: 3,
        },
        1280: {
            itemsToShow: 3,
        },
    },
}
</script>
