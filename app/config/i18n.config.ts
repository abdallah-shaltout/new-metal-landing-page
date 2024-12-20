import ar from '~/locales/ar.json'
import en from '~/locales/en.json'
export default defineI18nConfig(() => ({
    fallbackLocale: 'ar',
    locale: 'ar',
    messages: {
        en: en,
        ar: ar,
    },
}))
