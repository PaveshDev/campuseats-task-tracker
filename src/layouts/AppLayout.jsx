import { NavLink, Outlet } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

export default function AppLayout() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          Campus<span>Eats</span>
        </div>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/order">Place Order</NavLink>
        <div className="spacer" />
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
