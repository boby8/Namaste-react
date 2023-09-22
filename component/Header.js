import { IMG_CDN_URL } from "../src/config";
const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src={IMG_CDN_URL}
    />
  );
};

 const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header