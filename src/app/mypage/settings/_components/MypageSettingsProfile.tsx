"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { getMe, updateMe } from "@/apis/user/me/me";
import { BasicButton } from "@/components/core/Button";
import { TextInput } from "@/components/core/Input";
import { useUserStore } from "@/store/user";
import {
  ProfileMeUpdateSchema,
  ProfileMeUpdateSchemaType,
} from "@/validations/ProfileUpdateMeSchema";

const MypageSettingsProfile = () => {
  const updateUser = useUserStore((state) => state.updateUser);
  const user = useUserStore((state) => state.user);

  const { control, handleSubmit } = useForm<ProfileMeUpdateSchemaType>({
    values: {
      nickname: user?.nickname ?? "",
      statusMessage: user?.statusMessage ?? "",
    },
    resolver: zodResolver(ProfileMeUpdateSchema),
  });

  const onSubmit = async (data: ProfileMeUpdateSchemaType) => {
    await updateMe(data);
    const userInfo = await getMe();
    updateUser(userInfo);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col justify-between gap-[28px]"
    >
      <Controller
        control={control}
        name="nickname"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <TextInput
            label="닉네임"
            placeholder="페스티벌 명을 입력해주세요."
            value={value}
            onChange={onChange}
            currentLength={value?.length ?? 0}
            maxLength={10}
            error={errors.nickname?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="statusMessage"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <TextInput
            label="상태메세지"
            placeholder="페스티벌 명을 입력해주세요."
            value={value}
            onChange={onChange}
            currentLength={value?.length ?? 0}
            maxLength={30}
            error={errors.statusMessage?.message}
          />
        )}
      />

      <BasicButton type="submit" label="완료" />
    </form>
  );
};

export default MypageSettingsProfile;
