import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'sr', name: 'Srpski' },
  { code: 'es', name: 'Español' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    
    // Set dir attribute for Arabic layout
    const isRTL = languages.find(l => l.code === lng)?.dir === 'rtl';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-root-dark hover:bg-root-dark/5 rounded-lg transition-colors"
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-root-border overflow-hidden z-50">
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                i18n.language === lng.code
                  ? 'bg-root-orange/10 text-root-orange font-semibold'
                  : 'text-root-dark hover:bg-root-bg'
              }`}
            >
              {lng.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
