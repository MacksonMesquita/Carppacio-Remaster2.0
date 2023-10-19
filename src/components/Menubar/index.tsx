"use client";

import React from "react";
import * as Menubar from "@radix-ui/react-menubar";

const MenuMain = () => {
  return (
    <Menubar.Root className="flex py-3 select-none font-normal justify-center font-sans">
      <Menubar.Menu>
        <Menubar.Trigger className="outline-none text-textMain px-5 text-lg">
          Mais sobre Carpaccio
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-textMain rounded-md p-4 text-center text-[14px]"
            align="center"
            sideOffset={11}
          >
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Fundadores
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Nossa história
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Nossa luta
            </Menubar.Item>
            <Menubar.Item className="pb-1"></Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="outline-none leading-none text-textMain px-5 text-lg">
          Agenda
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-textMain rounded-md p-4 text-center text-[15px]"
            align="center"
            sideOffset={11}
          >
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Nossa datas
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Eventos
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Organize sua festa!
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="outline-none leading-none text-textMain px-5 text-lg">
          Ajuda
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-textMain rounded-md p-4 text-center text-[15px]"
            align="center"
            sideOffset={11}
          >
            <Menubar.Item className="pb-2 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Configurações gerais
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Configurações de usuário
            </Menubar.Item>
            <Menubar.Item className="font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Guia prático
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[0.5px]" />
            <Menubar.Item className="font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Fale conosco
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="outline-none leading-none text-textMain px-5 text-lg">
          Acessar
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-textMain rounded-md p-4 text-center text-[15px]"
            align="center"
            sideOffset={11}
          >
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Entrar
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Quero me cadastrar
            </Menubar.Item>
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-visualizationMenuTrigger">
              Ver contas
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans font data-[highlighted]:bg-visualizationMenuTrigger">
              Configurações de cadastro
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default MenuMain;
