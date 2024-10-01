import { zodResolver } from "@hookform/resolvers/zod";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { BasicButton, IconButton } from "@/components/core/Button";
import { DescriptionInput } from "@/components/core/Input";
import { XIcon } from "@/components/icons";
import { VALIDATION_ERROR_MESSAGES } from "@/config";

import AlertDialogWrapper from "../AlertDialogWrapper/AlertDialogWrapper";

interface Props extends Omit<AlertDialogProps, "onOpenChange"> {
  label: string;
  title: string;
  onConfirm: (content: string) => Promise<void>;
  onOpenChange: (open: boolean) => void;
  placeholder?: string;
}

const FestivalRequestSchema = z.object({
  content: z.string().min(1, VALIDATION_ERROR_MESSAGES.required),
});

const FestivalRequstDialog: FC<Props> = ({
  label,
  open,
  onOpenChange,
  onConfirm,
  title,
  placeholder,
}) => {
  const { control, handleSubmit } = useForm<{ content: string }>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(FestivalRequestSchema),
  });

  const onSubmit = async (data: { content: string }) => {
    await onConfirm(data.content);
    onOpenChange(false);
  };

  return (
    <AlertDialogWrapper
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      className="px-[24px] py-[30px]"
    >
      <form
        className="flex flex-col gap-[24px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full justify-between">
          <h1 className="text-center text-title-bold text-gray-scale-700">
            {label}
          </h1>
          <IconButton onClick={() => onOpenChange(false)}>
            <XIcon width="24px" height="24px" className="text-gray-scale-900" />
          </IconButton>
        </div>
        <Controller
          control={control}
          name="content"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <DescriptionInput
              placeholder={placeholder ?? ""}
              value={value}
              onChange={onChange}
              currentLength={value?.length ?? 0}
              maxLength={300}
              error={errors.content?.message}
            />
          )}
        />
        <div className="flex w-full gap-[8px]">
          <BasicButton
            label="취소"
            className="border-[1px] border-gray-scale-200 bg-gray-scale-0 text-gray-scale-400"
            onClick={() => onOpenChange(false)}
          />
          <BasicButton label="확인" type="submit" className="bg-primary-01" />
        </div>
      </form>
    </AlertDialogWrapper>
  );
};

export default FestivalRequstDialog;
