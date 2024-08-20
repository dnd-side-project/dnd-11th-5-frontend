import Link, { LinkProps } from "next/link";
import { useQueryState } from "nuqs";
import { ChangeEvent, FC } from "react";

import { SearchIcon, XIcon } from "@/components/icons";

interface Props extends Pick<LinkProps, "href"> {
  placeholder?: string;
}

const SearchInput: FC<Props> = ({ href, placeholder }) => {
  const [query, setQuery] = useQueryState("query", {
    shallow: true,
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (typeof query !== "string") {
      return;
    }

    setQuery(query);
  };

  return (
    <div className="flex w-full items-center justify-between gap-[4px] rounded-[48px] border-[1px] border-gray-100 bg-gray-scale-0 px-[16px] py-[10px]">
      <input
        className="w-full text-body1-regular outline-none placeholder:text-body1-regular"
        placeholder={placeholder ?? "페스티벌 명, 키워드 검색"}
        value={query ?? ""}
        onChange={handleOnChange}
      />
      {query ? (
        <button type="button" onClick={() => setQuery("")}>
          <XIcon width={20} height={20} className="text-primary-01" />
        </button>
      ) : (
        <Link href={href}>
          <SearchIcon width={20} height={20} className="text-primary-01" />
        </Link>
      )}
    </div>
  );
};

export default SearchInput;
