import React, { useState } from "react";
import {
  Clock,
  Clipboard,
  MessageCircle,
  Phone,
  Settings,
  LayoutDashboard,
  CalendarDays,
  SquarePlus,
  ChartSpline,
} from "lucide-react";
import { navigationItems } from "../../data/mockData";

const iconMap = {
  grid: LayoutDashboard,
  clock: Clock,
  calendar: CalendarDays,
  users: SquarePlus,
  "bar-chart": ChartSpline,
  clipboard: Clipboard,
  "message-circle": MessageCircle,
  phone: Phone,
  settings: Settings,
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hamburger-menu ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <aside className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-section">
            <h3 className="sidebar-title">General</h3>
            <nav className="nav-menu">
              {navigationItems.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <a
                    key={item.id}
                    href="#"
                    className={`nav-item ${item.active ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent size={18} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Tools</h3>
            <div className="nav-menu">
              <a className="nav-item" onClick={() => setIsOpen(false)}>
                <MessageCircle size={18} />
                <span>Chat</span>
              </a>
            </div>
            <div className="nav-menu">
              <a className="nav-item" onClick={() => setIsOpen(false)}>
                <Phone size={18} />
                <span>Support</span>
              </a>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="nav-menu absolute bottom-0 mb-4">
              <a className="nav-item" onClick={() => setIsOpen(false)}>
                <Settings size={18} />
                <span>Settings</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
