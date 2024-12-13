// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    runtimeConfig: {
        public: {
            motion: {
                directives: {
                    'pop-bottom': {
                        initial: {
                            opacity: 0,
                            y: 100,
                        },
                        visibleOnce: {
                            opacity: 1,
                            y: 0,
                        },
                    },
                },
            },
        },
    },
    devServer: {
        port: 5173,
    },
    future: {
        compatibilityVersion: 4,
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'ar',
                dir: 'rtl',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        '~/assets/css/curved-card.css',
        '~/assets/fonts/stylesheet.css',
        '~/assets/css/master.css',
        '~/assets/css/custom.css',
        '~/assets/css/animate.css',
    ],
    carousel: {
        prefix: 'vue3',
    },
    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        locales: [
            {
                code: 'ar',
                language: 'ar-EG',
                dir: 'rtl',
                iso: 'ar-EG',
            },
            {
                code: 'en',
                language: 'en-US',
                dir: 'ltr',
                iso: 'en-US',
            },
        ],
        baseUrl: 'http://localhost',

        strategy: 'prefix_except_default',
        defaultLocale: 'ar',

        vueI18n: './app/config/i18n.config.ts',
    },
    image: {
        static: {
            baseURL: '/public',
        },
    },
    modules: [
        '@nuxt/image',
        'nuxt-icons',
        'vue3-carousel-nuxt',
        '@nuxtjs/i18n',
        '@vueuse/motion/nuxt',
    ],
})
