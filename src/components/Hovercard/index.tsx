/* eslint-disable @next/next/no-img-element */

import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

const UserHoverCard = () => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <a className="inline-block rounded-full outline-none pl-10">
        <img
          className="block h-[45px] w-[45px] rounded-full"
          src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
        />
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className=" w-[300px] rounded-md bg-hoverContentbackground p-5 z-10">
        <div className="flex flex-col gap-[7px]">
          <img
            className="block h-[50px] w-[50px] rounded-full"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          />
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">
                @Carpaccio_BR
              </div>
            </div>
            <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
              Carpaccio, restaurante tradicionalmente Brasileiro, <br />
              siga-nos no instagram para ficar por dentro de tudo!.
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-[5px]">
                <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                  Seguindo 190
                </div>
              </div>
              <div className="flex gap-[5px]">
                <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">
                  6,000 Seguidores
                </div>
              </div>
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default UserHoverCard;
