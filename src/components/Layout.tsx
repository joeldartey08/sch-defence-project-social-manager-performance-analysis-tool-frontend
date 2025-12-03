import React from "react";
import SideNav from "./SideNav";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="md:flex gap-10">
      <SideNav />
      <div className="w-full h-screen pt-20 md:pt-0 md:overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
