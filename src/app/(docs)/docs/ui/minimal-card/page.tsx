import React from "react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Tabs from "@/components/tabs/tabs";
import MinimalCardCode from "@/components/ui/minimalCard/minimalCard/minimalCardCode";
import { MinimalCard } from "@/components/ui/minimalCard/minimalCard/minimalCard";
import { NeonCard } from "@/components/ui/minimalCard/neonCard/neonCard";
import NeonCardCode from "@/components/ui/minimalCard/neonCard/neonCardCode";
import { GlassCard } from "@/components/ui/minimalCard/glassCard/glassCard";
import GlassCardCode from "@/components/ui/minimalCard/glassCard/glassCardCode";

const MinimalCardPage = () => {
  return (
    <div>
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Minimal Card</h1>
        <p className="mt-1">
          Use these miminal card for your portfolios, documents, and more
        </p>
      </section>

      <section className="mt-10 space-y-10">
        <Tabs
          codeContent={<MinimalCardCode />}
          previewContent={<MinimalCard />}
        />

        <Tabs codeContent={<NeonCardCode />} previewContent={<NeonCard />} />
        <Tabs codeContent={<GlassCardCode />} previewContent={<GlassCard />} />
      </section>
    </div>
  );
};

export default MinimalCardPage;
