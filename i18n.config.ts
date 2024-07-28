import en from '~/localization/en.json'
import ge from '~/localization/ge.json'
import {useGetLocaleValue} from "~/composables/useGetLocaleValue";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: useGetLocaleValue(),
    messages: {
        en,
        ge
    },
    fallbackLocale:'ge',

}))
