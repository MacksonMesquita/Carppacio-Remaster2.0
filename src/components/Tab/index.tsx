import { tabs, tabscontent } from "@/data/tabcontents";
import { TabContent, TabTrigger } from "./components";
import * as Tabs from "@radix-ui/react-tabs";

export function Tab() {
  return (
    <Tabs.Root className="flex flex-col w-full" defaultValue={tabs[0].value}>
      <TabTrigger tabs={tabs} />
      <TabContent tabscontent={tabscontent} />
    </Tabs.Root>
  );
}
