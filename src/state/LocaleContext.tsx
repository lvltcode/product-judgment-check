import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '../types/locale'

const STORAGE_KEY = 'ai-era-product-judgment-check-locale'

const isLocale = (value: string): value is Locale => {
  return SUPPORTED_LOCALES.includes(value as Locale)
}

const loadInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw || !isLocale(raw)) {
    return DEFAULT_LOCALE
  }

  return raw
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (nextLocale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => loadInitialLocale())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<LocaleContextValue>(() => ({ locale, setLocale }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used inside LocaleProvider')
  }

  return context
}
