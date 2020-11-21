// Lodash
import get from 'lodash/get';

export const findLanguage = () => {
  let language = 'en';
  const saved = findLanguageInLocalStorage();
  if (saved) {
    language = saved;
  } else {
    const isPtBr = findLanguagePtInBrowser();
    if (isPtBr) language = 'pt';
  }
  return language;
};

export const setLanguageInLocalStorage = (language) => {
  window.localStorage.setItem('language', language);
};

const findLanguageInLocalStorage = () => {
  let saved = null;
  if (typeof window !== 'undefined') {
    saved = window.localStorage.getItem('language');
  }
  return saved;
};

const findLanguagePtInBrowser = () => {
  let result = false;
  if (typeof window !== 'undefined') {
    const languages = get(window, 'navigator.languages', []);
    if (!result) result = languages.includes('pt');
    if (!result) result = languages.includes('pt-BR');
  }
  return result;
};
