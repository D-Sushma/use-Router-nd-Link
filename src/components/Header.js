// functional component===============================
// 4. import Link frm react router dom then use it
// to="/content"-->means link kha pr krna hai,(isme hame route ko dalna h jise hme btn ke click pr open krna hai

import React from 'react'
import './Header.css';
import Subheader from './Subheader';

// images put by src folder----------
// import amazonlogo from './images/amazon-logo.png'
import loclogo from './images/loc-logo.png'
import searchlogo from './images/search-logo.png';
import flagimg from './images/flagimg.png';
import cartlogo from './images/cart-logo.png';
import {Link} from 'react-router-dom';

export default function Header({data}) {
  
  return (

    <header>
      {/* <!-- HEADER PART START -->  */}
      <div className="header">
        <div className="amazon-logo">

          {/* image put by public folder=============== */}

          {/* Use Link------------------------------------ */}
          <Link to="/">
            <img src='./images/amazon-logo.png' alt=''/>
          </Link>
          {/* <img src={amazonlogo} alt="logo" /> */}

        </div>

        <div className="header-address">
          <div className="loc-logo">
            <img src={loclogo} alt="img" />
          </div>

          <div className="address-content">
            
            
            <div style={{ fontSize: "12px", color: "lightgray" }}>Hello {data.task} {data.name} </div>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>Select your address</div>
          </div>
        </div>


        <div className="search-bar">
          <div className="search-all">All</div>
          <div className="search-input">

            {/*10. {data.task} */}
            <input type="text" value={data.task}/>
          </div>
          <div className="search-img"><img src={searchlogo} alt="img" /></div>
        </div>

        <div className="right-container">
          <div className="flag-logo">
            <img src={flagimg} alt="img" />
          </div>

          <div className="signIn-account">
            <div style={{ fontSize: "12px", marginTop: "10px", marginLeft: "10px" }}>Hello, Sign in</div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "10px" }}>Accounts & Lists</div>
          </div>

          <div className="returns-order">
            {/* 11. {info.rating} --> access from object.js through props --------------------------------*/}
            <div style={{ fontSize: "12px", marginLeft: "10px", marginTop: "10px" }}>Returns</div>
            <div style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "10px" }}>& Orders</div>
          </div>

          <div className="cart-container">
            <div className="cart-logo">

              <div style={{
                textAlign: "center", marginBottom: "-10px", color: "orange",
                fontWeight: "bolder", fontSize: "14px"
              }}></div>

              <div><img src={cartlogo} alt="img" /></div>

            </div>

            
            <div style={{ fontWeight: "bold", fontSize: "14px", marginTop: "20px", color: "red" }}>Cart</div>
            
          </div>
        </div>
      </div>
      {/* <!-- HEADER PART END --> */}

      
      <Subheader />

    </header>

  )
}
