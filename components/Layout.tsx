import React, { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}
function Layout({ children }: Props) {
  return (
    <div className="mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
