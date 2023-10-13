import * as Tabs from "@radix-ui/react-tabs";
import { CreatStarsArray } from "../../../StarsFunc";
import { ITabContent } from "@/components/types";
import Image from "next/image";

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
          <div className="flex flex-col gap-7 items-center md:items-baseline max-w-[500px] w-full">
            <div className="flex items-baseline text-lg flex-col">
              <div className="italic text-3xl m-2 flex items-center">
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
          <Image
            className="rounded-lg"
            src="/d2002fc819ff4c4ea901899ecb0fc5c4_michelin-guide-stars-description-pt_BR.jpg"
            alt="Representative Image"
            width={400}
            height={800}
          />
        </Tabs.Content>
      ))}
    </>
  );
}
