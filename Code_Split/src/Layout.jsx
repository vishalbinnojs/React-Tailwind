import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="sticky bottom-0">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
