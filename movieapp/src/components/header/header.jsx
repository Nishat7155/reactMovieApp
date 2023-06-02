import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";


export const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (

    <header>
     <div className='container flexSB'>
       <nav className='flexSB'>
            <div className='logo'>
               <img src='./images/logo1.png' alt=""/>
            </div>
        <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
           <Link to ='/'>Home</Link>
           <Link to ='/movies'>Movies</Link>
           <Link to ='/series'>Series</Link>
           <Link to ='/pages'>Pages</Link>
           <Link to ='/pricing'>Pricing</Link>
           <Link to='/contact'>Contact</Link>
        </ul>
        <button className="toggle">
          <i className="fa fa-bars"></i>
        </button>
      </nav>
      <div className="account flexSB">
            <i className='fa fa-search'></i>
            <i className='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
      </div>
      </div>
    </header>
  )
}

export default Header;