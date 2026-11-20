"use client";

import { VStack, HStack } from "@astryxdesign/core/Layout";
import { Grid } from "@astryxdesign/core/Grid";
import { Card } from "@astryxdesign/core/Card";
import { Text, Heading } from "@astryxdesign/core/Text";
import { Button } from "@astryxdesign/core/Button";
import { Avatar } from "@astryxdesign/core/Avatar";
import { Divider } from "@astryxdesign/core/Divider";
import { List, ListItem } from "@astryxdesign/core/List";
import { independence, advisor, footer, header } from "./content";
import { useLang } from "./lang";
import { Band, BandTitle, anchor } from "./Band";

// «We advise. Others transact.» y lo que NO somos.
export function Independence() {
  const { t } = useLang();
  return (
    <Band>
      <BandTitle id="independencia" tag={t(independence.tag)} />
      <VStack gap={1} hAlign="center" width="100%">
        {independence.statement.map((line, i) => (
          <Heading
            key={line}
            level={2}
            type="display-2"
            color={i === 0 ? "primary" : "accent"}
            justify="center"
          >
            {line}
          </Heading>
        ))}
      </VStack>
      <Grid columns={{ minWidth: 260, max: 4 }} gap={4}>
        {independence.nots.map((item) => (
          <Card key={item.title.pt} padding={5}>
            <VStack gap={2}>
              <Heading level={4}>{t(item.title)}</Heading>
              <Text type="body" color="secondary">
                {t(item.text)}
              </Text>
            </VStack>
          </Card>
        ))}
      </Grid>
    </Band>
  );
}

// «O advisor»: quién está al lado del jugador.
export function Advisor() {
  const { t } = useLang();
  return (
    <Band>
      <BandTitle id="advisor" tag={t(advisor.tag)} title={t(advisor.title)} />
      <Card padding={6}>
        <Grid columns={{ minWidth: 280, max: 2 }} gap={6} align="center">
          <VStack gap={3} hAlign="center">
            <Avatar
              name={advisor.name}
              size={180}
              shape="rounded"
              tooltip={false}
            />
            <Text type="supporting">{t(advisor.portraitNote)}</Text>
          </VStack>
          <VStack gap={4}>
            <Heading level={3}>{advisor.name}</Heading>
            <Text type="large" color="secondary">
              {t(advisor.bio)}
            </Text>
            <List hasDividers>
              {advisor.roles.map((role) => (
                <ListItem
                  key={role.title.pt}
                  label={
                    <Text type="body" weight="semibold" color="accent">
                      {t(role.title)}
                    </Text>
                  }
                  description={<Text type="body">{t(role.text)}</Text>}
                />
              ))}
            </List>
          </VStack>
        </Grid>
      </Card>
    </Band>
  );
}

// Pie: marca, lema, enlaces, contacto profesional discreto y aviso legal.
export function Footer() {
  const { t } = useLang();
  return (
    <Band tone="muted">
      <Grid columns={{ minWidth: 280, max: 2 }} gap={6} align="start">
        <VStack gap={3}>
          <VStack gap={1}>
            <Heading level={3}>{header.brand}</Heading>
            <Text type="body" color="secondary">
              {t(footer.motto)}
            </Text>
          </VStack>
          <VStack gap={0.5}>
            <Text
              id="contacto"
              type="label"
              color="accent"
              weight="semibold"
              style={anchor}
            >
              {t(footer.contactLabel)}
            </Text>
            <Text type="body">{t(footer.contactValue)}</Text>
          </VStack>
        </VStack>
        <HStack gap={1} wrap="wrap">
          {footer.links.map((link) => (
            <Button
              key={link.href}
              label={t(link.label)}
              variant="ghost"
              size="sm"
              href={link.href}
            />
          ))}
        </HStack>
      </Grid>
      <Divider />
      <VStack gap={1}>
        <Text type="supporting">{t(footer.note)}</Text>
        <Text type="supporting">
          {footer.company} · {t(footer.fine)}
        </Text>
      </VStack>
    </Band>
  );
}
