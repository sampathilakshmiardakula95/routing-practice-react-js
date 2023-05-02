// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="main-container">
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-image"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="components">
      <li className="link">
        <Link to="/" className="component-link">
          Home
        </Link>
      </li>

      <li className="link">
        <Link to="/about" className="component-link">
          About
        </Link>
      </li>

      <li className="link">
        <Link to="/contact" className="component-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
