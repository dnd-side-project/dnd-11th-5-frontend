export async function initMsw() {
  if (process.env.NEXT_PUBLIC_STAGE !== "test") {
    return;
  }

  if (typeof window === "undefined") {
    console.log("MSW on Node");
    const { server } = await import("../mocks/server");
    server.listen();
  } else {
    console.log("MSW on browser");
    const { worker } = await import("../mocks/browser");
    await worker.start();
  }
}
