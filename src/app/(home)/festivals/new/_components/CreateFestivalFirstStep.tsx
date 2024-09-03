import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { DescriptionInput, TextInput } from "@/components/core/Input";
import ImageUploader from "@/components/imageUploader/ImageUploader";
import { CREATE_FESTIVAL_SETTING } from "@/config";
import { CreateFestivalType } from "@/validations/CreateFestivalSchema";

const CreateFestivalFirstStep = () => {
  const { control } = useFormContext<CreateFestivalType>();

  return (
    <section className=" flex w-full flex-col gap-[32px]">
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <TextInput
            label="페스티벌 명"
            placeholder="페스티벌 명을 입력해주세요."
            value={value}
            onChange={onChange}
            currentLength={value?.length ?? 0}
            maxLength={30}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="images"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <ImageUploader
            label="대표 이미지"
            value={value}
            onChange={onChange}
            accept={CREATE_FESTIVAL_SETTING.ACCEPTED_IMAGE_TYPES.map(
              (format) => "." + format,
            ).join(", ")}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <DescriptionInput
            label="상세설명"
            placeholder="페스티벌 설명을 작성해주세요."
            value={value}
            onChange={onChange}
            currentLength={value?.length ?? 0}
            maxLength={300}
            error={errors.description?.message}
          />
        )}
      />
    </section>
  );
};

export default CreateFestivalFirstStep;
