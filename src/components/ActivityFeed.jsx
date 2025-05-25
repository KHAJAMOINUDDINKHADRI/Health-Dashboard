import React from "react";
import { activityData } from "../data/mockData";

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.chartData.map((d) => d.value));

  return (
    <div className="activity-section">
      <div className="activity-header">
        <h3 className="section-title">{activityData.title}</h3>
        <p className="activity-subtitle">{activityData.subtitle}</p>
      </div>

      {/* Activity Chart */}
      <div
        className="activity-chart"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end", 
          height: "150px", 
        }}
      >
        <div
          className="chart-day"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            height: "100%", 
            justifyContent: "flex-end", 
          }}
        >
          {/* Monday */}
          <div
            className="bar"
            style={{
              height: "60%",
              backgroundColor: "#cccccc",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: "30%",
              backgroundColor: "#00bcd4",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Cyan */}
          <div
            className="bar"
            style={{
              height: "40%",
              backgroundColor: "#5e35b1",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Purple */}
          <span className="bar-label">Mon</span>
        </div>
        <div
          className="chart-day"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          {/* Tuesday */}
          <div
            className="bar"
            style={{
              height: "50%",
              backgroundColor: "#5e35b1",
              width: "8px",
              borderRadius: "4px",
            }}
          ></div>{" "}
          {/* Purple */}
          <div
            className="bar"
            style={{
              height: "20%",
              backgroundColor: "#cccccc",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: "35%",
              backgroundColor: "#00bcd4",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Cyan */}
          <span className="bar-label">Tues</span>
        </div>
        <div
          className="chart-day"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          {/* Wednesday */}
          <div
            className="bar"
            style={{
              height: "40%",
              backgroundColor: "#00bcd4",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Cyan */}
          <div
            className="bar"
            style={{
              height: "25%",
              backgroundColor: "#cccccc",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: "55%",
              backgroundColor: "#5e35b1",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Purple */}
          <span className="bar-label">Wed</span>
        </div>
        <div
          className="chart-day"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          {/* Thursday */}
          <div
            className="bar"
            style={{
              height: "70%",
              backgroundColor: "#cccccc",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: "45%",
              backgroundColor: "#5e35b1",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Purple */}
          <span className="bar-label">Thurs</span>
        </div>
        <div
          className="chart-day"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          {/* Friday */}
          <div
            className="bar"
            style={{
              height: "65%",
              backgroundColor: "#00bcd4",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Cyan */}
          <div
            className="bar"
            style={{
              height: "30%",
              backgroundColor: "#cccccc",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: "50%",
              backgroundColor: "#5e35b1",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Purple */}
          <span className="bar-label">Fri</span>
        </div>
        <div
          className="chart-day"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          {/* Saturday */}
          <div
            className="bar"
            style={{
              height: "25%",
              backgroundColor: "#cccccc",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: "40%",
              backgroundColor: "#5e35b1",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Purple */}
          <span className="bar-label">Sat</span>
        </div>
        <div
          className="chart-day"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          {/* Sunday */}
          <div
            className="bar"
            style={{
              height: "55%",
              backgroundColor: "#00bcd4",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Cyan */}
          <div
            className="bar"
            style={{
              height: "20%",
              backgroundColor: "#cccccc",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>
          <div
            className="bar"
            style={{
              height: "30%",
              backgroundColor: "#5e35b1",
              width: "8px",
              borderRadius: "4px",
              marginBottom: "2px",
            }}
          ></div>{" "}
          {/* Purple */}
          <span className="bar-label">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
