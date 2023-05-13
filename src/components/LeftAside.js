import React from 'react'
import "./LeftAside.css"
import { FaBookOpen  } from 'react-icons/fa';
import { BsFillClockFill  } from 'react-icons/bs';
import { MdOutlineLiveTv  } from 'react-icons/md';
import { SiGooglescholar  } from 'react-icons/si';
import { ImCross  } from 'react-icons/im';



function LeftAside() {
  return (
    <div className='body' style={{background: "black", width: "100vw", height: "100vh"}}>
    <h1 className='header-left'>Access curated courses worth  &#8377; <del className="del-line">18,500</del> at just <span>&#8377; 99</span> per year!</h1>
    <div className='content' >
   <h3><FaBookOpen style={{marginRight: "25px"}} /><span>100+</span> Job relevant courses </h3>
    <h3><BsFillClockFill style={{marginRight: "25px"}} /><span>20,000+</span> Hours pf content </h3>
    <h3><MdOutlineLiveTv style={{marginRight: "25px"}} /><span>Exclusive</span> Webinar access </h3>
    <h3><SiGooglescholar style={{marginRight: "25px"}} /> Scholarship worth <span> &#8377;94,500</span></h3>
    <h3><ImCross style={{marginRight: "25px"}} /><span>Ad Free</span> leraning experience</h3>
    </div>
    

    </div>

  )
}

export default LeftAside;
