"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { ReviewKeyword } from "@/apis/review/reviewKeywords/reviewKeywordsType";
import { postReviews } from "@/apis/review/reviews/reviews";
import { BasicButton } from "@/components/core/Button";
import { DescriptionInput } from "@/components/core/Input";
import ReviewKeywordInput from "@/components/core/Input/KeywordInput/ReviewKeywordInput";
import { ProgressCircle } from "@/components/core/Progress";
import ImageUploader from "@/components/imageUploader/ImageUploader";
import { CREATE_FESTIVAL_SETTING } from "@/config";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import NewReviewSchema, {
  NewReviewSchemaType,
} from "@/validations/NewReviewSchema";

import Input_rating from "./_components/Input_rating";

interface Props {
  keywords: Array<ReviewKeyword>;
  festivalId: string;
}

const ReviewNewView: FC<Props> = ({ keywords, festivalId }) => {
  const router = useRouter();
  const methods = useForm<NewReviewSchemaType>({
    defaultValues: {
      festivalId,
      rating: 0,
      content: "",
      keywordIds: [],
      images: [],
    },
    resolver: zodResolver(NewReviewSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: NewReviewSchemaType) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      await postReviews(data);
      router.back();
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <DefaultHeader label="리뷰 작성" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[34px] p-4"
      >
        <Controller
          control={control}
          name="rating"
          render={({ field: { onChange, value } }) => (
            <Input_rating
              label="페스티벌은 어떠셨나요?"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="keywordIds"
          render={({ field: { onChange, value } }) => (
            <ReviewKeywordInput
              keywords={keywords}
              selectedkeywordId={value}
              onChange={onChange}
            />
          )}
        />

        <div className="flex flex-col">
          <Controller
            control={control}
            name="images"
            render={({ field: { onChange, value } }) => (
              <ImageUploader
                label="사진 및 리뷰"
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
            name="content"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <DescriptionInput
                placeholder="페스티벌과 과련된 리뷰만 작성해주세요."
                onChange={onChange}
                currentLength={value.length}
                maxLength={300}
                error={error?.message}
              />
            )}
          />
        </div>

        <BasicButton
          label={"리뷰 등록하기"}
          type="submit"
          disabled={isSubmitting}
        />
      </form>

      {isSubmitting && (
        <div className="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-gray-scale-900/50">
          <ProgressCircle className="size-[100px]" />
        </div>
      )}
    </FormProvider>
  );
};

export default ReviewNewView;
