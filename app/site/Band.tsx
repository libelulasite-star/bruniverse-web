"use client";

import type { CSSProperties, ReactNode } from "react";
import { VStack, Layout, LayoutContent } from "@astryxdesign/core/Layout";
import { Section } from "@astryxdesign/core/Section";
import { Text, Heading } from "@astryxdesign/core/Text";

// Deja sitio a la barra fija cuando se llega por un enlace de ancla.
export const anchor: CSSProperties = { scrollMarginTop: "6rem" };

/** Franja de la página: fondo alterno, columna centrada de 1240 y ritmo vertical común. */
export function Band({
  tone = "plain",
  style,
  children,
}: {
  tone?: "plain" | "muted";
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <Section
      variant={tone === "muted" ? "muted" : "transparent"}
      padding={0}
      paddingBlock={8}
      style={style}
    >
      <Layout
        height="auto"
        padding={6}
        contentWidth={1240}
        content={
          <LayoutContent>
            <VStack gap={8}>{children}</VStack>
          </LayoutContent>
        }
      />
    </Section>
  );
}

/** Cabecera de sección: etiqueta ámbar, título y entradilla, centrados. */
export function BandTitle({
  id,
  tag,
  title,
  lede,
}: {
  id: string;
  tag?: string;
  title?: string;
  lede?: string;
}) {
  return (
    <VStack gap={3} hAlign="center" width="100%">
      {tag && (
        <Text
          id={title ? undefined : id}
          type="label"
          color="accent"
          weight="semibold"
          justify="center"
          display="block"
        >
          {tag}
        </Text>
      )}
      {title && (
        <Heading
          id={id}
          level={2}
          type="display-3"
          justify="center"
          textWrap="balance"
          style={anchor}
        >
          {title}
        </Heading>
      )}
      {lede && (
        <VStack maxWidth={680}>
          <Text
            type="large"
            color="secondary"
            justify="center"
            textWrap="balance"
            display="block"
          >
            {lede}
          </Text>
        </VStack>
      )}
    </VStack>
  );
}
