import React from "react";
import "../css/joinUs.css";

function joinus() {
  return (
    <div className="container4">
      <h1 className="title2">Join Us Today</h1>
      <p className="subtitle">
        Your gateway to the world's top talent and opportunities. Whether you're
        a freelancer looking to showcase your skills or a business in search of
        the perfect collaborator, you've come to the right place. We bring
        together creativity, innovation, and expertise in one seamless platform.
      </p>
      <p className="subtitle2">
        You're here to hire or to get hired, we are the epitome of freelancing
        platforms-where quality meets opportunity.
      </p>
      <div className="actions">
        <div className="borderForSearch">
          <input
            type="text"
            placeholder="What skills are you looking for?"
            className="inputFeild"
          />
          <button className="searchButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ff6600"
              className="bi bi-search "
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <p className="or">Or</p>
        <button className="postButton">Post a Job</button>
      </div>
    </div>
  );
}

export default joinus;
