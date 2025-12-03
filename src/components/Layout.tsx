import React from "react";
import SideNav from "./SideNav";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex gap-10">
      <SideNav />
      <div className="w-full h-screen overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
