import { useEffect } from "react";

import { getClientSideSession } from "@/apis/instance";
import { useUserStore } from "@/store/user";
import { log } from "@/utils";

const useInitializeUserProfile = () => {
  const setUser = useUserStore((state) => state.updateUser);

  const initializeUserProfile = async () => {
    try {
      const session = await getClientSideSession();

      if (session) {
        const { user } = session;

        setUser({ ...user });
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
