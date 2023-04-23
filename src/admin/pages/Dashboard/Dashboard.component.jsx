import React, { useState, useEffect } from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar.component";
import { DashboardWrapper } from "./Dashboard.styles";
import "react-modern-drawer/dist/index.css";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import { TfiLayoutSlider } from "react-icons/tfi";
import { RiCalendarEventLine } from "react-icons/ri";
import CategoryMain from "../../models/Category/CategoryMain"

const Dashboard = ({ setIsLogin }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeModelIndex, setActiveModelIndex] = useState(0);

  const models = [
    {
      id: 0,
      name: "Category",
      icon: (
        <TfiLayoutSlider
          size={18}
          color={`${0 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },
    {
      id: 1,
      name: "Product",
      icon: (
        <RiCalendarEventLine
          size={18}
          color={`${1 === activeModelIndex ? "#fff" : "var(--icon-color)"}`}
        />
      ),
    },

  ];

  return (
    <DashboardWrapper>
      <DashboardNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsLogin={setIsLogin}
      />

      <div className="d-flex justify-content-end w-100 h-100">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          activeModelIndex={activeModelIndex}
          setActiveModelIndex={setActiveModelIndex}
          models={models}
        />

        {
          // index 0 ?
          <CategoryMain  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

          // index - 1
          // <AboutMain/>

          // index - 2
          // <EventsMain/>
        }
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;

