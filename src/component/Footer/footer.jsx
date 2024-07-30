import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
const Footer = ({setCount}) => {
  return (
    <div className='footer p4'>
        <ul className="footer-list">
            <li className="footer-item">
                <Link to={"/"} onClick={()=>{setCount(1);
                            localStorage.setItem("headerId", 1);

                }}>Home</Link>
                <p className='item itemF'><Link>Categories</Link></p>
                <p className='item'><Link>Devices</Link></p>
                <p className='item'><Link>Pricing</Link></p>
                <p className='item'><Link>FAQ</Link></p>
            </li>
            <li className="footer-item">
                <Link to={"/movies"} onClick={()=>{setCount(2);
                            localStorage.setItem("headerId", 2);

                }}>Movies</Link>
                <p className='item itemF'><Link>Gernes</Link></p>
                <p className='item'><Link>Trending</Link></p>
                <p className='item'><Link>New Release</Link></p>
                <p className='item'><Link>Popular</Link></p>
            </li>
            <li className="footer-item">
                <Link to={"/movies"} onClick={()=>{setCount(2);
                            localStorage.setItem("headerId", 2);

                }}>Shows</Link>
                <p className='item itemF'><Link>Gernes</Link></p>
                <p className='item'><Link>Trending</Link></p>
                <p className='item'><Link>New Release</Link></p>
                <p className='item'><Link>Popular</Link></p>
            </li>
            <li className="footer-item">
                <Link to={"/support"} onClick={()=>{setCount(3);
                            localStorage.setItem("headerId", 3);

                }}>Support</Link>
                <p className='item itemF'><Link>Contact Us</Link></p>
              
            </li>
            <li className="footer-item">
                <Link to={"/subscription" } onClick={()=>{setCount(4);
                            localStorage.setItem("headerId", 4);

                }}>Subscription</Link>
                <p className='item itemF'><Link>Categories</Link></p>
                <p className='item'><Link>Devices</Link></p>
             
            </li>
            <li className="footer-item">
                <Link to={"/"}>Connect With Us</Link>
                <div className="icon-footer">
                    <div className="iconf"><Link><i className="fa-brands fa-facebook-f"></i></Link></div>
                    <div className="iconf"><Link><i className="fa-brands fa-twitter"></i></Link></div>
                    <div className="iconf"><Link><i className="fa-brands fa-linkedin"></i></Link></div>
                </div>
            </li>
        </ul>
        <div className="footerB">
            <p>@2023 streamvib, All Rights Reserved</p>
            <div className="footerB-list">
                <Link to={"/"}>Terms of Use</Link>
                <Link to={"/"}>Privacy Policy</Link>
                <Link to={"/"}>Cookie Policy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer