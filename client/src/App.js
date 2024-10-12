import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/homepage.js";
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage'; // Assuming you have a ContactPage component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
