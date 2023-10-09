import UserHoverCard from "@/components/Hovercard";
import MenuMain from "@/components/Menubar";
import SearchFilter from "@/components/SearchLabel";
import Titles from "@/components/Titles";

export default function Home() {
  return (
    <>
      <section className="bg-backgroundMain rounded-b-xl flex justify-center p-2">
        <SearchFilter />
        <MenuMain />
        <UserHoverCard />
      </section>
      <section className="bg-backgroundMain mt-3 rounded-t-xl">
        <Titles />
      </section>
    </>
  );
}