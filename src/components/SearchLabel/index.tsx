"use client";

import React from "react";
import * as Label from "@radix-ui/react-label";

const SearchFilter = () => (
  <div className="flex items-center gap-[15px] px-5 pr-20 pl-1">
    <Label.Root className="text-[14px] font-medium text-textMain">
      Pesquisar
    </Label.Root>
    <input
      className="inline-flex h-[35px] w-[200px] items-center justify-center rounded-[10px] px-[10px] text-[14px]"
      defaultValue="Carpaccio"
    />
  </div>
);

export default SearchFilter;
