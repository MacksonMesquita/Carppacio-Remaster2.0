import * as Separator from "@radix-ui/react-separator";

export default function Titles() {
  return (
    <>
      <h1 className=" pt-5 text-center text-textMain text-8xl tracking-widest font-mono flex flex-col font-semibold">
        CARPACCIO
      </h1>
      <span className="justify-center flex">
        <Separator.Root className="bg-textMain data-[orientation=horizontal]:h-px w-96" />
      </span>
      <h3 className="text-center text-textMain text-[15px] tracking-widest flex flex-col font-medium py-3 pt">
        UM RESTAURANTE TRADICIONALMENTE BRASILEIRO
      </h3>
    </>
  );
}
