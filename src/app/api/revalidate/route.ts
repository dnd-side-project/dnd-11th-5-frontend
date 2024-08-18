import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return Response.json(
      { revalidated: false, message: "tag is required" },
      { status: 400 },
    );
  }

  revalidateTag(tag);
  return Response.json({ revalidated: true, now: Date.now() }, { status: 200 });
}
