import { FC, HtmlHTMLAttributes, useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

import { PinLocationIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

interface Props
  extends Omit<HtmlHTMLAttributes<HTMLButtonElement>, "onChange"> {
  label?: string;
  value: string | null;
  className?: string;
  onChange: (_address: string, _sido: string, _sigungu: string) => void;
}

const AddressInput: FC<Props> = ({
  label = "페스티벌 장소",
  value,
  className,
  onChange,
  ...props
}) => {
  const [fullAddress, setFullAddress] = useState<string | null>(value);

  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
  );

  const getFullAddress = (address: Address) => {
    let fullAddress = address.address;
    let extraAddress = "";

    if (address.addressType === "R") {
      if (address.bname !== "") {
        extraAddress += address.bname;
      }
      if (address.buildingName !== "") {
        extraAddress +=
          extraAddress !== ""
            ? `, ${address.buildingName}`
            : address.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    return fullAddress;
  };

  const handleComplete = (data: Address) => {
    const fullAddress = getFullAddress(data);
    setFullAddress(fullAddress);

    const { address, sido, sigungu } = data;
    onChange(address, sido, sigungu);
  };

  const handleOpenAddressModal = () => {
    open({
      onComplete(address) {
        handleComplete(address);
      },
    });
  };

  return (
    <div className="flex w-full flex-col items-start gap-[8px]">
      <label
        htmlFor={label}
        className="text-subtitle-medium text-gray-scale-900"
      >
        {label}
      </label>
      <button
        type="button"
        id={label}
        onClick={handleOpenAddressModal}
        className={cn(
          "w-full rounded-[8px]  p-[16px] bg-gray-scale-0 duration-300",
          "border-[1px] border-gray-scale-200",
          "placeholder:text-caption2-medium placeholder:text-gray-400 text-gray-scale-700",
          "flex gap-[8px] justify-start items-center",
          className,
        )}
        {...props}
      >
        <PinLocationIcon
          width={16}
          height={16}
          className={!!fullAddress ? "text-primary-01" : "text-gray-400"}
        />
        <span
          className={cn(
            "!text-caption2-medium max-w-[90%] text-ellipsis line-clamp-1",
            !!fullAddress ? "text-gary-scale-700" : "text-gray-400",
          )}
        >
          {!!fullAddress ? fullAddress : "페스티벌 개최 주소를 입력해주세요."}
        </span>
      </button>
    </div>
  );
};

export default AddressInput;
