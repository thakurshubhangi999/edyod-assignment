import React from "react";
import "./RightAside.css";
import { BsFillClockFill  } from 'react-icons/bs';
function RightAside() {
  return (
    <div className="right-container">
      <div className="header-right">
      <div className="image-container">
  <img src="\image1.PNG" alt="image1" />
  {/* <div className="text-container">
    <h5>Sign Up</h5>
  </div> */}
  <img src="\image2.PNG" alt="image2" />
</div>
</div>
        <h2 className="heading">Select Your Subscription Plan</h2>
      
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
        <div className="line">
        <hr/>
        </div>
      </div>
    
      <div className="footer">
       
        <h3>Subscription Fee<span> &#8377; 18,500</span></h3>
        <label className="input-container5">
          <input type="hidden" name="option" value="option2" className="footer-value" />Limited Time Offer
          <BsFillClockFill/>
          Offer Valid Till May 25 2023
        </label>
      
      </div>
      <div className="gst">Total (Incl. 18% of GST) </div>
      <div className="buttons-container">
        <button className="button1">Cancel</button>
        <button className="button2">Proceed To Pay</button>
        
      </div>
      {/* <div>
      <img src="\razorpay.png" alt="img" />
      </div> */}
    </div>
  );
}

export default RightAside;
