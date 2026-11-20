"use client";

import { VStack } from "@astryxdesign/core/Layout";
import { Grid } from "@astryxdesign/core/Grid";
import { Card } from "@astryxdesign/core/Card";
import { Text, Heading } from "@astryxdesign/core/Text";
import { List, ListItem } from "@astryxdesign/core/List";
import { protect } from "./content";
import { useLang } from "./lang";
import { Band, BandTitle } from "./Band";

// «O que protegemos»: cuatro tarjetas con todo a la vista, sin acordeones.
export function Protect() {
  const { t } = useLang();
  return (
    <Band>
      <BandTitle
        id="protegemos"
        tag={t(protect.tag)}
        title={t(protect.title)}
        lede={t(protect.lede)}
      />
      <Grid columns={{ minWidth: 260, max: 4 }} gap={4}>
        {protect.cards.map((card) => (
          <Card key={card.title.pt} padding={5}>
            <VStack gap={3}>
              <Heading level={3}>{t(card.title)}</Heading>
              <Text type="body" color="secondary">
                {t(card.text)}
              </Text>
              <List listStyle="disc" density="compact">
                {card.points.map((point) => (
                  <ListItem
                    key={point.pt}
                    label={<Text type="body">{t(point)}</Text>}
                  />
                ))}
              </List>
            </VStack>
          </Card>
        ))}
      </Grid>
    </Band>
  );
}
