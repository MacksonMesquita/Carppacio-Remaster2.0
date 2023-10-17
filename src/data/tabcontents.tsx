import { ChefdoAno, Conquista, PratoPremio } from "@/components/Icons";
import { ITab, ITabContent } from "@/components/types";

export const tabs: ITab[] = [
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

export const tabscontent: ITabContent[] = [
  {
    title: "Paillard de filet",
    subtitle: 'Eleito prato do ano pelo revista "Veja e Saveur".',
    description:
      'O prato Paillard de filet reconhecido como prato do ano pela revista Saveur, na edição de 18 de julho de 2017 Summer Adventures, e pelo chef de cozinha mundialmente famoso, Claude Troisgros. Trás consigo, Paillard de filet, recheado com queijo emmental, acompanhado de risoto de palmito com alho poró. Tal Prato, foi descrito pelos críticos como, "uma explosão de sabores, sensação de renovação, enfeitados com creme de alho poró", presentes na grande resenha escrita pelo jornal Le Figaro',
    crtmedio: "59%",
    taxadeaprovação: "95%",
    clientes: 5,
    potencial2: 4,
    value: "paillarddefilet",
  },
  {
    title: "Tonkotsu missô lámen",
    subtitle:
      'Eleito prato do ano pela revista de culinária Japonesa "Luna Pun Dong".',
    description:
      "O prato Tonkotsu missô lámen reconhecido como prato inovação pela revista Luna Pun Dong, na edição de 24 de julho de 2019 Tracks of Winter. E pela graduada chef de cozinha Japonesa, Ayumi Sa Ho. Trás consigo, uma conjectura to clássico lámen japonês, recheado com ervas emmentais, acompanhado de macarrão tradiconal e legumes tipicamente japonêses. Tal Prato, foi descrito como, uma explosão de sabores com um forte senso de inovação cultural.",
    crtmedio: "31%",
    taxadeaprovação: "69,5%",
    clientes: 3,
    potencial2: 4,
    value: "tonkotsumissôlámen",
  },
  {
    title: "Teppanyaki de Anchova negra",
    subtitle:
      'reconhecido como prato revelação e prato oceanico do ano, pela revista "Saveur".',
    description:
      " O prato Teppanyaki de anchova negra reconhecido como  prato revelação e prato oceanico do ano pela revista Saveur, na edição de 22 de Agosto de 2020 Los fervores de la cocina. Trás consigo,  Teppanyaki de anchova negra grelhado. Tal Prato foi descrito como, uma   maravilhosa releitura marinha, senso de preservação ambiental e gosto irresistivelmente delicado, presentes na resenha sobre o mesmo, encontardas nos jornal francês Don Gusteus.",
    crtmedio: "77%",
    taxadeaprovação: "97,3%",
    clientes: 5,
    potencial2: 5,
    value: "teppanyakideanchovanegra",
  },
  {
    title: "Arabella Valentyn",
    subtitle:
      "Eleita a melhor chef de cozinha em um período de 6 meses no ano de 2019",
    description:
      "Arabella Valentyn, nascida e criada no Brasil, portou no ano de 2019 o título de melhor cozinheira (mulher) em um curto período de 6 meses. Os pais Italianos de Arabella, guiaram os seus passos desde ela era apenas uma garotinha, pois desde cedo já sabiam de todo o seu potêncial na cozinha. Arabella conquista no mesmo ano, aos 22 anos de idade, o prêmio de mulher revelação mais nova, a ganhar um devido reconhecimento nacional e mundial.",
    crtmedio: "---",
    taxadeaprovação: "87%",
    clientes: 5,
    potencial2: 4,
    value: "arabellavalentyn",
  },
  {
    title: "Mauricio Vieira (2021)",
    subtitle:
      "Eleito o melhor chefe de nacionalidade estrangeira a atuar Nacionalmente",
    description:
      'O Português Mauricio Vieira, ganha no ano de 2021 o prêmio "Brazilian HomeWather" como melhor chefe de nacionalidade estrangeira a atuar Nacionalmente. Embora ele não tenha nascido no Brasil, se mudou com seus pais Antônio Vieira e Nitara Scherer para o mesmo quando tinha apenas 5 anos de idade, crescendo em uma cidadezinha chamada Itatiba, no interior de São Paulo. O chef tambem ganhou reconhecimento através da revista "Finally is Culture"',
    crtmedio: "---",
    taxadeaprovação: "89%",
    clientes: 4,
    potencial2: 5,
    value: "mauriciovieira",
  },
  {
    title: "Melhor restaurante tradicionalmente Brasileiro",
    subtitle:
      "Carpaccio ganha prêmio de Melhor restaurante tradicionalmente Brasileiro no ano de 2019",
    description:
      "Nos anos que antecederam a pândemia, nosso restaurante ganhou reconhecimento mundial com selo michelin de aprovação. Ganhando também o campeonato Brasileiro de restaurantes e culínarias, destacando-se em primeiro lugar e garantindo o prêmio de Melhor restaurante tradicionalmente Brasileiro do ano. Durante as fases de testes, obtvemos êxito em todos os aspectos, contamos coma presença de nossos mais ilustres chefes de cozinha.",
    crtmedio: "---",
    taxadeaprovação: "---",
    clientes: 5,
    potencial2: 5,
    value: "reconhecimento",
  },
  {
    title: "Prêmio - cultura e comida para restaurantes (2023)",
    subtitle: "Carpaccio ganha o prêmio cultura e comida (2023)",
    description:
      'Nos anos que sucederam os eventos pandêmicos causados pelo covid-19, com a volta dos eventos presenciais de culinária e disputas, nosso restaurante foi convidado a participar da grande resenha organizada pelo jornal Franês "Le Figaro". No evento, milhares de pequenos e grandes restaurantes do mundo inteiro são convidados a participar de provas culinárias e avaliações criteriosas, ganhando assim, o prêmio cultura e comida para restaurantes.',
    crtmedio: "---",
    taxadeaprovação: "---",
    clientes: 5,
    potencial2: 5,
    value: "reconhecimento2",
  },
];
