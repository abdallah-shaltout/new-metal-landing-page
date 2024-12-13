<template>
    <footer class="py-4 text-dark main-border-t flex-center mt-4">
        <div class="container">
            <div class="fs gap-4 sm:flex-col">
                <div class="flex-2 sm:w-full">
                    <h3
                        class="text-3xl font-bold section-title-start mb-6 text-darker"
                    >
                        {{ $t('footer.contact_us') }}
                    </h3>
                    <p class="mb-8">
                        {{ $t('footer.description') }}
                    </p>
                    <p class="fc gap-2">
                        <NuxtIcon name="phone" class="text-lg" />
                        <a
                            href="tel:{{appSettings.phone}}"
                            style="direction: ltr"
                            >+20 111 111 1111</a
                        >
                    </p>
                    <p class="fc gap-2">
                        <NuxtIcon
                            name="whatsapp"
                            class="text-green-500 text-xl"
                        />
                        <a
                            href="tel:{{appSettings.phone}}"
                            style="direction: ltr"
                            >+20 111 111 1111</a
                        >
                    </p>
                </div>
                <div class="flex-3 fs gap-4 sm:flex-col">
                    <div class="flex-1 sm:w-full">
                        <h3
                            class="text-2xl font-bold text-darker section-title-start mb-6"
                        >
                            {{ $t('footer.address.heading') }}
                        </h3>
                        <a
                            href="https://maps.app.goo.gl/4CNaBeGBxeHMJ3w66"
                            target="_blank"
                        >
                            <p
                                class="text-sm leading-6 fs gap-1 primary-link mt-6"
                            >
                                <NuxtIcon
                                    name="place"
                                    class="text-lg !inline"
                                />
                                {{ $t('footer.address.text') }}
                            </p>
                        </a>
                    </div>
                    <ul class="flex-1 fl-2 sm:w-full">
                        <li class="mb-6">
                            <h3
                                class="text-2xl font-bold text-darker section-title-start"
                            >
                                {{ $t('footer.useful_links.heading') }}
                            </h3>
                        </li>
                        <li v-for="(item, idx) in links" :key="idx">
                            <a href="" class="primary-link">
                                {{ $t(`footer.useful_links.${item.label}`) }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="main-border my-4" />
            <div class="flex-between">
                <p>
                    <span class="uppercase sm:text-sm">{{
                        $t('footer.copyright', {
                            year: new Date().getFullYear(),
                        })
                    }}</span>
                </p>

                <ul class="fc gap-2.5">
                    <li v-for="(item, idx) in socialMedia" :key="idx">
                        <a
                            target="_blank"
                            :href="item.link"
                            class="social-media-icon"
                        >
                            <NuxtIcon
                                :name="item.iconName"
                                :class="item.iconClass"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import socialMedia from '~/assets/data/socialMedia.json'

const links = markRaw([
    {
        label: 'sitemap',
        route: '#',
    },
    {
        label: 'cookies',
        route: '#',
    },
    {
        label: 'privacy_notice',
        route: '#',
    },
    {
        label: 'modern_slavery_statement',
        route: '#',
    },
    {
        label: 'accessibility',
        route: '#',
    },
])
</script>
