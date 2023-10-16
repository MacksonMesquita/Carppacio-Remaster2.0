import * as Tabs from "@radix-ui/react-tabs";
import { RadixSeparator } from "../../../Separator";
import SimpleBar from "simplebar-react";
import { ITab } from "@/components/types";
import { useScrollContainer } from "react-indiana-drag-scroll";

interface TabTriggerProps {
  tabs: ITab[];
}

export function TabTrigger({ tabs }: TabTriggerProps) {
  const { ref } = useScrollContainer();
  return (
    <div className="flex flex-col">
      <SimpleBar scrollableNodeProps={{ ref }}>
        <Tabs.List className="flex">
          {tabs.map((tab) => (
            <Tabs.Trigger
              className="flex-1 border-colorTriggerBorder flex flex-col items-center justify-center text-lg text-textMain select-none data-[state=active]:text-triggerOrange border-b-2 data-[state=active]:border-b-triggerOrange pb-3"
              key={tab.value}
              value={tab.value}
            >
              {tab.icon}
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </SimpleBar>
      <RadixSeparator />
    </div>
  );
}
