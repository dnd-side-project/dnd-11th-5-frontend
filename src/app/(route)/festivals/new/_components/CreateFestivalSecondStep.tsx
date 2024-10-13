import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import {
  FestivalCategory,
  FestivalMood,
} from "@/apis/onboarding/onboardingType";
import {
  AddressInput,
  CategoryKeywordInput,
  DescriptionInput,
  MoodKeywordInput,
  TextInput,
  TimeInput,
} from "@/components/core/Input";
import { CreateFestivalType } from "@/validations/CreateFestivalSchema";

import DurationFestivalInput from "./DurationFestivalInput";

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

  const handleAddress = (
    address: string,
    sido: string,
    sigungu: string,
    latitude: string,
    longitude: string,
  ) => {
    setValue("address", address);
    setValue("sido", sido);
    setValue("sigungu", sigungu);
    setValue("latitude", latitude);
    setValue("longitude", longitude);
  };

  const handleGetError = (name: keyof CreateFestivalType) => {
    if (submitCount < 2) {
      return undefined;
    }

    const errorMessage = errors[name]?.message ?? undefined;

    if (typeof errorMessage === "string") {
      return errorMessage;
    }

    return undefined;
  };

  return (
    <section className="flex w-full flex-col gap-[18px]">
      <DurationFestivalInput handleGetError={handleGetError} />

      <AddressInput
        value={null}
        onChange={handleAddress}
        error={handleGetError("address")}
      />

      <Controller
        control={control}
        name="playtime"
        render={({ field: { onChange, value } }) => (
          <TimeInput
            value={value}
            onChange={onChange}
            error={handleGetError("playtime")}
          />
        )}
      />

      <label className="text-subtitle-medium text-gray-scale-900">URL</label>

      <TextInput
        label="공식홈페이지"
        isSubInput
        placeholder="공식홈페이지 주소를 입력해주세요."
        error={handleGetError("homepageUrl")}
        {...register("homepageUrl")}
      />
      <TextInput
        label="인스타그램 계정"
        isSubInput
        placeholder="인스타그램 계정을 입력해주세요."
        error={handleGetError("instagramUrl")}
        {...register("instagramUrl")}
      />
      <TextInput
        label="페스티벌 예매"
        isSubInput
        placeholder="페스티벌 예매를 위한 주소를 입력해주세요."
        error={handleGetError("ticketLink")}
        {...register("ticketLink")}
      />

      <TextInput
        label="페스티벌 비용"
        placeholder="페스티벌 비용을 입력해주세요."
        error={handleGetError("fee")}
        {...register("fee")}
      />

      <label className="text-subtitle-medium text-gray-scale-900">
        페스티벌 키워드
      </label>

      <Controller
        control={control}
        name="categoryIds"
        render={({ field: { onChange, value } }) => (
          <CategoryKeywordInput
            categories={categories}
            label="주제"
            selectedCategories={value}
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
