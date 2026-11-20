"use client";

import type { CSSProperties } from "react";
import { VStack, Layout, LayoutContent } from "@astryxdesign/core/Layout";
import { Grid } from "@astryxdesign/core/Grid";
import { Card } from "@astryxdesign/core/Card";
import { Section } from "@astryxdesign/core/Section";
import { Overlay } from "@astryxdesign/core/Overlay";
import { Text, Heading } from "@astryxdesign/core/Text";
import { Button } from "@astryxdesign/core/Button";
import { useMediaQuery } from "@astryxdesign/core/hooks";
import { hero } from "./content";
import { useLang } from "./lang";

// Prefijo cuando el sitio se sirve bajo una subruta (p. ej. GitHub Pages).
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// El vídeo ocupa la primera pantalla (menos la barra) y recorta para llenar.
const media: CSSProperties = {
  display: "block",
  width: "100%",
  height: "calc(100dvh - 4rem)",
  minHeight: "38rem",
  objectFit: "cover",
};

export function Hero() {
  const { t } = useLang();
  // Título grande en escritorio, contenido en tablet y móvil.
  const isWide = useMediaQuery("(min-width: 1100px)");
  const isMid = useMediaQuery("(min-width: 640px)");
  // Quien pide menos movimiento ve la imagen fija del estadio.
  const prefersStill = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <>
      <Overlay
        scrim="dark"
        position="fill"
        align="center"
        content={
          <VStack width="100%" hAlign="center">
            <VStack gap={6} hAlign="center" width="100%" maxWidth={1100}>
              <VStack gap={3} hAlign="center" width="100%">
                <Text
                  type="label"
                  color="accent"
                  weight="semibold"
                  justify="center"
                  textWrap="balance"
                  display="block"
                >
                  {t(hero.kicker)}
                </Text>
                <Heading
                  id="inicio"
                  level={1}
                  type={
                    isWide ? "display-1" : isMid ? "display-2" : "display-3"
                  }
                  justify="center"
                  textWrap="balance"
                >
                  {t(hero.title)}
                </Heading>
                <VStack maxWidth={720}>
                  <Text
                    type="large"
                    justify="center"
                    textWrap="balance"
                    display="block"
                  >
                    {t(hero.sub)}
                  </Text>
                </VStack>
              </VStack>
              <Button
                label={t(hero.cta)}
                variant="primary"
                size="lg"
                href="#sou"
              />
            </VStack>
          </VStack>
        }
      >
        {prefersStill ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${base}/media/hero-poster.jpg`}
            alt={t(hero.videoLabel)}
            style={media}
          />
        ) : (
          <video
            src={`${base}/media/hero.mp4`}
            poster={`${base}/media/hero-poster.jpg`}
            aria-label={t(hero.videoLabel)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={media}
          />
        )}
      </Overlay>
      <Section variant="transparent" padding={0}>
        <Layout
          height="auto"
          padding={6}
          contentWidth={1240}
          content={
            <LayoutContent>
              <Grid columns={{ minWidth: 220, max: 3 }} gap={4}>
                {hero.facts.map((fact) => (
                  <Card key={fact.value} padding={5}>
                    <VStack gap={2}>
                      <Heading level={2} type="display-3" color="accent">
                        {fact.value}
                      </Heading>
                      <Text type="body" color="secondary">
                        {t(fact.text)}
                      </Text>
                    </VStack>
                  </Card>
                ))}
              </Grid>
            </LayoutContent>
          }
        />
      </Section>
    </>
  );
}
