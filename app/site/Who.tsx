"use client";

import { useState } from "react";
import { VStack, HStack } from "@astryxdesign/core/Layout";
import { Grid } from "@astryxdesign/core/Grid";
import { Card } from "@astryxdesign/core/Card";
import { Text, Heading } from "@astryxdesign/core/Text";
import { List, ListItem } from "@astryxdesign/core/List";
import {
  ToggleButton,
  ToggleButtonGroup,
} from "@astryxdesign/core/ToggleButton";
import { useMediaQuery } from "@astryxdesign/core/hooks";
import { who } from "./content";
import { useLang } from "./lang";
import { Band, BandTitle } from "./Band";

// «Diz-nos quem és»: el visitante elige su situación y ve qué hacemos por él.
export function Who() {
  const { lang, t } = useLang();
  const [selected, setSelected] = useState("0");
  const isWide = useMediaQuery("(min-width: 1100px)");
  const current = who.items[Number(selected)][lang];

  return (
    <Band tone="muted">
      <BandTitle
        id="sou"
        tag={t(who.tag)}
        title={t(who.title)}
        lede={t(who.lede)}
      />
      <HStack hAlign="center" width="100%">
        <ToggleButtonGroup
          label={t(who.groupLabel)}
          type="single"
          orientation={isWide ? "horizontal" : "vertical"}
          value={selected}
          onChange={(v) => typeof v === "string" && setSelected(v)}
        >
          {who.items.map((item, i) => (
            <ToggleButton key={i} value={String(i)} label={item[lang].label} />
          ))}
        </ToggleButtonGroup>
      </HStack>
      <Card padding={6}>
        <VStack gap={5}>
          <Heading level={2} textWrap="balance">
            {current.say}
          </Heading>
          <Grid columns={{ minWidth: 280, max: 2 }} gap={5}>
            {current.cols.map(([title, points]) => (
              <VStack key={title} gap={2}>
                <Text type="label" color="accent" weight="semibold">
                  {title}
                </Text>
                <List listStyle="disc" density="compact">
                  {points.map((point) => (
                    <ListItem
                      key={point}
                      label={<Text type="body">{point}</Text>}
                    />
                  ))}
                </List>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Card>
    </Band>
  );
}
