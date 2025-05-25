import React from "react";
import { healthCards } from "../data/mockData";
import Anatomy from "../../public/Assets/Images/Anatomy.png";
import Scan from "../../public/Assets/Images/scan.svg";
import { ArrowRight, ZoomIn } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container ">
        <div className="anatomy-image-container">
          <img src={Anatomy} alt="Human Anatomy" className="anatomy-image" />

          {/* Add scan image - Top Right */}
          <img
            src={Scan}
            alt="Scan Indicator"
            className="scan-indicator top-right"
            style={{
              position: "absolute",
              top: "18%", // Example value
              left: "48%", // Example value
            }}
          />

          {/* Add scan image - Middle Left */}
          <img
            src={Scan}
            alt="Scan Indicator"
            className="scan-indicator middle-left"
            style={{
              position: "absolute",
              top: "66%", // Example value, adjust as needed
              left: "30%", // Example value, adjust as needed
            }}
          />

          <div
            className="health-badge"
            style={{ position: "absolute", top: "22%", left: "78%" }}
          >
            ❤️ Healthly Heart
          </div>
          <div
            className="health-badge1"
            style={{ position: "absolute", bottom: "24%", right: "74%" }}
          >
            🦵 Healthly Leg
          </div>

          <div
            className="health-search"
            style={{ position: "absolute", top: "4%", left: "100%" }}
          >
            <ZoomIn color="gray" />
          </div>
        </div>
      </div>

      <div className="health-cards">
        {healthCards.map((card) => (
          <div key={card.id} className={`health-card ${card.status}`}>
            <div className="card-header">
              <div className="card-icon">
                {card.id === "lungs" && "🫁"}
                {card.id === "teeth" && "🦷"}
                {card.id === "bone" && "🦴"}
              </div>
              <h3>{card.title}</h3>
            </div>
            <p className="card-date">{card.date}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${card.progress}%` }}
              ></div>
            </div>
          </div>
        ))}

        <div
          className="dashboard-week"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div>
            <p>Details</p>
          </div>
          <div>
            <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
