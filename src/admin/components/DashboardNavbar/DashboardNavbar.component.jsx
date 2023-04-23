import React from "react";
import {
  DashboardNavbarWrapper,
  DropdownContent,
  StyledPopup,
} from "./DashboardNavbar.styles";
import { FaBars } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import "reactjs-popup/dist/index.css";
import SearchNavbar from "../SearchNavbar/SearchNavbar.component";

const DashboardNavbar = ({ isSidebarOpen, setIsSidebarOpen, setIsLogin }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const logoutFromAccount = () => { }

  return (
    <DashboardNavbarWrapper>
      <div className="navbar-brand">
        <a href="/">El Dorado</a>

        <FaBars
          size={18}
          cursor={"pointer"}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      <div className="navbar-right">
        {isDesktop && <SearchNavbar focusStyle={true} width={"180px"} />}

        <div className="navbar-menu">
         
          <ImExit size={18} cursor={"pointer"}  onClick={logoutFromAccount} className="text-danger"/>
        </div>
      </div>
    </DashboardNavbarWrapper>
  );
};

export default DashboardNavbar;
