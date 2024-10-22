import React from "react";
import "../App.css";
// import image from "";./idea.png

function Front() {
  return (
    <div className="container">
      <main className="main">
        <div className="hero">
          <h2>Welcome to Our Website</h2>
          <p className="p1">
            This is a short paragraph introducing the website. It provides a
            brief overview.
          </p>
          <p>
            This is a more detailed description of the content, services, or
            products offered by the website. Here, you can elaborate on the
            features, benefits, and other important information that you want to
            convey to your visitors.
          </p>
        </div>
        <div className="hero2">
          {/* <img src="{image}" alt="Example Image" /> */}
          <div className="FirstImage"></div>
        </div>
      </main>
    </div>
  );
}

export default Front;
