"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang, L } from "./content";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "pt",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

/** Devuelve el idioma activo, su setter y `t()` para leer un texto bilingüe. */
export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  return { lang, setLang, t: (text: L) => text[lang] };
}
