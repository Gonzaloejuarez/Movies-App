import React, {useState}from "react";
import Search from "../Search/Search";
import style from './Nav.module.css';
import './Navigation.css';
import { BiMovie, BiShow, BiListCheck } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
import { UilAlignJustify, UilTimesSquare , UilClapperBoard, UilEye, UilClipboardNotes  } from '@iconscout/react-unicons'
import { getMovies } from "../../config/config";

export const Nav = () => {

    const [user, setUser] = useState(false);
    const handleFunction = () => setUser(!user)
    const location = useLocation()
    const linkStyle = style.nav__item;
    const activeLinkStyle = [style.nav__item, style.nav__item__selected].join(" ");
    return(
        <div >
            <div className={style.divNav2}>
            <div className={style.nav}>
                <div className="probando">
                <Link to="#" className={style.navCostado} >
                   <UilAlignJustify onClick={handleFunction}/>
                </Link>
                <nav className={user ? "nav-menu active" : "nav-menu"}>
                    <ul className={style.nav_ul} onClick={handleFunction}>
                        <li className="navbar-togle">
                        <Link to="#" className={style.navCostado2}>
                            <UilTimesSquare />
                        </Link> 
                        </li>
                        <li>
                            <Link to="/" className={linkStyle}>
                            <UilClapperBoard className={style.nav__icon}/>
                            <span >Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/porVer" className={linkStyle}>
                            <UilEye  className={style.nav__icon}/>
                            <span>Por Ver</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/MiLista" className={linkStyle}>
                            <UilClipboardNotes  className={style.nav__icon}/>
                            <span>Mi Lista</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Nav