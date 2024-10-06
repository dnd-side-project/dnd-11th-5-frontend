import { useEffect } from "react";

import { getClientSideSession } from "@/apis/instance";
import { useUserStore } from "@/store/user";
import { log } from "@/utils";

const useInitializeUserProfile = () => {
  const setUser = useUserStore((state) => state.updateUser);

  const initializeUserProfile = async () => {
    try {
      const session = await getClientSideSession();
      console.log("🚀 ~ initializeUserProfile ~ session:", session);

      if (session) {
        const {
          userId,
          email,
          nickname,
          statusMessage,
          profileImage,
          isProfileRegistered,
          userTypeId,
        } = session;

        setUser({
          userId,
          email: email as string,
          nickname: nickname as string,
          statusMessage: statusMessage as string,
          profileImage: profileImage as string,
          isProfileRegistered: isProfileRegistered as boolean,
          userTypeId: userTypeId as number,
        });
      }
    } catch (error) {
      log(error);
    }
  };

  useEffect(() => {
    initializeUserProfile();
  }, []);
};

export default useInitializeUserProfile;
