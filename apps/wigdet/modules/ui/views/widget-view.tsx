"use client";

import { WidgetFooter } from "@/modules/ui/components/widget-footer";
import { WidgetHeader } from "@/modules/ui/components/widget-header";

interface Props {
  ordanizationId: string;
}

export const WidgetView = ({ ordanizationId }: Props) => {
  return (
    <main
      className={
        "min-h-[100vh] min-w-[100vh] flex h-full w-full flex-col overflow-hidden rounded-xl border border-muted"
      }
    >
      <WidgetHeader>Header!</WidgetHeader>
      <div>Widget View: {ordanizationId}</div>
      <WidgetFooter />
    </main>
  );
};
