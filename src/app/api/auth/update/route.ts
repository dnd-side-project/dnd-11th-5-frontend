import type { NextRequest } from "next/server";
import { NextResponse } from "next/server"; // Ensure Response is imported

import { unstable_update } from "@/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await unstable_update({
      ...body.session,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
