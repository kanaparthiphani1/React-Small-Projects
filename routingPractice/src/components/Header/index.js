// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-cont">
    <div className="logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="logo-img"
        alt="logo"
      />
      <h1 className="logo-text">Wave</h1>
    </div>
    <div className="nav-link-cont">
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
