import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavButton from "./navButton";

const Main = () => {
  const showMenu = useSelector((state) => state.nav.showMenu);
  return (
    <div>
      <Header />
      {showMenu && <NavButton />}
      <Outlet />
      
    </div>
  );
};

export default Main;
