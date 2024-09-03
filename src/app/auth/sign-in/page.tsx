import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getServerSideSession, signInWithKakao } from "@/apis/auth/auth";
import FireworkAnimation from "@/components/Confetti/Firework";
import { KakaoButton } from "@/components/core/Button";

const SignIn = async () => {
  const session = await getServerSideSession();

  if (session?.isProfileRegistered) {
    redirect("/");
  }

  return (
    <>
      <main className="relative flex h-full w-full flex-col items-center justify-between gap-[30px] overflow-hidden bg-gray-scale-800 pb-[55px]">
        <div />
        <div className="relative flex h-full max-h-[540px] w-full flex-col items-center justify-center gap-[6px]">
          <Image
            priority
            className="z-[999]"
            width={145}
            height={45}
            src="/images/fiestaLogo.png"
            alt="Fiesta-Logo"
          />
          <h1 className="text-body1-regular text-gray-scale-300">
            페스티벌의 시작 피에스타와 함께!
          </h1>
          <Image
            priority
            className="absolute -right-[20px] bottom-0"
            width={140}
            height={117}
            src="/images/romantist.png"
            alt="romatist"
          />
          <Image
            priority
            className="absolute -right-10 top-1/2 -translate-y-1/2 -rotate-12"
            width={120}
            height={150}
            src="/images/partypeople.png"
            alt="partypeople"
          />
          <Image
            priority
            className="absolute -left-[50px] bottom-0 rotate-12"
            width={176}
            height={163}
            src="/images/inspirer.png"
            alt="inspirer"
          />
          <Image
            priority
            className="absolute -left-[50px] top-[70px] rotate-[24deg]"
            width={153}
            height={150}
            src="/images/healer.png"
            alt="healer"
          />
          <Image
            priority
            className="absolute right-[20px] top-0 -rotate-12"
            width={150}
            height={150}
            src="/images/explorer.png"
            alt="explorer"
          />
        </div>

        <form
          action={signInWithKakao}
          className="flex w-full flex-col items-center gap-[11px] px-[16px]"
        >
          <KakaoButton />
          <Link href="/" className="text-caption1-medium text-gray-scale-300">
            비회원으로 둘러보기
          </Link>
        </form>
      </main>
      <FireworkAnimation />
    </>
  );
};

export default SignIn;
