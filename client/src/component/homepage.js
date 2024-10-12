import React from "react";

function homepage() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <h1>fr</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Find Freelancers</a>
            </li>
            <li>
              <a href="#">Find Jobs</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          <button className="btn">Apply to find work</button>
          <button className="btn">Find consultant</button>
          <button className="btn">LogOut</button>
          <button className="btn">Register</button>
        </div>
      </header>
      <main className="main">
        <div className="hero">
          <h2>Welcome to Our Website</h2>
          <p>
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
      </main>
      <footer className="footer">
        <div className="copyright">
          <p>&copy; 2023 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default homepage;
