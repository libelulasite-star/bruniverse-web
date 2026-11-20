"use client";

import type { CSSProperties } from "react";
import { VStack } from "@astryxdesign/core/Layout";
import { Grid } from "@astryxdesign/core/Grid";
import { Text } from "@astryxdesign/core/Text";
import { List, ListItem } from "@astryxdesign/core/List";
import { how } from "./content";
import { useLang } from "./lang";
import { Band, BandTitle } from "./Band";

const diagram: CSSProperties = { width: "100%", height: "auto", maxWidth: 560 };

// El motivo central de la marca: el jugador en el centro del círculo y las ocho áreas alrededor.
function Orbit({
  labels,
  center,
  title,
}: {
  labels: string[];
  center: string;
  title: string;
}) {
  return (
    <svg
      viewBox="-150 20 1100 760"
      role="img"
      aria-label={title}
      style={diagram}
    >
      <circle
        cx="400"
        cy="400"
        r="300"
        fill="none"
        stroke="var(--color-border-emphasized)"
        strokeWidth="2"
      />
      <circle
        cx="400"
        cy="400"
        r="150"
        fill="none"
        stroke="var(--color-border-emphasized)"
        strokeWidth="1"
        strokeDasharray="4 10"
      />
      {labels.map((label, i) => {
        const angle = ((-90 + i * 45) * Math.PI) / 180;
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const x = 400 + 300 * c;
        const y = 400 + 300 * s;
        return (
          <g key={label}>
            <line
              x1="400"
              y1="400"
              x2={x}
              y2={y}
              stroke="var(--color-accent)"
              strokeOpacity=".45"
              strokeWidth="1.5"
            />
            <circle cx={x} cy={y} r="9" fill="var(--color-accent)" />
            <text
              x={x + c * 26}
              y={y + s * 26 + (Math.abs(s) > 0.9 ? (s > 0 ? 26 : -6) : 10)}
              textAnchor={
                Math.abs(c) < 0.2 ? "middle" : c > 0 ? "start" : "end"
              }
              fill="var(--color-text-primary)"
              fontSize="30"
              fontWeight="600"
            >
              {label}
            </text>
          </g>
        );
      })}
      <circle cx="400" cy="400" r="74" fill="var(--color-accent)" />
      <text
        x="400"
        y="411"
        textAnchor="middle"
        fill="var(--color-on-accent)"
        fontSize="30"
        fontWeight="700"
      >
        {center}
      </text>
    </svg>
  );
}

// «Como trabalhamos»: diagrama + las ocho áreas, todas visibles.
export function How() {
  const { t } = useLang();
  return (
    <Band tone="muted">
      <BandTitle
        id="como"
        tag={t(how.tag)}
        title={t(how.title)}
        lede={t(how.lede)}
      />
      <Grid
        columns={{ minWidth: 320, max: 2 }}
        gap={8}
        align="center"
        justify="center"
      >
        <Orbit
          labels={how.areas.map((area) => t(area.name))}
          center={t(how.player)}
          title={t(how.diagramLabel)}
        />
        <VStack width="100%">
          <List hasDividers>
            {how.areas.map((area) => (
              <ListItem
                key={area.name.pt}
                label={
                  <Text type="body" weight="semibold">
                    {t(area.name)}
                  </Text>
                }
                description={
                  <Text type="body" color="secondary">
                    {t(area.text)}
                  </Text>
                }
              />
            ))}
          </List>
        </VStack>
      </Grid>
    </Band>
  );
}
