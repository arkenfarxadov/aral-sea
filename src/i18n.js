import en from './trans/en.json'
import ru from './trans/ru.json'
import ja from './trans/ja.json'
import fr from './trans/fr.json'
import is from './trans/is.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    en: {
        translation: en,
    },
    ru:{
        translation:ru,
    },
    ja:{
        translation:ja,
    },
    fr:{
        translation:fr,
    },
    is:{
        translation:is,
    },
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng:'ru'
})

export default i18n;