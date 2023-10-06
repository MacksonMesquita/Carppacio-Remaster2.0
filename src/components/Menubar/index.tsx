"use client";

import React from "react";
import * as Menubar from "@radix-ui/react-menubar";

const MenuMain = () => {
  return (
    <Menubar.Root className="flex py-3 select-none font-normal justify-center">
      <Menubar.Menu>
        <Menubar.Trigger className="outline-none leading-none text-textMain px-10 ">
          Mais sobre Carpaccio
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-textMain rounded-md p-4 text-center text-[15px]"
            align="center"
            sideOffset={11}
          >
            <Menubar.Item className="pb-1">Fundadores</Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1">Nossa história</Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1">Nossa luta</Menubar.Item>
            <Menubar.Item className="pb-1"></Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="outline-none leading-none text-textMain px-10">
          Agenda
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-textMain rounded-md p-4 text-center text-[15px]"
            align="center"
            sideOffset={11}
          >
            <Menubar.Item className="pb-1">Nossa datas</Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1">Eventos</Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1">Organize sua festa!</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="outline-none leading-none text-textMain px-10">
          Ajuda
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-textMain rounded-md p-4 text-center text-[15px]"
            align="center"
            sideOffset={11}
          >
            <Menubar.Item className="pb-2">Configurações gerais</Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1">
              Configurações de usuário
            </Menubar.Item>
            <Menubar.Item className="">Guia prático</Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[0.5px]" />
            <Menubar.Item className="">Fale conosco</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="outline-none leading-none text-textMain px-10">
          Acessar
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-textMain rounded-md p-4 text-center text-[15px]"
            align="center"
            sideOffset={11}
          >
            <Menubar.Item className="pb-1">Entrar</Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1">Quero me cadastrar</Menubar.Item>
            <Menubar.Item className="pb-1">Ver contas</Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1">
              Configurações de cadastro
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default MenuMain;
