import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { getClientSideSession } from "@/apis/instance";
import { updateAuthSession } from "@/lib/updateAuthSession";
import { useUserStore } from "@/store/user";

const useUpdateUserSession = () => {
  const searchParams = useSearchParams();
  const setUser = useUserStore((state) => state.updateUser);

  const handleSessionUpdate = async () => {
    try {
      const session = await getClientSideSession();

      if (session) {
        session.user.userTypeId = Number(searchParams.get("userTypeId"));
        session.user.isProfileRegistered = true;
        const newSession = await updateAuthSession(session);

        setUser(newSession.user);
      }
    } catch (error) {
      console.error("Failed to update session:", error);
    }
  };

  useEffect(() => {
    handleSessionUpdate();
  }, []);
};

export default useUpdateUserSession;
