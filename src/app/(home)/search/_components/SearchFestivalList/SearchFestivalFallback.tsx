import { RegistorButton } from "@/components/core/Button";
import { ErrorIcon } from "@/components/icons";

const SearchFestivalFallback = () => {
  return (
    <div className="flex flex-col items-center gap-[16px]">
      <ErrorIcon width={56} height={56} className="text-gray-scale-300" />
      <div className="flex w-full flex-col items-center gap-[6px]">
        <h1 className="text-body1-medium text-gray-scale-900">
          검색 결과가 없어요
        </h1>
        <span className="text-caption1-regular text-gray-scale-600">
          원하는 페스티벌이 없다면 피에스타에 등록해주세요.
        </span>
        <RegistorButton
          label="페스티벌 등록하기"
          href="/festival/new"
          className={"w-auto"}
        />
      </div>
    </div>
  );
};

export default SearchFestivalFallback;
