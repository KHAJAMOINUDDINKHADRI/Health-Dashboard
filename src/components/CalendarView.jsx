import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { calendarData } from "../data/mockData";

const CalendarView = () => {
  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <div className="month-nav">
          <div className="month-title">{calendarData.month}</div>
          <div className="flex">
            <ArrowLeft size={16} />
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.days.map((dayData) => (
          <div key={dayData.day} className="calendar-day">
            <div className="day-header">
              <span className="day-name">{dayData.dayName}</span>
              <span className="day-number">{dayData.day}</span>
            </div>
            <div className="appointments-list">
              {dayData.appointments.map((time, index) => {
                let className = "appointment-time";
                let displayTime = time;

                if (time.includes("*.")) {
                  className += " filled-with-dot";
                  displayTime = time.replace("*.", "");
                } else if (time.includes("*")) {
                  className += " filled";
                  displayTime = time.replace("*", "");
                } else if (time === "⎯") {
                  className += " empty";
                }

                return (
                  <div key={index} className={className}>
                    <span>{displayTime}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="current-appointments">
        <div className="appointments-row">
          {calendarData.currentAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`appointment-card ${appointment.color} ${
                appointment.id === 1 ? "quarter-width" : "three-quarter-width"
              }`}
            >
              <div className="appointment-info">
                <h4>{appointment.type}</h4>
                <p>{appointment.time}</p>
                <span>{appointment.doctor}</span>
              </div>
              <div className="appointment-icon">
                {appointment.type.includes("Dentist") ? "🦷" : "💪"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
