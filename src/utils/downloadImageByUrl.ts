const imageExtensions = ["jpg", "jpeg", "png", "bmp", "tiff", "webp", "heic"];

export const downloadImageByUrl = async (
  imageUrl: string,
  fileName?: string,
) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const extension = imageUrl.split(".").pop()?.split("?").shift();

    if (!extension) {
      throw new Error("Invalid file");
    }

    if (!imageExtensions.includes(extension?.toLowerCase())) {
      throw new Error("Invalid image file");
    }

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${fileName ?? "my-festival-type"}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading the image:", error);
  }
};
