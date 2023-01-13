import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to={'/'} className="navbar-item">
          <img src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt="Your dram table logo" width="150" height="60" />
        </NavLink>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <NavLink to={"/"} className={({isActive}) => (isActive ? "navbar-item nav-link-selected"  : "navbar-item")}>
            Home
          </NavLink>
          <NavLink to={'/about'} className={({isActive}) => (isActive ? "navbar-item nav-link-selected"  : "navbar-item")}>
            About
          </NavLink>
          <NavLink to={'/help'} className={({isActive}) => (isActive ? "navbar-item nav-link-selected"  : "navbar-item")}>
            Help
          </NavLink>
          <NavLink to={'/profile'} className={({isActive}) => (isActive ? "navbar-item nav-link-selected"  : "navbar-item")}>
            <img src={`${process.env.PUBLIC_URL}/images/Profile.svg`} alt="Cart" width="50" height="40" />
          </NavLink>
          <NavLink to={'/cart'} className={({isActive}) => (isActive ? "navbar-item nav-link-selected"  : "navbar-item")}>
            <img src={`${process.env.PUBLIC_URL}/images/Cart.svg`} alt="Cart" width="50" height="40" />
          </NavLink>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;