import en from '~/localization/en.json'
import ge from '~/localization/ge.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ge',
    messages: {
        en,
        ge
    },
    fallbackLocale:'ge',

}))
