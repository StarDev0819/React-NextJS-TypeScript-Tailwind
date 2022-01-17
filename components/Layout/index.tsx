import React from "react";
import Header from "~/components/features/Header";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col flex-auto min-w-0 overflow-visible md:min-h-screen ">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
