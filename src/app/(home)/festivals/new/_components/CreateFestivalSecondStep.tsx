import { FC } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

import {
  FestivalCategory,
  FestivalMood,
} from "@/apis/onboarding/onboardingType";
import {
  AddressInput,
  CategoryKeywordInput,
  DescriptionInput,
  DurationInput,
  MoodKeywordInput,
  TextInput,
  TimeInput,
} from "@/components/core/Input";
import { CreateFestivalType } from "@/validations/CreateFestivalSchema";

interface Props {
  moods: Array<FestivalMood>;
  categories: Array<FestivalCategory>;
}

const CreateFestivalSecondStep: FC<Props> = ({ moods, categories }) => {
  const {
    control,
    setValue,
    register,
    formState: { errors, submitCount },
  } = useFormContext<CreateFestivalType>();

  const startDate = useWatch({ control, name: "startDate" });
  const endDate = useWatch({ control, name: "endDate" });
  const time = useWatch({ control, name: "playtime" });

  const handleCalendarConfirm = (start: string | null, end: string | null) => {
    setValue("startDate", start ?? "", { shouldValidate: true });
    setValue("endDate", end ?? "", { shouldValidate: true });
  };

  const handleAddress = (address: string, sido: string, sigungu: string) => {
    setValue("address", address ?? "", { shouldValidate: true });
    setValue("sido", sido ?? "", { shouldValidate: true });
    setValue("sigungu", sigungu ?? "", { shouldValidate: true });
  };

  const handleTimeChange = (time: string) => {
    setValue("playtime", time, { shouldValidate: true });
  };

  return (
    <section className="flex w-full flex-col gap-[32px]">
      <DurationInput
        label="페스티벌 기간"
        start={startDate}
        end={endDate}
        onConfirm={handleCalendarConfirm}
      />

      <AddressInput value={null} onChange={handleAddress} />

      <TimeInput value={time} onChange={handleTimeChange} />

      <label className="text-subtitle-medium text-gray-scale-900">URL</label>

      <TextInput
        label="공식홈페이지"
        isSubInput
        placeholder="공식홈페이지 주소를 입력해주세요."
        error={submitCount > 1 ? errors.homepageUrl?.message : undefined}
        {...register("homepageUrl")}
      />
      <TextInput
        label="인스타그램 계정"
        isSubInput
        placeholder="인스타그램 계정을 입력해주세요."
        error={submitCount > 1 ? errors.instagramUrl?.message : undefined}
        {...register("instagramUrl")}
      />
      <TextInput
        label="페스티벌 예매"
        isSubInput
        placeholder="페스티벌 예매를 위한 주소를 입력해주세요."
        error={submitCount > 1 ? errors.ticketLink?.message : undefined}
        {...register("ticketLink")}
      />

      <TextInput
        label="페스티벌 비용"
        placeholder="페스티벌 비용을 입력해주세요."
      />

      <label className="text-subtitle-medium text-gray-scale-900">
        페스티벌 키워드
      </label>

      <Controller
        control={control}
        name="categoryIds"
        render={({ field: { onChange, value } }) => (
          <CategoryKeywordInput
            moods={categories}
            selectedMoods={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="moodIds"
        render={({ field: { onChange, value } }) => (
          <MoodKeywordInput
            moods={moods}
            selectedMoods={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="tip"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <DescriptionInput
            label="페스티벌 꿀팁"
            placeholder="페스티벌 꿀팁을 작성해주세요."
            value={value}
            onChange={onChange}
            currentLength={value?.length ?? 0}
            maxLength={100}
            error={errors.tip?.message}
          />
        )}
      />
    </section>
  );
};

export default CreateFestivalSecondStep;
