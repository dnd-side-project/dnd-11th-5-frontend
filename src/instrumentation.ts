export async function register() {
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.NODE_ENV === "test"
  ) {
    const { initMsw } = await import("./mocks/index");
    initMsw();
  }
}
