<template>
    <section
        class="p-10 relative -z-2 flex-center flex-col bg-darker rounded-xl text-light"
    >
        <h2 class="font-bold text-3xl w-fit mx-auto section-title mb-2">
            {{ $t('analyze.heading') }}
        </h2>
        <p class="mt-4 text-center text-light/70">
            {{ $t('analyze.description') }}
        </p>

        <ul
            class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 w-full"
        >
            <li
                v-for="(item, idx) in cards"
                :key="idx"
                class="p-5 overflow-hidden main-border relative flex-center flex-col rounded-xl"
            >
                <span class="bg-blur"></span>

                <NuxtIcon
                    :name="item.icon"
                    class="text-6xl lg:text-4xl font-bold"
                />
                <h4 class="font-bold text-2xl lg:text-lg">{{ item.title }}</h4>
                <span class="font-bold text-4xl lg:text-2xl my-3">
                    <NumberFlow
                        :trend="-1"
                        :value="item.value"
                        :duration="3000"
                        :respectMotionPreference="false"
                        :will-change="false"
                    />
                </span>
                <span class="text-center text-sm font-medium">
                    {{ item.label }}
                </span>
            </li>
        </ul>
    </section>
</template>

<script lang="ts" setup>
const { t } = useI18n()
import NumberFlow from '@number-flow/vue'

const cardsNumbers = reactive({
    clients: 0,
    projects: 0,
    places: 0,
})

const cards = computed(() => [
    {
        label: t('analyze.clients.label'),
        value: cardsNumbers.clients,
        icon: 'avatar',
        title: t('analyze.clients.title'),
    },
    {
        label: t('analyze.projects.label'),
        value: cardsNumbers.projects,
        icon: 'bulding',
        title: t('analyze.projects.title'),
    },
    {
        label: t('analyze.places.label'),
        value: cardsNumbers.places,
        icon: 'place',
        title: t('analyze.places.title'),
    },
])

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0]?.isIntersecting) {
                cardsNumbers.clients =
                    Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
                cardsNumbers.projects =
                    Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
                cardsNumbers.places =
                    Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000

                observer.disconnect()
            }
        },
        { threshold: 0.4 }
    )
    const target = document.getElementById('analyze')
    if (target) observer.observe(target)
})
</script>
