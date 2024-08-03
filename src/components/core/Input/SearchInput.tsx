import React, { FC, HTMLProps } from "react";

import { SearchIcon } from "@/components/icons";

interface Props extends HTMLProps<HTMLInputElement> {
  onClick: () => void;
}

const SearchInput: FC<Props> = ({ onClick, ...props }) => {
  return (
    <div className="flex w-full items-center justify-between gap-[4px] rounded-[48px] border-[1px] border-gray-100 bg-gray-scale-0 px-[16px] py-[10px]">
      <input
        className="w-full outline-none placeholder:text-body1-regular"
        placeholder={props.placeholder ?? "페스티벌 명, 키워드 검색"}
        {...props}
      />
      <button type="button">
        <SearchIcon
          width={20}
          height={20}
          className="text-primary-01"
          onClick={onClick}
        />
      </button>
    </div>
  );
};

export default SearchInput;
