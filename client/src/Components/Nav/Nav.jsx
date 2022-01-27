import React, {useState}from "react";
import Search from "../Search/Search";
import style from './Nav.module.css';
import './Navigation.css';
import { BiMovie, BiShow, BiListCheck } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
import { UilAlignJustify, UilTimesSquare , UilClapperBoard, UilEye, UilClipboardNotes , UilAngleLeft  } from '@iconscout/react-unicons'
import { getMovies } from "../../config/config";

export const Nav = () => {

    const [user, setUser] = useState(true);
    const handleFunction = () => setUser(!user)
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
                        <Link to="#" className={style.navCostado}>
                            <UilAngleLeft className={style.icon}/>
                        </Link> 
                        </li>
                        <div className={style.DivListas}>
                        <li>
                            <Link to="/" className={style.linkStyle}>
                           {/*  <UilClapperBoard className={style.nav__icon}/> */}
                            <span >Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/porVer" className={style.linkStyle}>
                            {/* <UilEye  className={style.nav__icon}/> */}
                            <span>Por Ver</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/lista" className={style.linkStyle}>
                            <span>Mi Lista</span>
                            </Link>
                        </li>
                        </div>
                    </ul>
                </nav>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Nav