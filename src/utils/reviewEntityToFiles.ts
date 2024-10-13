import { Image } from "@/apis/review/reviews/reviewsType";

export async function reviewEntityToFiles(urls?: Image[]): Promise<File[]> {
  if (!urls) return [];

  const files = await Promise.all(
    urls.map(async ({ imageId, imageUrl }) => {
      const extension = imageUrl.split(".").pop()?.toLowerCase();
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return new File([blob], `${imageId}.${extension?.toLowerCase()}`, {
        type: `image/${extension}`,
      });
    }),
  );
  return files;
}
