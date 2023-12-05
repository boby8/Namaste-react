import { useState } from "react";
import { IMG_CDN_URL } from "../src/config";
import { Link } from "react-router-dom";
const Title = () => {
  return <img className="logo" alt="logo" src={IMG_CDN_URL} />;
};

const loggedInUser = () => {
  return true;
};

const Header = () => {
  const [isLoggedIn, setloggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
          <li>Cart</li>
          {isLoggedIn ? (
            <button onClick={() => setloggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setloggedIn(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
