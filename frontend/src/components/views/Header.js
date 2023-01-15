import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

const Header = () => {
  const orders = useSelector((state) => state.orders);
  const productsQuantity = orders.length;
  const [active, setActive] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setActive(false);
    };
    window.addEventListener('resize', handleResize)
  })

  const toggleNavbarMenu = () => {
    setActive(!active);
  }

  return (
    <header className="mb-5">
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to={'/'} className="navbar-item">
            <img src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt="Your dram table logo" width="230" height="50" />
          </NavLink>
          <button className="navbar-burger" onClick={() => toggleNavbarMenu()}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
          {(productsQuantity > 0 && !active && screenWidth < 1024) && <span className="tag is-danger mt-2">{ productsQuantity }</span>}
        </div>
        <div className={active ? "navbar-menu is-active" : "navbar-menu"}>
          <div className="navbar-end">
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "navbar-item nav-link-selected" : "navbar-item")} onClick={() => toggleNavbarMenu()}>
              Home
            </NavLink>
            <NavLink to={'/about'} className={({ isActive }) => (isActive ? "navbar-item nav-link-selected" : "navbar-item")} onClick={() => toggleNavbarMenu()}>
              About
            </NavLink>
            <NavLink to={'/help'} className={({ isActive }) => (isActive ? "navbar-item nav-link-selected" : "navbar-item")} onClick={() => toggleNavbarMenu()}>
              Help
            </NavLink>
            <NavLink to={'/profile'} className={({ isActive }) => (isActive ? "navbar-item nav-link-selected" : "navbar-item")} onClick={() => toggleNavbarMenu()}>
              <img src={`${process.env.PUBLIC_URL}/images/Profile.svg`} alt="Cart" width="50" height="40" />
            </NavLink>
            <NavLink to={'/cart'} className={({ isActive }) => (isActive ? "navbar-item nav-link-selected" : "navbar-item")} onClick={() => toggleNavbarMenu()}>
              <img src={`${process.env.PUBLIC_URL}/images/Cart.svg`} alt="Cart" width="50" height="40" />
              {productsQuantity > 0 && <span className="tag is-danger">{ productsQuantity }</span>}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Header;