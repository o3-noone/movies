import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer p4'>
        <ul className="footer-list">
            <li className="footer-item">
                <Link to={"/"}>Home</Link>
                <p className='item itemF'><Link>Categories</Link></p>
                <p className='item'><Link>Devices</Link></p>
                <p className='item'><Link>Pricing</Link></p>
                <p className='item'><Link>FAQ</Link></p>
            </li>
            <li className="footer-item">
                <Link to={"/"}>Movies</Link>
                <p className='item itemF'><Link>Gernes</Link></p>
                <p className='item'><Link>Trending</Link></p>
                <p className='item'><Link>New Release</Link></p>
                <p className='item'><Link>Popular</Link></p>
            </li>
            <li className="footer-item">
                <Link to={"/"}>Shows</Link>
                <p className='item itemF'><Link>Gernes</Link></p>
                <p className='item'><Link>Trending</Link></p>
                <p className='item'><Link>New Release</Link></p>
                <p className='item'><Link>Popular</Link></p>
            </li>
            <li className="footer-item">
                <Link to={"/"}>Support</Link>
                <p className='item itemF'><Link>Contact Us</Link></p>
              
            </li>
            <li className="footer-item">
                <Link to={"/"}>Subscription</Link>
                <p className='item itemF'><Link>Categories</Link></p>
                <p className='item'><Link>Devices</Link></p>
             
            </li>
            <li className="footer-item">
                <Link to={"/"}>Connect With Us</Link>
                <div className="icon-footer">
                    <div className="iconf"><Link><i class="fa-brands fa-facebook-f"></i></Link></div>
                    <div className="iconf"><Link><i class="fa-brands fa-twitter"></i></Link></div>
                    <div className="iconf"><Link><i class="fa-brands fa-linkedin"></i></Link></div>
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