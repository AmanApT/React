import { useContext } from "react";
import logo from "../../assets/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import LoginBtn from "./LoginBtn";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  //Subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact</Link>
          </li>
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/cart">
              {" "}
              🛒<sub className="font-bold text-sm">{cartItems.length}</sub>
            </Link>
          </li>
          <li>{data.userName}</li>

          <LoginBtn />
        </ul>
      </div>
    </div>
  );
};
export default Header;
