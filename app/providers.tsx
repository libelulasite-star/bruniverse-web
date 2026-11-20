"use client";

import type { ReactNode } from "react";
import NextLink from "next/link";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { themes, defaultThemeSlug } from "../src/astryx-themes";

// Tema BRUNIVERSE (themes/bruniverse). La marca vive en "noche de estadio":
// modo oscuro fijo. Cambia a mode="system" para seguir la preferencia del visitante.
export function Providers({ children }: { children: ReactNode }) {
  return (
    <Theme theme={themes[defaultThemeSlug]} mode="dark">
      <LinkProvider component={NextLink}>{children}</LinkProvider>
    </Theme>
  );
}
