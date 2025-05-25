import React from "react";
import { upcomingSchedule } from "../data/mockData";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="section-title">The Upcoming Schedule</h3>

      {upcomingSchedule.map((dayGroup, dayIndex) => (
        <div key={dayIndex} className="schedule-day">
          <h4 className="day-title">{dayGroup.day}</h4>

          <div className="appointments-group">
            {dayGroup.appointments.map((appointment) => (
              <div
                key={appointment.id}
                className={`appointment-item ${appointment.color} ${
                  appointment.icon === "activity" || appointment.icon === "eye"
                    ? "quarter-width"
                    : "three-quarter-width"
                }`}
              >
                <div className="appointment-content">
                  <h5>{appointment.title}</h5>
                  <span className="appointment-time">{appointment.time}</span>
                </div>
                <div className="appointment-status">
                  {appointment.icon === "activity" && "💉"}
                  {appointment.icon === "eye" && "👁️"}
                  {appointment.icon === "heart" && "❤️"}
                  {appointment.icon === "brain" && "👨🏻‍⚕️"}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
