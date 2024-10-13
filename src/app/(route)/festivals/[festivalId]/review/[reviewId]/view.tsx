"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { topKeywordFestivalKeys } from "@/apis/festivals/topKeywordFestival/topKeywordFestivalKeys";
import { ReviewKeyword } from "@/apis/review/reviewKeywords/reviewKeywordsType";
import { reviewsKeys } from "@/apis/review/reviews/reviewKeys";
import { getReview, updateReview } from "@/apis/review/reviews/reviews";
import { Review } from "@/apis/review/reviews/reviewsType";
import { BasicButton } from "@/components/core/Button";
import { DescriptionInput } from "@/components/core/Input";
import ReviewKeywordInput from "@/components/core/Input/KeywordInput/ReviewKeywordInput";
import { ProgressCircle } from "@/components/core/Progress";
import ImageUploader from "@/components/imageUploader/ImageUploader";
import { CREATE_FESTIVAL_SETTING } from "@/config";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";
import { log } from "@/utils/log";
import { reviewEntityToFiles } from "@/utils/reviewEntityToFiles";
import UpdateReviewSchema, {
  UpdateReviewSchemaType,
} from "@/validations/UpdateReviewSchema";

import Input_rating from "../new/_components/Input_rating";

interface Props {
  keywords: Array<ReviewKeyword>;
  reviewId: string;
  festivalId: string;
}

const ReviewEditView: FC<Props> = ({ keywords, reviewId, festivalId }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: review } = useQuery({
    queryKey: reviewsKeys.detail(reviewId),
    queryFn: () => getReview(reviewId),
  });

  const { mutate: updateReviewMutate } = useMutation({
    mutationFn: (payload: UpdateReviewSchemaType) => updateReview(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: reviewsKeys.all });
      queryClient.invalidateQueries({
        queryKey: topKeywordFestivalKeys.list({ festivalId }),
      });
    },
    onSettled: () => router.replace(`/festivals/${festivalId}`),
  });

  const methods = useForm<UpdateReviewSchemaType>({
    values: {
      reviewId: reviewId,
      rating: review?.rating ?? 0,
      content: review?.content ?? "",
      keywordIds: review?.keywords.map((v) => v.keywordId) ?? [],
      images: null,
    },
    resolver: zodResolver(UpdateReviewSchema),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    const handleReviewImagesToFile = async (review: Review) => {
      const files = await reviewEntityToFiles(review.images);
      setValue("images", files);
    };

    if (review) {
      handleReviewImagesToFile(review);
    }
  }, [review, setValue]);

  const onSubmit = async (data: UpdateReviewSchemaType) => {
    try {
      const imageIds = review?.images.map((img) => String(img.imageId)) ?? [];

      const imageNames = data.images
        ? Array.from(data.images).map((file) => (file as File).name)
        : [];

      const deletedImages = imageIds
        .filter((id) => !imageNames.includes(id))
        .map((id) => Number(id));

      const filtertedImage = (data.images as File[]).filter(
        (img) => !imageIds.includes(img.name.split(".")[0]),
      );

      const payload = { ...data, images: filtertedImage, deletedImages };

      updateReviewMutate(payload);
    } catch (error) {
      log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <DefaultHeader label="리뷰 작성" />
      <form
        onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}
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
            render={({ field: { onChange, value } }) =>
              value ? (
                <ImageUploader
                  label="사진 및 리뷰"
                  value={value}
                  onChange={onChange}
                  accept={CREATE_FESTIVAL_SETTING.ACCEPTED_IMAGE_TYPES.map(
                    (format) => "." + format,
                  ).join(", ")}
                />
              ) : (
                <div className="flex animate-pulse flex-col gap-[8px]">
                  <div className="h-[19px] w-[50px] rounded-lg bg-gray-scale-200"></div>
                  <div className="h-[94px] w-full rounded-lg bg-gray-scale-200"></div>
                </div>
              )
            }
          />

          <Controller
            control={control}
            name="content"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <DescriptionInput
                value={value}
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

export default ReviewEditView;
