import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Globe2 } from 'lucide-react'

type Language = 'vi' | 'en'
const storageKey = 'dwan-language'
const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)

function initialLanguage(): Language {
  try {
    return localStorage.getItem(storageKey) === 'en' ? 'en' : 'vi'
  } catch {
    return 'vi'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(storageKey, language)
    } catch {
      // The selected language still works for the current page.
    }
  }, [language])

  useEffect(() => {
    const syncLanguage = (event: StorageEvent) => {
      if (event.key === storageKey) setLanguage(event.newValue === 'en' ? 'en' : 'vi')
    }
    window.addEventListener('storage', syncLanguage)
    window.addEventListener('pageshow', syncOnReturn)
    function syncOnReturn(event: PageTransitionEvent) {
      if (event.persisted) setLanguage(initialLanguage())
    }
    return () => {
      window.removeEventListener('storage', syncLanguage)
      window.removeEventListener('pageshow', syncOnReturn)
    }
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('LanguageProvider is required')
  return { ...context, t: (vi: string, en: string) => context.language === 'en' ? en : vi }
}

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  return <button className="language-toggle" type="button"
    aria-label={t('Chuyển sang tiếng Anh', 'Switch to Vietnamese')}
    onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}>
    <Globe2 size={15} aria-hidden="true" />
    <span aria-hidden="true" data-current={language === 'vi'}>VI</span>
    <span aria-hidden="true" className="language-divider">/</span>
    <span aria-hidden="true" data-current={language === 'en'}>EN</span>
  </button>
}
