import React from "react";
import Sidebar from "../components/ui/Sidebar";
import DashboardMainContent from "../components/DashboardMainContent";
import Header from "../components/ui/Header";
import "../styles/dashboard.css";

const Index = () => {
  return (
    <div className="app-container">
      <div className="app-body">
        <Header />
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default Index;
