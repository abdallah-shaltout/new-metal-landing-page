<template>
    <header class="h-20 flex-center">
        <div class="container">
            <nav class="flex-between md:flex-row-reverse ltr:flex-row-reverse">
                <div
                    class="fc gap-2 md:hidden ltr:flex-row-reverse ltr:sm:flex-row"
                >
                    <Transition name="slide-up" mode="out-in">
                        <NuxtLink
                            :to="switchLocalePath('en')"
                            v-if="locale === 'ar'"
                        >
                            <button class="lang-btn">
                                <span>English</span>
                            </button>
                        </NuxtLink>
                        <NuxtLink
                            :to="switchLocalePath('ar')"
                            v-else-if="locale === 'en'"
                        >
                            <button class="lang-btn">
                                <span class="font-bold font-ubuntu text-base"
                                    >عربي</span
                                >
                            </button>
                        </NuxtLink>
                    </Transition>
                </div>
                <ul class="fc gap-4 sm:hidden">
                    <li v-for="(item, idx) in links" :key="idx">
                        <a :href="item.route" class="primary-link">{{
                            item.label
                        }}</a>
                    </li>
                </ul>

                <NuxtLink
                    :to="
                        $localePath({
                            name: 'index',
                        })
                    "
                >
                    <NuxtImg
                        src="/logo.png"
                        alt="logo"
                        loading="lazy"
                        class="w-36 h-auto"
                    />
                </NuxtLink>

                <LazyAppMenuBtn
                    class="hidden sm:flex !w-11 !h-11 z-12"
                    :class="{ active: show_menu }"
                    @click="show_menu = !show_menu"
                />
                <div
                    class="fixed right-0 top-0 h-full w-full z-10 hidden sm:block translate-x-full t-trans"
                    :class="{ '!translate-x-0': show_menu }"
                >
                    <span class="bg-blur bg-blur-light"></span>
                    <ul class="abs-center flex-center flex-col gap-6">
                        <li v-for="(item, idx) in links" :key="idx">
                            <a
                                class="text-xl trans hover:text-primary text-slate-200 font-bold flex-center"
                                @click="show_menu = false"
                                :href="item.route"
                                >{{ item.label }}</a
                            >
                        </li>
                        <li class="w-full">
                            <Transition name="slide-up" mode="out-in">
                                <NuxtLink
                                    class="w-full flex"
                                    :to="switchLocalePath('en')"
                                    v-if="locale === 'ar'"
                                >
                                    <button
                                        class="lang-btn w-full"
                                        @click="show_menu = false"
                                    >
                                        <span>English</span>
                                    </button>
                                </NuxtLink>
                                <NuxtLink
                                    class="w-full flex"
                                    :to="switchLocalePath('ar')"
                                    v-else-if="locale === 'en'"
                                >
                                    <button
                                        class="lang-btn w-full"
                                        @click="show_menu = false"
                                    >
                                        <span
                                            class="font-bold font-ubuntu text-base"
                                            >عربي</span
                                        >
                                    </button>
                                </NuxtLink>
                            </Transition>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">
const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const links = computed<
    {
        label: string
        route: string
    }[]
>(() => [
    {
        label: t('header.home'),
        route: '#',
    },
    {
        label: t('header.about_us'),
        route: '#about',
    },
    {
        label: t('header.projects'),
        route: '#projects',
    },
    {
        label: t('header.whyus'),
        route: '#whyus',
    },
])
const show_menu = ref<boolean>(false)
</script>
