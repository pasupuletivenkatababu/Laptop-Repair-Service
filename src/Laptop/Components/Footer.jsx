import React from 'react'

const Footer = () => {
  return (
     <footer className="footer">
      
      <div className="footerContainer">

        {/* Column 1 */}
        <div className="footerSection">
          <h2 className="logo">Laptop Service</h2>
          <p>
            Professional laptop repair services for all brands.
            Fast, reliable, and affordable solutions.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footerSection">
          <h3>Services</h3>
          <ul>
            <li>Screen Repair</li>
            <li>Battery Replacement</li>
            <li>Keyboard Repair</li>
            <li>Motherboard Repair</li>
            <li>Data Recovery</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footerSection">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Location</li>
            <li>Book Service</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footerSection">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@laptopservice.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Address: Hyderabad, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footerBottom">
        © 2026 Laptop Service. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer