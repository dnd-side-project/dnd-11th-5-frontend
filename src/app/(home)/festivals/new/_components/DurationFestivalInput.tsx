import { FC } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { DurationInput } from "@/components/core/Input";
import { CreateFestivalType } from "@/validations/CreateFestivalSchema";

interface Props {
  handleGetError: (name: keyof CreateFestivalType) => string | undefined;
}

const DurationFestivalInput: FC<Props> = ({ handleGetError }) => {
  const { control, setValue } = useFormContext<CreateFestivalType>();

  const startDate = useWatch({ control, name: "startDate" });
  const endDate = useWatch({ control, name: "endDate" });

  const handleCalendarConfirm = (start: string | null, end: string | null) => {
    setValue("startDate", start ?? "");
    setValue("endDate", end ?? "");
  };
  return (
    <DurationInput
      label="페스티벌 기간"
      start={startDate}
      end={endDate}
      error={handleGetError("startDate") || handleGetError("endDate")}
      onConfirm={handleCalendarConfirm}
    />
  );
};

export default DurationFestivalInput;
