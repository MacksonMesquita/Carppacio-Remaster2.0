import { SealCheck } from "@phosphor-icons/react";

export function Badges() {
  return (
    <div className="text-center pb-10 flex justify-center pt-3">
      <span className="bg-badgeblue text-textMain text-base font-medium mr-7 px-2.5 rounded flex items-center">
        Restaurante do ano (2019)
        <SealCheck size={32} />
      </span>
      <span className="bg-badgegray text-textMain text-base font-medium mr-7 px-2.5 rounded flex items-center">
        Prêmio - cultura e comida
        <SealCheck size={32} />
      </span>
      <span className="bg-badgered text-textMain text-base font-medium mr-7 px-2.5 rounded flex items-center">
        Estrela michelin
        <SealCheck size={32} />
      </span>
      <span className="bg-badgegreen text-textMain text-base font-medium mr-7 px-2.5 rounded flex items-center">
        Restaurante do ano (2023)
        <SealCheck size={32} />
      </span>
      <span className="bg-badgeyellow text-textMain text-base font-medium mr-7 px-2.5 rounded flex items-center">
        Anvisa Badge
        <SealCheck size={32} />
      </span>
      <span className="bg-badgepurple text-textMain text-base font-medium mr-7 px-2.5 rounded flex items-center">
        Le Figario approve
        <SealCheck size={32} />
      </span>
    </div>
  );
}
