import React from "react";
import "../css/findfreelancer.css";

function FindFreelancer() {
  return (
    <div className="container">
      <h1 className="secheading">Find the Freelancer</h1>
      <div className="categories">
        <div className="category">
          <img src="/logo1.png" alt="Logo 1" />
          <h3>Engineering</h3>
        </div>
        <div className="category">
          <img src="/logo2.png" alt="Logo 2" />
          <h3>Business & Finance</h3>
        </div>
        <div className="category">
          <img src="/logo3.png" alt="Logo 3" />
          <h3>Design & Art</h3>
        </div>
        <div className="category">
          <img src="/logo4.png" alt="Logo 4" />
          <h3>Sales & Marketing</h3>
        </div>
        <div className="category">
          <img src="/logo5.png" alt="Logo 5" />
          <h3>Programming & Development</h3>
        </div>
        <div className="category">
          <img src="/logo6.png" alt="Logo 6" />
          <h3>Education & Training</h3>
        </div>
      </div>
      <button>VIEW ALL</button>
    </div>
  );
}

export default FindFreelancer;
