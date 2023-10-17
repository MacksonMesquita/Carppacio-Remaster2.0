import { ICardContent } from "@/components/types";

interface TabCardProps {
  cardContent: ICardContent[];
}

export function Card({ cardContent }: TabCardProps) {
  return (
    <>
      {cardContent.map((content) => (
        <div key={content.chave}>
          <a className="max-w-sm p-6 border border-r-orange-400 border-l-red-600 border-t-blue-700 border-b-yellow-300 rounded-lg flex flex-col bg-backgroundSub text-textMain font-semibold">
            <div className="text-lg pb-5 uppercase select-none">
              {content.title}
            </div>

            <div className="mb-2 tracking-tight flex font-normal text-textContentcard select-none">
              {content.subtitle}
            </div>
          </a>
        </div>
      ))}
      ;
    </>
  );
}
