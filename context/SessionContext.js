
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
