"use client";

import type { ReactNode } from "react";
import { AppShell } from "@astryxdesign/core/AppShell";
import { TopNav, TopNavHeading, TopNavItem } from "@astryxdesign/core/TopNav";
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@astryxdesign/core/SegmentedControl";
import { header, nav, type Lang } from "./content";
import { useLang } from "./lang";

// Marco del sitio: barra superior fija, cajón de navegación automático en móvil.
export function SiteShell({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useLang();
  return (
    <AppShell
      height="auto"
      variant="wash"
      topNav={
        <TopNav
          label={t(header.navLabel)}
          heading={
            <TopNavHeading
              heading={header.brand}
              subheading={t(header.tagline)}
              headingHref="#inicio"
            />
          }
          centerContent={
            <>
              {nav.map((item) => (
                <TopNavItem
                  key={item.href}
                  label={t(item.label)}
                  href={item.href}
                />
              ))}
            </>
          }
          endContent={
            <>
              <SegmentedControl
                label={t(header.langLabel)}
                size="sm"
                value={lang}
                onChange={(v) => setLang(v as Lang)}
              >
                <SegmentedControlItem value="pt" label="PT" />
                <SegmentedControlItem value="en" label="EN" />
              </SegmentedControl>
            </>
          }
        />
      }
    >
      {children}
    </AppShell>
  );
}
