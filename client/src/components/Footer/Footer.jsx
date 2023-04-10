import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__upper">
        <div className="footer__upper-item">
          <h4>newsletter</h4>
          <a>Subscribe to our newsletter</a>
        </div>
        <div className="footer__upper-item">
          <h4>client services</h4>
          <a>FAQ</a>
          <a>Track Order</a>
          <a>Returns</a>
          <a>Shipping</a>
          <a>Payment</a>
          <a>Re-sell Program</a>
        </div>
        <div className="footer__upper-item">
          <h4>connect</h4>
          <a>TikTok</a>
          <a>Facebook</a>
          <a>Instagram</a>
        </div>
        <div className="footer__upper-item">
          <h4>contact us</h4>
          <p>Our Client Advisors are available<br></br>
          Mon-Fri 9am - 9pm ET & Sat-Sun 10am - 7pm ET
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-item">
          <p>© 2022 bsianstore</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer