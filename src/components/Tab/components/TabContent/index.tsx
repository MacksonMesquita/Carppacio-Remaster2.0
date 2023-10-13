/* eslint-disable @next/next/no-img-element */
import * as Tabs from "@radix-ui/react-tabs";
import { CreatStarsArray } from "../../../StarsFunc";
import { RadixSeparator } from "../../../Separator";
import { ITabContent } from "@/components/types";

interface TabTriggerProps {
  tabscontent: ITabContent[];
}

export function TabContent({ tabscontent }: TabTriggerProps) {
  return (
    <>
      {tabscontent.map((content) => (
        <Tabs.Content
          className="items-center justify-center text-[25px] text-textMain flex flex-col md:flex-row md:gap-16 gap-16"
          key={content.value}
          value={content.value}
        >
          <div className="flex flex-col gap-7 items-center md:items-baseline max-w-[400px] w-full">
            <div className="flex items-baseline text-lg flex-col">
              <div className="italic text-3xl m-2 flex items-center gap-2">
                {content.title}
              </div>
              {content.subtitle}
            </div>
            <span className="text-lg max-w-[400px]">{content.description}</span>
            <div className="flex justify-between text-lg w-full">
              <div className="flex flex-col w-1/2">
                <span>Ctr médio</span>
                <div className="flex font-extrabold text-2xl">
                  <span>{content.crtmedio}</span>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <span>Taxa de aprovação:</span>
                <span className="font-extrabold text-2xl">
                  {content.taxadeaprovação}
                </span>
              </div>
            </div>
            <div className="flex justify-between text-sm w-full">
              <div className="flex flex-col w-1/2">
                <span>Estrela do cliente:</span>
                <CreatStarsArray starsNumber={content.clientes} />
              </div>
              <div className="flex flex-col w-1/2">
                <span>Estrela do chefe:</span>
                <CreatStarsArray starsNumber={content.potencial2} />
              </div>
            </div>
          </div>
          <img
            className="min-w-[360px] h-[500px]"
            src=""
            alt="Representative phone image"
          />
        </Tabs.Content>
      ))}
    </>
  );
}
