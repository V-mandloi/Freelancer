import React from "react";
import "../css/whyChooseUs.css";

function whyChooseUs() {
  return (
    <div className="container3">
      <h2 className="title">Why Choose Us?</h2>
      <div className="cards">
        <div className="card1">
          <div className="cardContent">
            <h3>Top Talent at your Fingertips</h3>
            <p>
              This is a short description for the third service. It provides
              brief details about the service offered.
            </p>
          </div>
          <img src="Logo 3" alt="Logo 3" />
        </div>
        <div className="card1">
          <div className="cardContent">
            <h3>Effortless Collaboration</h3>
            <p>
              This is a short description for the second service. It provides
              brief details about the service offered.
            </p>
          </div>
          <img src="Logo 2" alt="Logo 2" />
        </div>
        <div className="card1">
          <div className="cardContent">
            {" "}
            <h3>Diverse Opportunities</h3>
            <p>
              This is a short description for the third service. It provides
              brief details about the service offered.
            </p>
          </div>
          <div>
            <img src="Logo 3" alt="Logo 3" />
          </div>
        </div>
        <div className="card1">
          <div className="cardContent">
            <h3>Sales and Services</h3>
            <p>
              This is a short description for the second service. It provides
              brief details about the service offered.
            </p>
          </div>

          <img src="Logo 2" alt="Logo 2" />
        </div>
      </div>
    </div>
  );
}

export default whyChooseUs;
