import { Session } from "next-auth";
import { useEffect } from "react";

import { useUserStore } from "@/store/user";

const useInitializeUserProfile = (session: Session | null) => {
  const setUser = useUserStore((state) => state.updateUser);

  const initializeUserProfile = async () => {
    if (session) {
      const { user } = session;
      return setUser(user);
    }
    setUser(null);
  };

  useEffect(() => {
    initializeUserProfile();
  }, []);
};

export default useInitializeUserProfile;
