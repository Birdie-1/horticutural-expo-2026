import { createContext, useState, useEffect, type ReactNode } from 'react';
import type { Language, Translations } from '@/types';
import { th } from './th';
import { en } from './en';
import { zh } from './zh';

const translations: Record<Language, Translations> = { th, en, zh };

interface LanguageContextType {
  t: Translations;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  t: th,
  lang: 'th',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('expo-lang') as Language | null;
    if (stored && ['th', 'en', 'zh'].includes(stored)) return stored;
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'zh') return 'zh';
    if (browserLang === 'en') return 'en';
    return 'th';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('expo-lang', newLang);
    document.documentElement.lang = newLang === 'zh' ? 'zh-CN' : newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  }, [lang]);

  return (
    <LanguageContext value={{ t: translations[lang], lang, setLang }}>
      {children}
    </LanguageContext>
  );
}
