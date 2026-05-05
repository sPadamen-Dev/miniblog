import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

import style from "./Navbar.module.css";

const Navbar = () => {
  const { user } = useAuthValue();
  const {logout} = useAuthentication();

  return (
    <nav className={style.navbar}>
      <NavLink to={"/"} className={style.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={style.links_list}>
        {!user && (
          <>
            <li className={style.list}>
              <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Entrar
              </NavLink>
            </li>{" "}
            <li className={style.list}>
              <NavLink
                to={"/register"}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Registra
              </NavLink>
            </li>{" "}
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Novo post
              </NavLink>
            </li>
                      <li>
            <NavLink
              to="/dashboard"
              className={({isActive})=>( isActive ? style.active: "")} >
                Dashboard
            </NavLink>
          </li>
          </>
        )}

        <li className={style.list}>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {/* <li>
          <span>Olá: {user.displayName}</span>
        </li> */}
        {
          <li>
            <button onClick={logout}>Sair</button> 
          </li>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
