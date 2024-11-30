import React from "react";


import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

function Layout() {
  return (
    <div className="contiener">
      <Navbar />
      <div>
        <main className="mt-[30px]">
          <Outlet />
        </main>
      </div>

      <Footer/>
    
    </div>
  );
}

export default Layout;
