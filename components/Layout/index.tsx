import React from "react";
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>React Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col flex-auto min-w-0 overflow-visible md:min-h-screen ">
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
