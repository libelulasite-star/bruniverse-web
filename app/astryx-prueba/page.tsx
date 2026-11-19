"use client";

import { useState, type CSSProperties } from "react";
import { Center } from "@astryxdesign/core/Center";
import { Card } from "@astryxdesign/core/Card";
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  VStack,
  HStack,
} from "@astryxdesign/core/Layout";
import { Heading, Text } from "@astryxdesign/core/Text";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Switch } from "@astryxdesign/core/Switch";
import { Button } from "@astryxdesign/core/Button";

// Página independiente: pinta su propio fondo con el token del tema.
const pageStyle: CSSProperties = {
  minHeight: "100dvh",
  backgroundColor: "var(--color-background-body)",
};

export default function AstryxPrueba() {
  const [nombre, setNombre] = useState("");
  const [novedades, setNovedades] = useState(true);
  const [enviado, setEnviado] = useState(false);

  const enviar = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setEnviado(true);
  };

  return (
    <Center axis="both" padding={6} style={pageStyle}>
      <Card width="100%" maxWidth={420} elevation="low">
        <Layout
          header={
            <LayoutHeader hasDivider>
              <VStack gap={1}>
                <Heading level={2}>Prueba de Astryx</Heading>
                <Text type="body" color="secondary" size="sm">
                  Card, TextInput, Switch y Button con el tema neutral.
                </Text>
              </VStack>
            </LayoutHeader>
          }
          content={
            <LayoutContent>
              <VStack gap={4}>
                <TextInput
                  label="Nombre"
                  placeholder="Escribe tu nombre"
                  value={nombre}
                  onChange={(v) => {
                    setNombre(v);
                    setEnviado(false);
                  }}
                  hasClear
                  width="100%"
                  status={
                    enviado
                      ? { type: "success", message: `Hola, ${nombre || "visitante"}.` }
                      : undefined
                  }
                />
                <Switch
                  label="Recibir novedades"
                  description="Solo para comprobar el estado del interruptor."
                  value={novedades}
                  onChange={setNovedades}
                  labelPosition="start"
                  labelSpacing="spread"
                  width="100%"
                />
              </VStack>
            </LayoutContent>
          }
          footer={
            <LayoutFooter hasDivider>
              <HStack gap={2} hAlign="end">
                <Button label="Volver al inicio" variant="ghost" href="/" />
                <Button label="Enviar" variant="primary" clickAction={enviar} />
              </HStack>
            </LayoutFooter>
          }
        />
      </Card>
    </Center>
  );
}
