import { useState } from "react";
import { IMG_CDN_URL } from "../src/config";
const Title = () => {
  return <img className="logo" alt="logo" src={IMG_CDN_URL} />;
};

const loggedInUser = () => {

  return true;
};

const Header = () => {
  const [isLoggedIn, setloggedIn] = useState(false)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {isLoggedIn ? <button onClick={()=> setloggedIn(false)}>Logout</button> : <button onClick={()=> setloggedIn(true)}>Login</button>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
