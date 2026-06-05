import "./Header.css"
import { Link } from "react-router-dom";
function Header() {
  return <div className="header">
    <div>MU26A Store</div>
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="cart">Cart</Link></li>
      <li><Link to="orders">Orders</Link></li>
        <li><Link to="admin">Admin</Link></li>
       <li><Link to="login">Login</Link></li>
    </div>
  </div>;
}

export default Header