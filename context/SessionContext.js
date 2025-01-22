<<<<<<< HEAD
"use client";
import { createContext, useContext } from "react";
import { useSession } from "next-auth/react";

const SessionContext = createContext();

export const SessionProviderWrapper = ({ children }) => {
    const { data: session } = useSession();
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export const useGlobalSession = () => useContext(SessionContext);
=======
version https://git-lfs.github.com/spec/v1
oid sha256:41f6b552c73dd4637d62e5ecdeff59b82e069464fb998a2a0d6eea8f608f8e3e
size 451
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
