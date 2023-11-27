import { SealCheck } from "@phosphor-icons/react";

export function Badges() {
  return (
    <div className="text-center pb-10 flex justify-center pt-16">
      <span className="bg-badgeblue text-textMain text-sm font-medium mr-7 px-2.5 rounded flex items-center">
        Restaurante do ano (2019)
        <SealCheck className="pl-1" size={32} />
      </span>
      <span className="bg-badgegray text-textMain text-sm font-medium mr-7 px-2.5 rounded flex items-center">
        Prêmio - Cultura e Comida (C&C)
        <SealCheck className="pl-1" size={32} />
      </span>
      <span className="bg-badgered text-textMain text-sm font-medium mr-7 px-2.5 rounded flex items-center">
        Estrela Michelin de qualidade
        <SealCheck className="pl-1" size={32} />
      </span>
      <span className="bg-badgegreen text-textMain text-sm font-medium mr-7 px-2.5 rounded flex items-center">
        Prêmio - São Paulo Records (2022)
        <SealCheck className="pl-1" size={32} />
      </span>
      <span className="bg-badgeyellow text-textMain text-sm font-medium mr-7 px-2.5 rounded flex items-center">
        Anvisa badge
        <SealCheck className="pl-1" size={32} />
      </span>
      <span className="bg-badgepurple text-textMain text-sm font-medium mr-7 px-2.5 rounded flex items-center">
        Le Figario approve
        <SealCheck className="pl-1" size={32} />
      </span>
    </div>
  );
}
