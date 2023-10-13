import { ChefdoAno, Conquista, CrtMedioIcon, PratoPremio } from "../Icons";
import { ITab, ITabContent } from "../types";
import { TabContent, TabTrigger } from "./components";
import * as Tabs from "@radix-ui/react-tabs";

const tabs: ITab[] = [
  {
    title: "Prato Prêmiado",
    value: "paillarddefilet",
    icon: <PratoPremio />,
  },
  {
    title: "Prato Prêmiado",
    value: "tonkotsumissôlámen",
    icon: <PratoPremio />,
  },
  {
    title: "Prato Prêmiado",
    value: "teppanyakideanchovanegra",
    icon: <PratoPremio />,
  },
  {
    title: "Chef do ano",
    value: "arabellavalentyn",
    icon: <ChefdoAno />,
  },
  {
    title: "Chef do ano",
    value: "mauriciovieira",
    icon: <ChefdoAno />,
  },
  {
    title: "Conquista",
    value: "reconhecimento",
    icon: <Conquista />,
  },
  {
    title: "Conquista",
    value: "reconhecimento2",
    icon: <Conquista />,
  },
];

const tabscontent: ITabContent[] = [
  {
    title: "Paillard de filet",
    subtitle: 'Eleito prato do ano pelo revista "Veja"',
    description:
      "O prato Paillard de filet reconhecido como prato do ano pela revista Saveur, na edição de 18 de julho de 2017 Summer Adventures.E pelo chef de cozinha mundialmente famoso, Claude Troisgros. Trásconsigo, Paillard de filet, recheado com queijo emmental, acompanhado derisoto de palmito com alho poró. Tal Prato, foi descrito como, umaexplosão de sabores, sensação de renovação, enfeitados com creme de alho poró.",
    crtmedio: "59%",
    taxadeaprovação: "95%",
    clientes: 5,
    potencial2: 4,
    value: "paillarddefilet",
  },
  {
    title: "Tonkotsu missô lámen",
    subtitle:
      "Formato da imagem: 320x50px, 300x250px, 320x100px, 110x90px, 728x90px e 300x600px",
    description:
      "Apareça em toda a navegação da rede de anúncios da Playscores e fortaleça sua marca.",
    crtmedio: "31%",
    taxadeaprovação: "69,5%",
    clientes: 3,
    potencial2: 4,
    value: "tonkotsumissôlámen",
  },
  {
    title: "Teppanyaki de Anchova negra",
    subtitle: "Formato da imagem: 300x600px  ",
    description:
      "Exiba sua marca em tela cheia sempre que um usuário abrir o App pela primeira vez.",
    crtmedio: "77%",
    taxadeaprovação: "97,3%",
    clientes: 5,
    potencial2: 5,
    value: "teppanyakideanchovanegra",
  },
  {
    title: "Arabella Valentyn (2019)",
    subtitle: "Formato da imagem: 320x50px  ",
    description:
      "Esteja lá quando o usuário tomar iniciativa de escolher uma casa de apostas por conta própria.",
    crtmedio: "---",
    taxadeaprovação: "87%",
    clientes: 5,
    potencial2: 4,
    value: "arabellavalentyn",
  },
  {
    title: "Mauricio Vieira (2021)",
    subtitle: "Formato da imagem: 320x50px  ",
    description:
      "Apareça no topo da página inicial do App, onde todos podem ver sua marca.",
    crtmedio: "---",
    taxadeaprovação: "89%",
    clientes: 4,
    potencial2: 5,
    value: "mauriciovieira",
  },
  {
    title: "Melhor restaurante tradicionalmente Brasileiro (2019)",
    subtitle:
      "Consultar a disponibilidade do contratante de fornecer os dados necessários",
    description:
      "Forneça odds de sua casa de apostas pré-live e ao vivo em todos os jogos disponíveis.",
    crtmedio: "---",
    taxadeaprovação: "---",
    clientes: 5,
    potencial2: 5,
    value: "reconhecimento",
  },
  {
    title: " Prêmio - cultura e comida (2023)",
    subtitle: "O visual do push muda de acordo com sistema operacional",
    description:
      "Aumente o reconhecimento de sua marca aparecendo junto com as melhores Tips.",
    crtmedio: "---",
    taxadeaprovação: "---",
    clientes: 5,
    potencial2: 5,
    value: "reconhecimento2",
  },
];

export function Tab() {
  return (
    <Tabs.Root className="flex flex-col w-full" defaultValue={tabs[0].value}>
      <TabTrigger tabs={tabs} />
      <TabContent tabscontent={tabscontent} />
    </Tabs.Root>
  );
}
