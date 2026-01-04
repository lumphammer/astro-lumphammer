import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";

const NavigateContext = createContext<{ currentPath: string } | null>(null);

export const useNavigationContext = () => {
  const contextValue = useContext(NavigateContext);
  if (!contextValue) {
    throw new Error(
      "useNavigationContext must be used within a NavigationContextProvider",
    );
  }
  return contextValue;
};

export const NavigationContextProvider = ({
  children,
  currentPath,
}: PropsWithChildren<{ currentPath: string }>) => {
  return (
    <NavigateContext.Provider value={{ currentPath }}>
      {children}
    </NavigateContext.Provider>
  );
};
