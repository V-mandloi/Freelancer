import React from "react";
import FrontSection from "./frontSection";
import FindFreelancerSection from "./findFreelancerSection";
import WhyChooseUs from "./whyChooseSection";
import Joinus from "./joinUs";

function homepage() {
  return (
    <div>
      <FrontSection />

      <hr className="hr"></hr>

      <FindFreelancerSection />

      <hr className="hr"></hr>

      <WhyChooseUs />

      <Joinus />
    </div>
  );
}

export default homepage;
