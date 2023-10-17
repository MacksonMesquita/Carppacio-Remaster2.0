"use client";

import { Accordion } from "@/components/Accordion";
import { Badges } from "@/components/Badges";
import { Card } from "@/components/Cards/Card";
import { Carousel1, Carousel2 } from "@/components/Carousel";
import UserHoverCard from "@/components/Hovercard";
import MenuMain from "@/components/Menubar";
import { SearchLabel } from "@/components/SearchLabel";
import { Tab } from "@/components/Tab";
import Texts from "@/components/Text";
import Titles from "@/components/Titles";
import { cardContent } from "@/data/cards";

export default function Home() {
  return (
    <>
      <section className="bg-backgroundMain rounded-b-xl flex justify-center p-2">
        <SearchLabel />
        <MenuMain />
        <UserHoverCard />
      </section>
      <section className="bg-backgroundMain mt-3 rounded-t-xl pb-2">
        <Titles />
        <Carousel1 />
      </section>
      <section className="bg-backgroundSub">
        <Texts />
        <Tab />
        <Badges />
        <Accordion />
      </section>
      <section className="bg-backgroundMain pt-3">
        <Carousel2 />
        <div className="flex justify-center p-6 gap-10 pl-16">
          <Card cardContent={cardContent} />
        </div>
      </section>
    </>
  );
}
