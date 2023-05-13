import React from "react";

import "./RightAside.css";

function RightAside() {
  return (
   <>
      <div className="header-right">
        <h1>Hi</h1>
        <span>
          {" "}
          <img src="\img1.PNG" alt="image1" />
          <h5>Sign Up</h5>
        </span>
       
        <span>
          {" "}
          <img src="\img2.PNG" alt="image2" />{" "}
          <h5>Subscribe</h5>
        </span>
        
        <h2>Select Your Subscription Plan</h2>
      </div>
      <div className="input-field">
        <label className="input-container1">
          <input type="radio" name="option" value="option1" />
          12 Months Subscription
        </label>
        <br />
        <label className="input-container2">
          <input type="radio" name="option" value="option2" />
          12 Months Subscription
        </label>
        <br />
        <label className="input-container3">
          <input type="radio" name="option" value="option2" />6 Months
          Subscription
        </label>
        <br />
        <label className="input-container4">
          <input type="radio" name="option" value="option2" />3 Months
          Subscription
        </label>
      </div>
      <div className="footer">
        <h3>Subscription Fee &#8377; 18,500</h3>
        </div>
      </>
  );
}

export default RightAside;
