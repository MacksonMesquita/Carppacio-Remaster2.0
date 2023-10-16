"use client";

import { Carousel1 } from "@/components/Carousel1";
import UserHoverCard from "@/components/Hovercard";
import MenuMain from "@/components/Menubar";
import { SearchLabel } from "@/components/SearchLabel";
import { Tab } from "@/components/Tab";
import Texts from "@/components/Text";
import Titles from "@/components/Titles";

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
      </section>
      <section className="bg-backgroundMain"></section>
    </>
  );
}
