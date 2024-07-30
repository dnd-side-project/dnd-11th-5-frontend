import { signIn } from "@/auth";

const page = () => {
  return (
    <form
      action={async () => {
        "use server";

        await signIn("kakao");
      }}
      className="flex h-screen w-full items-center justify-center"
    >
      <button type="submit" className="rounded-lg bg-blue-100 px-4 py-2">
        Signin with Kakao
      </button>
    </form>
  );
};

export default page;
