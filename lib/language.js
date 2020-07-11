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

const setLanguageInLocalStorage = (language) => {
  const res = window.localStorage.setItem('language', language);
  return res;
};

const findLanguageInLocalStorage = () => {
  const saved = window.localStorage.getItem('language');
  return saved;
};

const findLanguagePtInBrowser = () => {
  const languages = get(window, 'navigator.languages', []);
  let result = false;
  if (!result) result = languages.includes('pt');
  if (!result) result = languages.includes('pt-BR');
  return result;
};
