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
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
              Fundadores
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
              Nossa história
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
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
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
              Nossa datas
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
              Eventos
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
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
            <Menubar.Item className="pb-2 font-sans data-[highlighted]:bg-triggervisualization">
              Configurações gerais
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
              Configurações de usuário
            </Menubar.Item>
            <Menubar.Item className="font-sans data-[highlighted]:bg-triggervisualization">
              Guia prático
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[0.5px]" />
            <Menubar.Item className="font-sans data-[highlighted]:bg-triggervisualization">
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
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
              Entrar
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
              Quero me cadastrar
            </Menubar.Item>
            <Menubar.Item className="pb-1 font-sans data-[highlighted]:bg-triggervisualization">
              Ver contas
            </Menubar.Item>
            <Menubar.Separator className="h-[1px] bg-backgroundMain m-[1px]" />
            <Menubar.Item className="pb-1 font-sans font data-[highlighted]:bg-triggervisualization">
              Configurações de cadastro
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default MenuMain;
