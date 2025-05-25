import React from "react";
import { Search, Bell, Plus, ChevronDown } from "lucide-react";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        <div className="dashboard-left-section">
          <div className="section-header">
            <div className="search-container">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
            <button className="notification-btn">
              <Bell className="bell" size={20} />
            </button>
          </div>
          <div className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Dashboard</h1>
            </div>
            <div className="dashboard-week">
              <div>
                <p>This week</p>
              </div>
              <div>
                <ChevronDown size={12} />
              </div>
            </div>
          </div>
          <AnatomySection />
          <ActivityFeed />
        </div>

        <div className="dashboard-right-section">
          <div className="section-header">
            <div className="user-profile">
              <img
                src="/Assets/Images/user.png"
                alt="User Avatar"
                className="user-avatar"
              />
            </div>
            <div>
              <button className="add-btn">
                <Plus size={20} />
              </button>
            </div>
          </div>
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
