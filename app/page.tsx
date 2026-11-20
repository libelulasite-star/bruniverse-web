import { LangProvider } from "./site/lang";
import { SiteShell } from "./site/SiteShell";
import { Hero } from "./site/Hero";
import { Who } from "./site/Who";
import { Protect } from "./site/Protect";
import { How } from "./site/How";
import { Independence, Advisor, Footer } from "./site/Closing";

export default function Home() {
  return (
    <LangProvider>
      <SiteShell>
        <Hero />
        <Who />
        <Protect />
        <How />
        <Independence />
        <Advisor />
        <Footer />
      </SiteShell>
    </LangProvider>
  );
}
