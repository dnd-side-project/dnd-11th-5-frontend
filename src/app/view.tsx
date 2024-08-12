"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";

import { BasicButton } from "@/components/core/Button";
import { TextInput } from "@/components/core/Input";
import AddressInput from "@/components/core/Input/AddressInput/AddressInput";
import DescriptionInput from "@/components/core/Input/DescriptionInput/DescriptionInput";
import DurationInput from "@/components/core/Input/DurationInput/DurationInput";

const HomeView = () => {
  const methods = useForm<{
    title: null | string;
    description: null | string;
    startDate: null | string;
    endDate: null | string;
    address: string | null;
    sido: string | null;
    sigungu: string | null;
  }>({
    defaultValues: {
      title: null,
      description: null,
      startDate: null,
      endDate: null,
      address: null,
      sido: null,
      sigungu: null,
    },
  });

  const onSubmit = (data: {
    title: null | string;
    description: null | string;
    startDate: null | string;
    endDate: null | string;
    address: string | null;
    sido: string | null;
    sigungu: string | null;
  }) => {
    console.log(data);
  };

  return (
    <main className="flex flex-wrap gap-4 bg-indigo-300">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <Controller
            control={methods.control}
            name="title"
            render={({
              field: { onChange, onBlur, value, ref },
              formState: { errors },
            }) => (
              <TextInput
                label="페스티벌 명"
                value={value ?? ""}
                onChange={onChange}
                maxlength={30}
                currentLength={value?.length}
                error={errors.title?.message}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="description"
            render={({
              field: { onChange, onBlur, value, ref },
              formState: { errors },
            }) => (
              <DescriptionInput
                label="상세설명"
                maxlength={300}
                value={value ?? ""}
                onChange={onChange}
                currentLength={value?.length}
                error={errors.description?.message}
              />
            )}
          />
          <DurationInput
            label="페스티벌 기간"
            start={methods.watch("startDate")}
            end={methods.watch("endDate")}
            onConfirm={(startDate, endDate) => {
              methods.setValue("startDate", startDate);
              methods.setValue("endDate", endDate);
            }}
          />
          <Controller
            control={methods.control}
            name="address"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <AddressInput
                value={value}
                onChange={(address, sido, sigungu) => {
                  onChange(address);
                  methods.setValue("sido", sido);
                  methods.setValue("sigungu", sigungu);
                }}
              />
            )}
          />
          <BasicButton label="제출" className="" type="submit" />
        </form>
      </FormProvider>
    </main>
  );
};

export default HomeView;
