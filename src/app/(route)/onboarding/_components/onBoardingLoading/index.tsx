import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { IconButton } from "@/components/core/Button";
import { ProgressCircle } from "@/components/core/Progress";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

const ONBOARDING_LOADING_MESSAGES = [
  "페스티벌 관심사 파악 완료!",
  "페스티벌 무드 파악 완료!",
  "페스티벌 일행 파악 완료!",
  "페스티벌 우선순위 파악 완료!",
];

const OnBoardingLoading = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-[30px] px-[16px]">
      <div className="flex w-full flex-col items-center">
        <h1 className="max-w-[250px] break-words text-center text-title-bold">
          페스티벌 유형 프로필을
          <br />
          설정하는 중이예요
        </h1>
        <h1 className=""></h1>
        <h2 className="mt-[10px] text-caption2-medium">
          잠시만 기다려주세요...
        </h2>
      </div>

      <div className="relative">
        <ProgressCircle className="z-[10]" />
        <div className="absolute left-1/2 top-1/2 flex size-[128px] translate-x-[-50%] translate-y-[-50%] items-end justify-center rounded-full">
          <Image
            width={180}
            height={150}
            src={"/images/onboadingLoading.webp"}
            alt="onboading-loading"
          />
        </div>
      </div>

      <div className="flex h-auto w-full flex-col gap-[12px]">
        <AnimatePresence>
          {ONBOARDING_LOADING_MESSAGES.map((str, idx) => (
            <motion.div
              key={str}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: idx * 1 }}
            >
              <IconButton className="h-[54px] w-full rounded-[8px] bg-primary-05">
                <div className="flex w-full items-center gap-[6px] p-[16px]">
                  <CheckIcon
                    width={24}
                    height={24}
                    className={cn("text-primary-01", "duration-300")}
                  />
                  <span className="text-caption2-medium text-gray-scale-600">
                    {str}
                  </span>
                </div>
              </IconButton>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OnBoardingLoading;
