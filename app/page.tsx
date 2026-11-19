import type { CSSProperties } from "react";
import { Center } from "@astryxdesign/core/Center";
import { VStack } from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { Button } from "@astryxdesign/core/Button";

const pageStyle: CSSProperties = {
  minHeight: "100dvh",
  backgroundColor: "var(--color-background-body)",
};

export default function Home() {
  return (
    <Center axis="both" padding={6} style={pageStyle}>
      <VStack gap={3} hAlign="center">
        <Heading level={1}>BRUNIVERSE Consulting</Heading>
        <Text type="body" color="secondary">
          Sitio en construcción con el sistema de diseño Astryx.
        </Text>
        <Button label="Ver página de prueba" variant="primary" href="/astryx-prueba" />
      </VStack>
    </Center>
  );
}
