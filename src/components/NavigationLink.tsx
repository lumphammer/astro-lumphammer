import { useCallback, useContext } from "react";
import { OnNavigateContext } from "./OnNavigateContext";
import type { PropsWithChildren } from "react";
import { useNavigationContext } from "./NavigationContext";

type NavigationLinkProps = PropsWithChildren<{
  to: string;
}>;

export function NavigationLink({ to, children }: NavigationLinkProps) {
  const { currentPath } = useNavigationContext();
  return (
    <a
      href={to}
      aria-current={to === currentPath ? "page" : undefined}
      data-currentpath={currentPath}
    >
      {children}
    </a>
  );
}
