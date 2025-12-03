import React, {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";

interface ShopContextType {
  nav: boolean;
  setNav: Dispatch<React.SetStateAction<boolean>>;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);
export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <ShopContext.Provider value={{ nav, setNav }}>
      {children}
    </ShopContext.Provider>
  );
};
