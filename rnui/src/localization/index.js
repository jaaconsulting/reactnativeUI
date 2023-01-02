import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en/common.json';
import pt from './pt/common.json';
import cv from './cv/common.json';

i18n.use(initReactI18next).init({
     compatibilityJSON:'v3',
     lng: 'cv',
     fallbackLng: 'cv',
     resources: {
        en: en,
        pt: pt,
        cv: cv
     },
     interpolation: {
        escapeValue: false
     }
});

export default i18n;